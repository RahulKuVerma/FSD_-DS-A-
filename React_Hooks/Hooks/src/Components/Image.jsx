import { useState } from 'react';
import imageFile from '../assets/hero.png';

const Image = () => {
  const [imageSize, setImageSize] = useState({ height: 180, width: 280 });

  const resizeImage = (heightChange, widthChange) => {
    setImageSize((currentSize) => ({
      height: Math.max(60, currentSize.height + heightChange),
      width: Math.max(60, currentSize.width + widthChange),
    }));
  };

  return (
    <main className="image-controls">
      <h1>Move Image</h1>
      <div className="image-stage">
        <img
          src={imageFile}
          alt="React illustration"
          style={{
            height: `${imageSize.height}px`,
            width: `${imageSize.width}px`,
          }}
        />
      </div>
      <div className="movement-controls">
        <button type="button" onClick={() => resizeImage(-20, 0)}>row-</button>
        <button type="button" onClick={() => resizeImage(20, 0)}>row+</button>
        <button type="button" onClick={() => resizeImage(0, -20)}>column-</button>
        <button type="button" onClick={() => resizeImage(0, 20)}>column+</button>
      </div>
    </main>
  );
};

export default Image;
