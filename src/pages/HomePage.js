import AddDate from "components/AddDate";
import DataGrid from "components/DataGrid";
import { useState } from "react";
import { Text } from "@chakra-ui/react";

import { Grid } from "@chakra-ui/react";
export default function HomePage() {
  //const birthday = '2001-08-31';
  const [date, setDate] = useState([]);

  return (
    <>
      <Text fontSize="6xl" align="center">
        Ingresa una fecha 📆
      </Text>
      <br />
      <AddDate setDate={setDate} />
      <hr />
      <br />
      <br />
      <ol>
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          {date.map((dates) => (
            <DataGrid key={date} date={dates} />
          ))}
        </Grid>
      </ol>
      <br />
      <br />
    </>
  );
}
