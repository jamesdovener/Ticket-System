import { Toast, Tooltip, Container, Flex, HStack, Button, Text} from '@chakra-ui/react'
import { PlusSquareIcon, SunIcon, MoonIcon, useColorMode } from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return <Container maxW="100%" px={4}>
    <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base: "column",
            sm: "row"
        }}
    >
        <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-l, #7928CA,#FF0080)"}
            bgClip={"text"}
        >
            <Link to="/">Ticket System</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
            <Link to="/create">
                <Tooltip label="Add New Ticket" aria-label="Add New Ticket">
                    <Button>
                        <PlusSquareIcon fontSize={20} />
                    </Button>
                </Tooltip>
            </Link>
            <Button title="Add New Ticket" onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon size={20} />}</Button>
        </HStack>

    </Flex>
  </Container>;
};

export default Navbar