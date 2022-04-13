import React, { useState } from "react";
import Images from "../Tabs/Images";
import "../Tabs/ImagesChange.css";

function ImageChange() {
  const [selectImg, setSelectImg] = useState(Images[0]);

  return (
    <div className="container">
      <img src={selectImg} alt="Selected" className="selected" />

      <div className="imgContainter">
        {Images.map((img, index) => (
          <img key={index} src={img} alt="img" onClick={()=>setSelectImg(img)} style={{border: setSelectImg===img ? "4px solid lightpink" : "" }} />
        ))}
      </div>
    </div>
  );
}

export default ImageChange;
