import React, {useContext, Fragment} from "react";
import styled from "styled-components";
import StepperContext from "../../StepperContext";

const StepperContainer = styled.div`
  display: table;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  .stepper {
    display: table-cell;
    position: relative;
    padding: 24px;
    .stepper-circle {
      width: 30px;
      height: 30px;
      margin: 0 auto;
      background-color: #999999;
      border-radius: 50%;
      text-align: center;
      line-height: 30px;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
    }
  }
  .stepper.active .stepper-circle {
    background-color: #f96302;
  }
`;

function StepperCounter(props) {
  let stepperCounter = [];
  for (var i = 0; i < props.totalSteps + 1; i++) {
    stepperCounter.push(
      <div
        className={`stepper ${props.currentStep >= i ? "active" : null}`}
        key={i}
        data-key={i}
      >
        <div className="stepper-circle">{i + 1}</div>
      </div>
    );
  }

  return (
    <Fragment>
      <StepperContainer>{stepperCounter}</StepperContainer>
    </Fragment>
  );
}

export default StepperCounter;
