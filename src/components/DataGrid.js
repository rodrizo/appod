import React from "react";

export function DataGrid() {
  const getPics = async () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=WEoBUraWh8pdThKt7X0EmA4WqhK6y9heRPbRYCz5&start_date=2008-08-31&end_date=2008-09-1';
    const resp = await fetch(url);
    const data = await resp.json();

    const pics = data.map( img => {
        return {
            date: img.date,
            explanation: img.explanation,
            hdurl: img.hdurl,
            media_type: img.media_type,
            title: img.title,
            url: img.url
        }
    })

    console.log(pics);
  };

  getPics();

  return (
    <div>
      <h3> pics</h3>
    </div>
  );
}
