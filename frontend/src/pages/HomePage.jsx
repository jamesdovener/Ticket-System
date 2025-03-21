import { Container, VStack, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useTicketStore } from '../store/ticket'

const HomePage = () => {
  const { tickets, fetchTickets } = useTicketStore();

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Ticket ID</Th>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Category</Th>
            <Th>Status</Th>
            <Th>Priority</Th>
            <Th>Created At</Th>
            <Th>Updated At</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tickets.map(ticket => (
            <Tr key={ticket.id}>
              <Td>{ticket.id}</Td>
              <Td>{ticket.title}</Td>
              <Td>{ticket.description}</Td>
              <Td>{ticket.category}</Td>
              <Td>{ticket.status}</Td>
              <Td>{ticket.priority}</Td>
              <Td>{new Date(ticket.created_at).toLocaleString()}</Td>
              <Td>{new Date(ticket.updated_at).toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default HomePage
