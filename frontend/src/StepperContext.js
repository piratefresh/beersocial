import React from "react";

const StepperContext = React.createContext({});

export const StepperProvider = StepperContext.Provider;
export const StepperConsumer = StepperContext.Consumer;
export default StepperContext;
