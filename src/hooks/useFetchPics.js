import getPics from "helpers/getPics";
import { useEffect, useState } from "react";

//custom hook
//Every time that DataGrid changes, this hook will return data
export default function useFetchPics(date) {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //in order to render the data just once
  useEffect(() => {
    getPics(date).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [date]); //if the date changes by any situation, it will execute again

  return state; // data: [], loading: true -> return the state data
}
