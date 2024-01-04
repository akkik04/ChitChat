import boto3
import botocore.config
import json
import base64
from datetime import datetime
from email import message_from_bytes

# helper func to extract the text from the meeting notes.
def scrape_text_from_file(data):
    msg = message_from_bytes(data)
    
    # extracting the text from the document.
    text_content = ''
    
    # checking if the message is multipart or not, and then extracting the text.
    if msg.is_multipart():
        for part in msg.walk():
            if part.get_content_type() == "text/plain":
                text_content += part.get_payload(decode=True).decode('utf-8') + "\n"
                
    else:
        if msg.get_content_type() == "text/plain":
            text_content = msg.get_payload(decode=True).decode('utf-8')
            
    return text_content.strip() if text_content else None


def summarize_bedrock(content: str) -> str:
    
    # declaring special tokens used by llama 2 chat.
    B_INST, E_INST = "[INST]", "[/INST]"
    
    # creating the prompt for llama 2.
    instruction = B_INST + "Summarize the meeting notes that will follow below into a few paragraphs...highlighting the key aspects of the meeting notes:" + E_INST
    prompt_text = instruction + "\n{}".format(content)
    body = {
        "prompt":prompt_text,
        "temperature": 0.5,
        "top_p": 0.9,
        "max_gen_len": 2048,
    }
    
    # invoking the llama 2 chat model via AWS BedRock.
    try:
        bedrock = boto3.client("bedrock-runtime", region_name="us-east-1", config = botocore.config.Config(read_timeout=300, retries = {'max_attempts':3}))
        response = bedrock.invoke_model(body=json.dumps(body), modelId="meta.llama2-70b-chat-v1")
        response_content = response.get('body').read().decode('utf-8')
        response_data = json.loads(response_content)
        summary = response_data["generation"].strip()
        return summary

    except Exception as e:
        print(f"Error generating the summary: {e}")
        return ""

# main lambda handler func.
def lambda_handler(event, context):
    
    # decoding the body.
    decoded_body = base64.b64decode(event['body'])
    
    # extracting the text from the document.
    text_content = scrape_text_from_file(decoded_body)
    if not text_content:
        return {
            'statusCode':400,
            'body':json.dumps("Failed to extract content")
        }

    # generating the summary.
    summary = summarize_bedrock(text_content)

    return {
        'statusCode':200,
        'body': json.dumps({"summary": summary})
    }
