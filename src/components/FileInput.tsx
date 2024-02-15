import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Flex } from "@chakra-ui/react";
import { HasFile } from "./HasFile";
import { InputDrop } from "./InputDrop";
import * as XLSX from "xlsx";

export const FileInput = () => {
  const [file, setFile] = useState<File | null>(null);

  const [data, setData] = useState([]);

  const removeFile = useCallback(() => {
    setFile(null);
    setData([]);
  }, []);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);

      try {
        const parseData = await readFile(selectedFile);

        setData(parseData);
      } catch (error) {
        console.error("Erro ao ler o arquivo:", error);
      }
    },
    [file]
  );

  const readFile = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parseData: any[] = XLSX.utils.sheet_to_json(sheet);
          resolve(parseData);
        } catch (error) {
          reject(error);
        }
      };

      reader.readAsBinaryString(file);
    });
  };

  const dropzone = useDropzone({
    onDrop,
    accept: {
      "application/xlsx": [".xlsx"],
      "application/xls": [".xls"],
      "application/csv": [".csv"],
    },
  });

  if (file) {
    return (
      <>
        <HasFile file={file} removeFile={removeFile} />

        {data?.length && (
          <Flex flexDirection="column" alignItems="center" mt="20px">
            <p>Tabela sendo renderizada</p>
            <table>
              <thead>
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    {Object.values(item).map((value, index) => (
                      <td key={index}>{String(value)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Flex>
        )}
      </>
    );
  }

  return <InputDrop dropzone={dropzone} file={file} />;
};
