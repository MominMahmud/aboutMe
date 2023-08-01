import React, { useState, useRef } from "react";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);

  function handleImage(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  function handleApi() {
    alert("Sent to backend");
    // You can use `image` to access the selected image data and process it further
  }

  return (
    <>
      <div>
        <input ref={inputRef} type="file" name="file" onChange={handleImage} />
        <button onClick={handleApi}>Submit</button>
      </div>
      <div>
        <h1>Uploaded image</h1>
        <br />
        <br />
        <br />
        {image && (
          <img
            className="w-50 p-3 border border-primary rounded-circle"
            src={image}
            alt=""
          />
        )}
      </div>
    </>
  );
}
