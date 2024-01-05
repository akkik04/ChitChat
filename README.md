# ChitChat 🗣️📝

Welcome to ChitChat, your dynamic companion in the world of meetings! Crafted with the cutting-edge magic of Generative-AI (Gen-AI), ChitChat is your go-to web-based tool for effortlessly distilling the essence of your meeting notes.

In the hustle and bustle of meetings, we generally type down a plethora of points, creating a tapestry of information. Yet, the challenge lies in navigating through this tapestry to uncover the gems—the crucial insights. Fear not, as you can simply upload your meeting notes in a convenient .txt file, and let ChitChat weave its magic, providing you with a concise summary and highlighting the key points you need to shine a spotlight on. Unleash the power of ChitChat and let your meetings become moments of clarity and focus!

Try the tool [here](https://chit-chat-cyan.vercel.app/)

## Architecture 🏗️

ChitChat is built on a fully serverless architecture, leveraging the power of AWS to provide a robust, scalable and cost-effective solution, in addition to providing a seamless user experience with the web-stack. The application is built on the following services:

- **AWS BedRock**: A gem often overlooked in the tech landscape. Far from being in the shadows, it's our secret weapon for unleashing the full potential of Large Language Models (LLMs). BedRock serves as our gateway to a diverse array of LLMs on AWS, and I've chosen it strategically to elevate ChitChat's capabilities with hand-in-hand integration with the Llama 2 Chat Foundational Model!

- **AWS API-Gateway**: Utilized to deploy the backend for this application, which allows for a seamless integration with the frontend. API calls were configured to strategize traffic management (load balancing), authorization and access control. The API-Gateway is integrated with the AWS Lambda functions, to route the requests appropriately for managing the inference process.

- **AWS Lambda**:  The serverless lambda functions orchestrate the inference process and are invoked by the incoming request from the API-Gateway. The functions are configured to retrieve the text from the uploaded file, scrape it, and then pass it on to the LLama LLM (using appropriate tokenization) for a summary. The summary is then returned to the frontend for display.

- **Web-Stack**: The frontend is a user-friendly one built using TypeScript on the ReactJS framework, and is styled with TailWindCSS, providing a seamless user experience. The website is deployed on Vercel, and as mentioned earlier the backend is deployed on AWS API-Gateway.

## Architecture Diagram 📊
I've created a flowchart below to illustrate the flow of a **request** when using the application and its building block technologies! 

<div style="text-align: center;">
    <img src="assets/ChitChat FlowChart.png" alt="Image Description">
</div>

## Usage 🌐

To use the application, simply head over to the [website](https://chit-chat-cyan.vercel.app/) and upload your meeting notes in a .txt file. The application will then process the file and provide you with a summary of the meeting notes, along with the key points highlighted. You can then download the summary as a .txt file for your convenience.

## Demo 🎥

I've created a short demo video to showcase the application in action! You can view it below:

https://github.com/akkik04/ChitChat/assets/81925146/9dafdea9-1454-47f9-a3a7-59cfc98ff2b7
