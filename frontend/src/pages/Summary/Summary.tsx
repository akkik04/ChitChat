import React, { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import useFileUpload from '../../hooks/useGetSummary'; // Import the custom hook

const FileUploadPage = () => {
  const { file, setFile, summary, uploadFile } = useFileUpload();
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      <h1>File Upload Page</h1>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <button onClick={handleUploadClick} disabled={!file || loading}>
        Upload .txt File
      </button>

      {loading && <p>Loading...</p>}

      {summary !== null && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'gray' }}>
          {loading ? '...' : <div style={{ backgroundColor: 'white', padding: '10px', border: '2px solid black', fontWeight: 'bold' }}>{summary}</div>}
        </div>
      )}
      <Footer>
      </Footer>
    </div>
  );
};

export default FileUploadPage;