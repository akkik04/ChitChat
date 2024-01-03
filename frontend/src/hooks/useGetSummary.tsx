import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface FileUploadResponse {
  summary: string;
}

const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string | null>(null);

  const uploadFile = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('document', file);

      const response: AxiosResponse<FileUploadResponse> = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}`,
        formData,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'text/plain',
          },
        }
      );

      if (response.status === 200) {
        setSummary(response.data.summary);
        console.log(response.data.summary);
      } else {
        setSummary(null);
      }
    } catch (error) {
      console.error('Error occurred during file upload:', error);
      setSummary(null);
    }
  };

  return { file, setFile, summary, uploadFile };
};

export default useFileUpload;
