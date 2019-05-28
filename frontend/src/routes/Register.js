import React, {Fragment, useContext} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import StepList from "../components/stepper/Steplist2";
import Box from "../components/layout/Box";
import Input from "../components/form/Input";
import FormField from "../components/form/FormField";

const FormBox = styled(Box)({
  boxShadow: "0 2px 4px rgba(0, 0, 0, .125)"
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  h2 {
    color: #ffbe0d;
    font-size: 2rem;
  }
  h3 {
    text-align: center;
  }
  span {
    color: #777;
  }
`;

function Register() {
  return (
    <Container>
      <div>
        <h2>Beer Social</h2>
        <span>A social network for drinkers</span>
      </div>
      <FormBox width={1 / 3} p={16} mt={2}>
        <StepList />
      </FormBox>
    </Container>
  );
}

Register.propTypes = {};

export default Register;
