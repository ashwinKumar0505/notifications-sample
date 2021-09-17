import { Button, Flex, Heading, Box } from "@chakra-ui/react";
import { useToasts } from "./components/toast";

function App() {
  const toast = useToasts();

  return (
    <Flex direction="column" alignItems="center">
      <Heading fontSize="3xl">Notifications Demo</Heading>
      <Box mt={50}>
        <Flex mb={10}>
          <Button
            colorScheme="green"
            mr={5}
            onClick={() =>
              toast.add({
                status: "success",
                description: "This is a Success Message",
              })
            }
          >
            Show Success
          </Button>
          <Button
            colorScheme="blue"
            mr={5}
            onClick={() =>
              toast.add({
                status: "info",
                description: "This is a Information Message",
              })
            }
          >
            Show Info
          </Button>
          <Button
            colorScheme="yellow"
            mr={5}
            onClick={() =>
              toast.add({
                status: "warning",
                description: "This is a warning Message",
              })
            }
          >
            Show Warning
          </Button>
          <Button
            colorScheme="red"
            mr={5}
            onClick={() =>
              toast.add({
                status: "error",
                description: "This is a Error Message",
              })
            }
          >
            Show Error
          </Button>
        </Flex>
        <Flex>
          <Button
            colorScheme="green"
            mr={5}
            variant="outline"
            onClick={() => toast.removeByStatus("success")}
          >
            Hide Success
          </Button>
          <Button
            colorScheme="blue"
            mr={5}
            variant="outline"
            onClick={() => toast.removeByStatus("info")}
          >
            Hide Info
          </Button>
          <Button
            colorScheme="yellow"
            mr={5}
            variant="outline"
            onClick={() => toast.removeByStatus("warning")}
          >
            Hide Warning
          </Button>
          <Button
            colorScheme="red"
            mr={5}
            variant="outline"
            onClick={() => toast.removeByStatus("error")}
          >
            Hide Error
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
