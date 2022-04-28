import AddDate from "components/AddDate";
import DataGrid from "helpers/DataGrid";
import { useState } from "react";
import { Text } from "@chakra-ui/react";

export default function HomePage() {
  //const birthday = '2001-08-31';
  const [date, setDate] = useState([]);

  return (
    <>
      <Text fontSize="6xl">Ingresa una fecha 📆</Text>
      <AddDate setDate={setDate} />
      <hr />
      <ol>
        {
          date.map( dates =>(
            <DataGrid 
              key={dates} 
              date={dates} 
            />
          ))
        }
      </ol>
    </>
  );
}
