import React from "react";
import { Box, Image, Text, Badge, Stack } from "@chakra-ui/react";
import 'animate.css';

export default function PictureGridItem({ date, explanation, title, hdurl, url }) {
  //console.log(date, explanation, title, hdurl);

  return (
    <>
      <Box 
        className="animate__animated animate__fadeIn" 
        _hover={{ backgroundColor: 'gray.300' }}
        cursor='pointer'
        w="400px"
        rounded="20px"
        overflow="hidden"
        boxShadow="sm"
        bg="gray.200"
      >

        <Image className="animate__animated animate__fadeIn"  src={url} alt={title} />

        <Box p={5}>
          <Stack align="baseline">
            <Badge variant="solid" variantColor="black" rounded="full" px={2}>
              {date}
            </Badge>
            <Text fontWeight='bold' textAlign="center" fontSize="sm" textTransform='uppercase' color='gray.700' letterSpacing='wide' >{title}</Text>
          </Stack>
        </Box>

      </Box>
    </>
  );
}
