import React from 'react';
// import {Image} from 'cloudinary-react';
import axios from 'axios'

export default function ImageControlPanel() {
  const handleUpload = (event) => {
    event.preventDefault()
    axios.post("http://localhost:7002/imageUpload", {data: event.target.value}).then(data => console.log(data))
  }
  return (
    <div>
      <h1>Hello, world!</h1>
      <form onSubmit={(event) => handleUpload(event)}>
        <input type="file" accept="image/png, image/jpeg" />
        <button>Upload</button>
      </form>
    </div>
  )
}