import { useState } from 'react';
import axios from 'axios';
import { server } from '../../store';

const PrescriptionForm = () => {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      await axios.post(`${server}/uploadprescription`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // Optionally, you can redirect the user to a success page
      alert('Prescription uploaded successfully');
    } catch (error) {
      console.log(error);
      alert('Error uploading prescription');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="file" accept="image/*" onChange={handleFileInputChange} />
      <button type="submit" disabled={!file}>Upload</button>
    </form>
  );
};

export default PrescriptionForm;
