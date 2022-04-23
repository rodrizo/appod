import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

export default function Navbar() {

    const linkProps = {
        as: ReachLink,
        px:2,
        py:1,
        rounded: 'md',
        _hover: {
            textDecoration: 'none',
            bg: 'gray.200',
        }
    }

  return (
    <Box bg='gray.200' px={4} display={{ md: 'flex'}}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <Link to="/" {...linkProps}>
            <Text fontSize="xl">APPOD</Text>
          </Link>
          <Link to="favorites" {...linkProps}>
            Favorites
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
