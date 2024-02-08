import { useCallback, useState } from "react";
import { DropzoneState, useDropzone } from "react-dropzone";
import { Button, Flex, Text } from "@chakra-ui/react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface InputProps {
  dropzone: DropzoneState;
}

interface HasFileProps {
  file?: File;
  removeFile: () => void;
}

export const FileInput = () => {
  const [file, setFile] = useState<File | null>(null);

  const removeFile = useCallback(() => {
    setFile(null);
  }, [file]);

  const onDrop = useCallback((files: File[]) => {
    setFile(files[0]);
  }, []);

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  // if (file) return null;
  if (file) return <HasFile file={file} removeFile={removeFile} />;

  return <InputDrop dropzone={dropzone} />;
};

const InputDrop = ({ dropzone }: InputProps) => {
  const { getRootProps, getInputProps, isDragActive } = dropzone;

  return (
    <Flex
      bg="#fff"
      w="780px"
      h="326px"
      borderRadius="16px"
      flexDirection="column"
      {...getRootProps()}
    >
      <Flex justifyContent="space-between" w="100%" p="40px">
        <Text fontSize="24px" fontWeight="700">
          Incluir Produtos em Lote
        </Text>
        <Text fontSize="16px" fontWeight="500">
          Baixar Modelo de Arquivo
        </Text>
      </Flex>
      <Flex
        borderRadius="8px"
        border={isDragActive ? "2px dashed #E7E7E7" : "2px dashed #B0B0B0"}
        w="716px"
        h="110px"
        margin="0 auto"
        _hover={{ border: "2px dashed #E7E7E7" }}
      >
        <label
          htmlFor="dropzone-file"
          style={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
          }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100%"
          >
            <AddRoundedIcon
              // sx={{ color: isDragActive ? "#B0B0B0" : "#616161" }}
              sx={{ color: isDragActive ? "#B0B0B0" : "#616161" }}
            />

            {isDragActive ? (
              <Text fontSize="16px" color="#616161">
                Solte para adicionar
              </Text>
            ) : (
              <>
                <Text fontSize="16px" color="#616161">
                  Arraste ou Selecione um Arquivo
                </Text>
                <Text fontSize="14px" color="#B0B0B0">
                  Faça upload de arquivos .xls ou .csv
                </Text>
              </>
            )}
          </Flex>
        </label>

        <input hidden {...getInputProps()} />
      </Flex>
    </Flex>
  );
};

const HasFile = ({ file, removeFile }: HasFileProps) => {
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
