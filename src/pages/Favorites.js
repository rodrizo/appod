import {
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function Favorites() {
  const data = [
    {
      id: 1,
      name: "Galaxy M1",
      date: "19-04-2008",
      url: "https://m1.com",
      explanation: "A great image of Galaxy M1",
    },
    {
      id: 2,
      name: "Milky Way",
      date: "25-05-1998",
      url: "https://milky.com",
      explanation: "A great image of Milky Way",
    },
  ];
  return (
    <div>
        <Text fontSize='6xl'>Favorites</Text>
      <br />
      <br />
      <TableContainer>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Fecha</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((favs) => (
              <Tr key={favs.id}>
                <Td>{favs.name}</Td>
                <Td>{favs.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
