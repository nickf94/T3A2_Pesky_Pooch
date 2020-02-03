import React, { useState, useEffect } from 'react';
// import {Image} from 'cloudinary-react';
import axios from 'axios'

export default function ImageControlPanel() {
  const [currentImage, setCurrentImage] = useState(null)

  const setImage = (e) => {
    setCurrentImage(e.target.files[0])
  }

  const handleUpload = (event) => {
    event.preventDefault()
    let formData = new FormData();
    formData.append('image', currentImage);
    console.log(formData)
    axios.post("http://localhost:7002/imageUpload", formData, {
      headers: { 'content-type': 'multipart/form-data' },
    })
    .then(data => console.log(data))
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <form onSubmit={event => handleUpload(event)} enctype="multipart/form-data">
        <input name="image" type="file" accept="image/png, image/jpeg" onInput={event => setImage(event)} />
        <button>Upload</button>
      </form>
    </div>
  )
}