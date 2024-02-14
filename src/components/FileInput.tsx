import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { InputDrop } from "./InputDrop";
import { HasFile } from "./HasFile";

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
      // "application/pdf": [".pdf"],
      "application/xlsx": [".xlsx"],
      "application/xls": [".xls"],
      "application/csv": [".csv"],
    },
  });

  console.log("file", file);

  if (file) return <HasFile file={file} removeFile={removeFile} />;

  return <InputDrop dropzone={dropzone} file={file} />;
};
