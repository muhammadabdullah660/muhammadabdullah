import React, { useEffect, useState } from "react";
import BlurFade from "src/Components/BlurFade/blur-fade";
import "./BlurFade.css";

export function BlurFadeDemo() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the image list from the public directory
    fetch(`${process.env.PUBLIC_URL}/images/imageList.json`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error("Error fetching image list:", error);
      });
  }, []);

  return (
    <>
      <h2 className="mb-4">life.</h2>
      <section id="photos">
        {images.map((image, idx) => (
          <div key={image.src} className="grid-item">
            <BlurFade delay={0.25 + idx * 0.05} inView>
              <div className="card">
                <img
                  className="size-full object-contain"
                  src={`${process.env.PUBLIC_URL}${image.src}`}
                  alt={`img ${idx + 1}`}
                  style={{ width: image.width, height: image.height }}
                  loading="lazy"
                />
                <div className="card__content">
                  <h5 className="card__title">{image.title}</h5>
                  <p className="card__description">{image.description}</p>
                </div>
              </div>
            </BlurFade>
          </div>
        ))}
      </section>
    </>
  );
}
