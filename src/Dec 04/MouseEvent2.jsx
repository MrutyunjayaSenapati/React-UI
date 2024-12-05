import axios from "axios";
import { useEffect, useState } from "react";

export function MouseEvents2() {
  const [mobileImages, setMobileImages] = useState([]);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    axios
      .get("/JSON/mobile.json") // Corrected path for JSON in the public folder
      .then((response) => {
        const images = Object.values(response.data); // Convert object to array
        setMobileImages(images);
        // Set the preview image to the first image in the fetched data
        if (images.length > 0) {
          setPreviewImage(images[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching mobile images:", error);
        alert("Failed to load images. Please try again later.");
      });
  }, []);

  function handleMouseOver(image) {
    setPreviewImage(image);
  }

  return (
    <div className="container-fluid">
      <div className="row mt-4">
        {/* Thumbnail Images */}
        <div className="col-1">
          {mobileImages.map((image, index) => (
            <div className="my-3" key={index}>
              <img
                onMouseOver={() => handleMouseOver(image)}
                src={image}
                width="100%"
                alt={`Mobile ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Preview Image */}
        <div className="col-11">
          {previewImage ? (
            <img src={previewImage} width="400" height="400" alt="Preview" />
          ) : (
            <img
              src="/images/placeholder.jpg" // Use a placeholder image
              width="400"
              height="400"
              alt="Placeholder"
            />
          )}
        </div>
      </div>
    </div>
  );
}
