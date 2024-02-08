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
      borderRadius="8px"
      border="2px dashed #B0B0B0"
      w="716px"
      h="110px"
      margin="0 auto"
      bg="#fff"
      _hover={{ border: "2px dashed #E7E7E7" }}
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
        <span>{file?.name}</span>
        <Button type="button" onClick={removeFile}>
          <CloseRoundedIcon />
        </Button>
      </Flex>
    </Flex>
  );
};
