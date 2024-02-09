import { Button, Flex } from "@chakra-ui/react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export interface HasFileProps {
  file?: File;
  removeFile: () => void;
}

export const HasFile = ({ file, removeFile }: HasFileProps) => {
  return (
    <Flex
      w="780px"
      h="326px"
      bg="#fff"
      borderRadius="16px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="20px"
    >
      <Flex
        borderRadius="8px"
        border={file ? "2px dashed #78CEDC" : "2px dashed #B0B0B0"}
        w="716px"
        h="110px"
        margin="0 auto"
        bg="#fff"
        _hover={{ border: "2px dashed #E7E7E7" }}
        mt="75px"
      >
        <Flex
          w="100%"
          h="100%"
          borderRadius="8px"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <InsertDriveFileOutlinedIcon />
          <span style={{ color: "#78CEDC" }}>{file?.name}</span>
          <Button type="button" onClick={removeFile}>
            <CloseRoundedIcon />
          </Button>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" w="716px">
        <Button
          w="346px"
          h="40px"
          bg="#fff"
          borderRadius="16px"
          border="1px solid #17191C"
          color="#17191C"
        >
          Voltar
        </Button>
        <Button
          isDisabled={file ? false : true}
          type="submit"
          w="346px"
          h="40px"
          bg={file ? "#78CEDC" : "#D8F2F5"}
          borderRadius="16px"
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};
