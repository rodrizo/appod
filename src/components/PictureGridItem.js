import React from "react";
import { Box, Image, Text, Container } from "@chakra-ui/react";

export default function PictureGridItem({ date, explanation, title, hdurl }) {
  //console.log(date, explanation, title, hdurl);

  return (
    <div>
        <Container maxW='2xl' centerContent>
            <Box marginTop="10" maxW='sm' borderWidth='3px' borderRadius='lg' overflow='hidden' borderColor="default">
                 <Text fontSize='xl' color="blue.700"> {title} </Text>
                 <Text fontSize='sz'> { date } </Text>
              <Image src= {hdurl} alt={title}/>

              <Text fontSize="md"> { explanation } </Text>
            </Box>
        </Container>
    </div>
  );
}
