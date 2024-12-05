import React, { useState } from 'react';

export function MouseEvent() {
  const [previewImage, setPreviewImage] = useState('../Image/m1.png');

  // JSON data with image paths
  const imageData = {
    img1: '../Image/m1.png',
    img2: '../Image/m2.png',
    img3: '../Image/m3.png',
    img4: '../Image/m4.png',
    img5: '../Image/m5.png',
  };

  // Convert JSON object to an array of image paths
  const mobileImages = Object.values(imageData);

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          {/* Thumbnail Images */}
          <div className="col-2">
            {mobileImages.map((image, index) => (
              <div className="my-3" key={index}>
                <img
                  src={image}
                  width="100%"
                  alt={`Mobile ${index + 1}`}
                  onMouseOver={() => setPreviewImage(image)} // Change preview on hover
                />
              </div>
            ))}
          </div>

          {/* Preview Image */}
          <div className="col-10">
            <img src={previewImage} height="400" alt="Preview" />
          </div>
        </div>
      </div>
    </>
  );
}
