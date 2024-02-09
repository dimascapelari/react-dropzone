import { Flex } from "@chakra-ui/react";
import { FileInput } from "./components/FileInput";

function App() {
  const onSubmit = () => {
    alert("Foi");
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg="gray.200"
    >
      <form onSubmit={onSubmit}>
        <FileInput />
      </form>
    </Flex>
  );
}

export default App;
