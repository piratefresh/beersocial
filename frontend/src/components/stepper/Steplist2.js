import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Formik} from "formik";
import * as Yup from "yup";
import Step from "./Step";
import StepperCounter from "./StepperCounter";
import styled from "styled-components";
import {PrimaryButtonForm, SecondaryButtonForm} from "../common/Button";
import {FormStep1} from "./FormStep1";
import {FormStep2} from "./FormStep2";
import {FormStep3} from "./FormStep3";

/* Helper */
import {DisplayFormikState} from "../utils/formhelper";

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  button {
    margin: 0.5em;
  }
`;

const steps = [<FormStep1 />, <FormStep2 />, <FormStep3 />];

class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      totalSteps: steps.length - 1,
      isActive: 0
    };

    this.goToPreviousStep = this.goToPreviousStep.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
  }

  goToPreviousStep = () => {
    this.setState({currentStep: this.state.currentStep - 1});
  };

  goToNextStep = () => {
    this.setState({currentStep: this.state.currentStep + 1});
  };

  onClickButton(event) {
    event.preventDefault();
    console.log("clicked");
  }

  render() {
    const {currentStep, totalSteps, isActive} = this.state;

    return (
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmpassword: "",
          avatar: null
        }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Please enter your email"),
          password: Yup.string()
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(
              /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required("No password provided."),
          confirmpassword: Yup.string()
            .required()
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
          firstname: Yup.string()
            .max(40, "Please enter no more than 40 characters")
            .min(2, "Please enter more than 2 characters")
            .required("Please enter your first name"),
          lastname: Yup.string()
            .max(40, "Please enter no more than 40 characters")
            .min(2, "Please enter more than 2 characters")
            .required("Please enter your last name")
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <StepperCounter
                currentStep={currentStep}
                totalSteps={totalSteps}
              />
              {steps.map((stepEle, index) => {
                return index === currentStep ? (
                  <Step
                    isActive={isActive}
                    values={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                  >
                    {stepEle}
                  </Step>
                ) : null;
              })}
              <ButtonContainer>
                <Previous
                  isActive={currentStep > 0}
                  goToPreviousStep={() => this.goToPreviousStep()}
                />
                <Next
                  isActive={currentStep < totalSteps}
                  goToNextStep={() => this.goToNextStep()}
                />
                <Submit
                  isSubmitting={isSubmitting}
                  isActive={currentStep === totalSteps}
                />
              </ButtonContainer>
              <DisplayFormikState {...props} />
            </form>
          );
        }}
      </Formik>
    );
  }
}

function Next(props) {
  const {isActive} = props;
  if (isActive === false) return null;
  return (
    <PrimaryButtonForm type="button" onClick={() => props.goToNextStep()}>
      Next
    </PrimaryButtonForm>
  );
}

function Previous(props) {
  const {isActive} = props;
  if (isActive === false) return null;

  return (
    <SecondaryButtonForm type="button" onClick={() => props.goToPreviousStep()}>
      Previous
    </SecondaryButtonForm>
  );
}

function Submit(props) {
  const {isActive} = props;
  if (isActive === false) return null;

  return (
    <PrimaryButtonForm type="submit" disabled={props.isSubmitting}>
      Submit
    </PrimaryButtonForm>
  );
}

StepList.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export default StepList;
