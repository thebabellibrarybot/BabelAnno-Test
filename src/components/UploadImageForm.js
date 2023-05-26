import React from 'react';
import useGetAnno from '../functions/useGetAnno';

const UploadImageForm = () => {
  const { setImgArray } = useGetAnno();

  const handleImageUpload = (event) => {
    const fileList = event.target.files;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      // Create a new FileReader instance
      const reader = new FileReader();

      reader.onload = (e) => {
        const uploadedImage = {
          filename: file.name,
          uploadDate: new Date().toLocaleString(),
          image: e.target.result,
          size: file.size,
        };

        setImgArray((prevImages) => [...prevImages, uploadedImage]);
      };

      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
    </div>
  );
};

export default UploadImageForm;
