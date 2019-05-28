import React, {useContext} from "react";
import PropTypes from "prop-types";
import {StepperConsumer} from "../../StepperContext";
import StepperCounter from "./StepperCounter";

class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      totalSteps: this.props.children.length - 1
    };
  }

  goToPreviousStep = () => {
    this.setState({currentStep: this.state.currentStep - 1});
  };

  goToNextStep = () => {
    this.setState({currentStep: this.state.currentStep + 1});
  };

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      const {currentStep, totalSteps} = this.state;

      return (
        <>
          {React.cloneElement(child, {
            isActive: index === currentStep,
            displayPrevious: currentStep > 0,
            displayNext: currentStep < totalSteps,
            displaySubmit: currentStep === totalSteps,
            goToPreviousStep: () => this.goToPreviousStep(),
            goToNextStep: () => this.goToNextStep()
          })}
          <StepperConsumer>
            {props => {
              {
                props.setCurrentState(currentStep);
                props.setLengthState(totalSteps);
              }
            }}
          </StepperConsumer>
        </>
      );
    });

    return children;
  }
}

StepList.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired
};

export default StepList;
