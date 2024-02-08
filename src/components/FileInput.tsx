import { Flex, Input, Text } from "@chakra-ui/react";

export const FileInput = () => {
  return (
    <Flex
      bg="#fff"
      w="780px"
      h="326px"
      borderRadius="16px"
      flexDirection="column"
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
        border="2px dashed #B0B0B0"
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
            <Text fontSize="16px" color="#616161">
              Arraste ou Selecione um Arquivo
            </Text>
            <Text fontSize="14px" color="#B0B0B0">
              Faça upload de arquivos .xls ou .csv
            </Text>
          </Flex>
        </label>
        <Input hidden />
      </Flex>
    </Flex>
  );
};
