export default async function getPics(date) {
  const url = `https://api.nasa.gov/planetary/apod?api_key=WEoBUraWh8pdThKt7X0EmA4WqhK6y9heRPbRYCz5&date=${encodeURI(
    date
  )}`;
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
    date: data.date,
    explanation: data.explanation,
    hdurl: data.hdurl,
    title: data.title,
    url: data.url,
  };

  // console.log(pics);
  return pics;
}
