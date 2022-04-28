import PictureGridItem from "components/PictureGridItem";
import React, { useEffect, useState } from "react";

export default function DataGrid({ date }) {
  const [images, setImages] = useState([]);

  console.log(date);

  //in order to render the data just once
  useEffect(() => {
    getPics();
  }, []);

  const getPics = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=WEoBUraWh8pdThKt7X0EmA4WqhK6y9heRPbRYCz5&date=${ date }`;
    const resp = await fetch(url);
    const data = await resp.json();

    //It works for more than 1 pic
    // const pics = data.map( img => {
    //     return {
    //         id: img.id,
    //         date: img.date,
    //         explanation: img.explanation,
    //         hdurl: img.hdurl,
    //         media_type: img.media_type,
    //         title: img.title,
    //         url: img.url
    //     }
    // })

    const pics = {
      id: data.id,
      date: data.date,
      explanation: data.explanation,
      hdurl: data.hdurl,
      title: data.title,
      url: data.url,
    };

    console.log(pics);
    setImages(pics);
  };

  return (
    <>
      <h3> {date} </h3>
      <div>
            <PictureGridItem
              key={images.id}
              {...images} //sending all the properties as an unique property
            />
      </div>
    </>
  );
}
