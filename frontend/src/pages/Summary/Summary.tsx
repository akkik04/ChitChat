import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer/Footer';
import useFileUpload from '../../hooks/useGetSummary';

const FileUploadPage = () => {
  const { file, setFile, summary, uploadFile } = useFileUpload();
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('...');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUploadClick = async () => {
    if (file) {
      setLoading(true);
      await uploadFile(file);
      setLoading(false);
    }
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (loading) {
      intervalId = setInterval(() => {
        setLoadingText((prevText) => (prevText.length < 5 ? prevText + '.' : ''));
      }, 500);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [loading]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-200">
      <h1 className="text-4xl font-bold mb-2">File Upload Page</h1>

      <p className="text-lg mb-8 text-center">
        Choose a your .txt meeting notes file and hit the upload button!
      </p>

      <div className="w-full max-w-md">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className="mb-4 p-2 border border-black rounded w-full"
        />

        <button
          onClick={handleUploadClick}
          disabled={!file || loading}
          className={`bg-gray-500 text-white p-2 rounded w-full ${
            !file || loading ? 'cursor-not-allowed' : 'hover:bg-gray-600'
          }`}
        >
          {loading ? 'Uploading...' : 'Upload .txt File'}
        </button>
      </div>

      {loading && (
        <p className="mt-4 text-center border border-black p-2 w-full max-w-md">
          Your Summary is Loading{loadingText}
        </p>
      )}

      {summary !== null && (
        <div className="mt-8 text-center border border-black p-4">
          {loading ? (
            '...'
          ) : (
            <div className="bg-white p-4 border-2 border-black font-bold">
              {summary}
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default FileUploadPage;
