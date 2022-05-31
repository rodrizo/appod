import React from "react";
import { Box, Image, Text, Badge, Stack } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "animate.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function PictureGridItem({
  date,
  explanation,
  title,
  hdurl,
  url,
}) {
  //console.log(date, explanation, title, hdurl);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
        <Box
          className="animate__animated animate__fadeIn"
          _hover={{ backgroundColor: "gray.400", transform: 'scale(1.03)', transition:'transform 0.5s' }}
          cursor="pointer"
          w="400px"
          rounded="20px"
          overflow="hidden"
          boxShadow="sm"
          bg="gray.200"
          onClick={onOpen}
        >
          <Image
            className="animate__animated animate__fadeIn"
            src={url}
            alt={title}
          />

          <Box p={5}>
            <Stack align="baseline">
              <Badge variant="solid" variantcolor="black" rounded="full" px={2}>
                {date}
              </Badge>
              <Text
                fontWeight="bold"
                textAlign="center"
                fontSize="sm"
                textTransform="uppercase"
                color="gray.700"
                letterSpacing="wide"
              >
                {title}
              </Text>
            </Stack>
          </Box>
        </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <br />
          <ModalHeader textAlign="center"> 🌠 {title} 🌠</ModalHeader>
          <ModalCloseButton />
          <hr />
          <ModalBody textAlign="justify">{explanation}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <IconButton variant="outline" icon={<StarIcon />}></IconButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
