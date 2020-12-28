import React from "react";

const PicOfTheDay = ({data}) => {

  return(
    <div className="pictureOfTheDay">
      <img id="picOfTheDay" src={data.url} alt={data.title}></img>
    </div>
  )
  
}

export default PicOfTheDay;