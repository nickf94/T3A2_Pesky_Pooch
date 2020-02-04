import React, { useState, useEffect } from 'react';
// import {Image} from 'cloudinary-react';
import axios from 'axios'

export default function ImageControlPanel(props) {
  const [currentImage, setCurrentImage] = useState(null)

  const setImage = (e) => {
    setCurrentImage(e.target.files[0])
    props.setThumbnail(e.target.files[0])
  }

  return (
    <>
      <input name="image" type="file" accept="image/png, image/jpeg" onInput={event => setImage(event)} />
    </>
  )
}