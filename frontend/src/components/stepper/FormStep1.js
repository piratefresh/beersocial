import React, {Fragment} from "react";
import Input from "../form/Input";
import FormField from "../form/FormField";

export const FormStep1 = props => (
  <Fragment>
    <h3 mb={4}>
      Lets Start With The Basic Info!{" "}
      <span role="img" aria-label="Ligthning">
        ⚡
      </span>
    </h3>
    <FormField labelName="First Name">
      <Input
        id="firstname"
        name="firstname"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.values.firstname}
        placeholder=""
        className={
          props.errors.firstname && props.touched.firstname
            ? "error"
            : "text-input"
        }
      />
      {props.errors.firstname ? <span>{props.errors.firstname}</span> : null}
    </FormField>
    <FormField labelName="Last Name">
      <Input
        id="lastname"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.values.lastname}
        placeholder=""
        className={
          props.errors.lastname && props.touched.lastname
            ? "error"
            : "text-input"
        }
      />
      {props.errors.lastname ? <span>{props.errors.lastname}</span> : null}
    </FormField>
  </Fragment>
);
