import { Select, Button, Input, Box, Container, Heading, useColorModeValue, VStack, useToast } from '@chakra-ui/react';
import { useState } from 'react'
import { useTicketStore } from '../store/ticket';

const CreatePage = () => {
  const [newTicket, setNewTicket] = useState({
    title: '',
    description: '',
    category: '',
    status: '',
    priority: '',
  });

const resetForm = () => {
  setNewTicket({
    title: '',
    description: '',
    category: '',
    status: '',
    priority: '',
  });
}

  const toast = useToast()

  const {createTicket} = useTicketStore()

  const handleAddTicket = async () => {
    const {success, message} = await createTicket(newTicket)
    if(!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true})
    }else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true})

        resetForm()
    }
    console.log("Success: ", success)
    console.log("Message: ", message)
  };

  return <Container maxW={"container.sm"}>
    <VStack
      spacing={8}
    >
      <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
        Create New Ticket
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rounded={"lg"} shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            placeholder = "Ticket Title"
            name = "title"
            value = {newTicket.title}
            onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })}
          />
          <Input
            placeholder = "Ticket Description"
            name = "description"
            value = {newTicket.description}
            onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
          />
          <Select
            placeholder="Category"
            value = {newTicket.category}
            onChange={(e) => setNewTicket({...newTicket, category: e.target.value})}
          >
              <option value="Bug">Bug</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Support">Support</option>
          </Select>
          <Select
            placeholder="Status"
            value = {newTicket.status}
            onChange={(e) => setNewTicket({...newTicket, status: e.target.value})}
          >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
          </Select>
          <Select
            placeholder="Priority"
            value = {newTicket.priority}
            onChange={(e) => setNewTicket({...newTicket, priority: e.target.value})}
          >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
          </Select>

          <Button colorScheme='blue' onClick={handleAddTicket} w={'full'}>
            Add Ticket
          </Button>
        </VStack>
      </Box>
    </VStack>
  </Container>
};

export default CreatePage
