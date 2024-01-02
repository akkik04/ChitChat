import React, { useRef, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';

const UploadPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    // Add logic to handle the selected file
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <div className="w-full h-5/6 bg-white border border-black rounded-lg p-8">
          {/* Your upload file box goes here */}
          <input
            type="file"
            accept=".txt"
            className="w-full h-full"
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>
        <button
          onClick={handleUploadButtonClick}
          className="mt-4 bg-gray-300 hover:bg-gray-100 text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg"
        >
          Upload .txt File
        </button>
        <Link to="/try-now">
          <button className="hidden">Hidden Link</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default UploadPage;
