import React, { useState, useEffect } from 'react';
// import {Image} from 'cloudinary-react';
import axios from 'axios'

export default function ImageControlPanel() {
  const [currentImage, setCurrentImage] = useState(null)

  const setImage = (e) => {
    setCurrentImage(e.target.value)
    console.log(typeof(currentImage))
  }

  const handleUpload = (event) => {
    event.preventDefault()
    axios.post("http://localhost:7002/imageUpload", {data: currentImage}).then(data => console.log(data))
  }
  return (
    <div>
      <h1>Hello, world!</h1>
      <form onSubmit={event => handleUpload(event)}>
        <input type="file" accept="image/png, image/jpeg" onInput={event => setImage(event)} />
        <button>Upload</button>
      </form>
    </div>
  )
}