import React, {Fragment} from "react";
import Input from "../form/Input";
import FormField from "../form/FormField";
import {MyDropzone} from "../form/Dropzone";

export function FormStep3(props) {
  return (
    <Fragment>
      <FormField labelName="Avatar">
        <MyDropzone setFieldValue={props.setFieldValue} />
        <p>Try dropping some files, here or click to select file</p>
      </FormField>
    </Fragment>
  );
}
