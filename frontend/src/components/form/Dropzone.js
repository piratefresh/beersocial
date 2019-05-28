import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";

export function MyDropzone(props) {
  const onDrop = useCallback(file => {
    if (file.length === 0) return;
    console.log(file[0]);
    console.log(props);
    props.setFieldValue("avatar", file[0]);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/png, image/jpeg"
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
}
