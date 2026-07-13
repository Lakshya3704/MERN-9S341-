import React from 'react'
import { useRef, useState } from 'react'
const Useref = () => {
    const [image , setImage] = useState(null);
    const imageRef = useRef();
    function handleChange(e){
        let file = e.target.files[0];
        if(file){
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    }

    function removeImage(){
        setImage(null);
        imageRef.current.value='';
    }
  return (
    <>
        <input type='file' accept='image/jpeg, image/jpg' ref={imageRef} onChange={handleChange}></input>
        <button onClick={removeImage}>Remove Image</button>

        <img src={image}></img>
    </>
  )
}

export default Useref