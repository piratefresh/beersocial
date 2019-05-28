import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Step extends React.Component {
  render() {
    const {
      isActive,
      component,
      children,
      values,
      onChange,
      onBlur,
      errors,
      touched,
      setFieldValue
    } = this.props;

    if (isActive === false) return null;

    return (
      <React.Fragment>
        {component
          ? React.createElement(component)
          : React.Children.map(children, child => {
              return React.cloneElement(child, {
                values,
                onChange,
                onBlur,
                errors,
                touched,
                setFieldValue
              });
            })}
      </React.Fragment>
    );
  }
}

Step.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default Step;
