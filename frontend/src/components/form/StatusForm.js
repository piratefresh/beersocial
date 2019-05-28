import React from "react";
import styled from "styled-components";
import {PrimaryButtonForm} from "../common/Button";
import TextArea from "../form/TextArea";

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  width: 80%;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 2em;
`;

function StatusForm() {
  return (
    <StatusContainer>
      <p>Hey post something</p>
      <TextArea rows="4" cols="50" />
      <PrimaryButtonForm>Submit</PrimaryButtonForm>
    </StatusContainer>
  );
}

export default StatusForm;
