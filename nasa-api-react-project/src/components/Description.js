import React from "react";

const Description = ({data}) => {

  return (
    <div className="desc">
      <p id="description">DESCRIPTION</p>
      <p id="description-date">Date: {data.date} </p>
      <p id="description-title">Title: {data.title}</p>
    </div>
  )
  
}

export default Description;
