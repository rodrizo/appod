import PictureGridItem from "components/PictureGridItem";
import useFetchPics from "hooks/useFetchPics";

export default function DataGrid({ date }) {
  const { data: images, loading } = useFetchPics(date);

  return (
    <>
      {/* {loading && <p>Loading</p>} */}
        <PictureGridItem
          key={images.date}
          {...images} //sending all the properties as an unique property
        />
    </>
  );
}
