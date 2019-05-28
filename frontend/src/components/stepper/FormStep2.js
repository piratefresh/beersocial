import React, {Fragment} from "react";
import Input from "../form/Input";
import FormField from "../form/FormField";

export const FormStep2 = props => (
  <Fragment>
    <h3 mb={4}>
      Just Need Some Contact Info!{" "}
      <span role="img" aria-label="Smiling Face With Sunglasses">
        😎
      </span>
    </h3>
    <FormField labelName="Email">
      <Input
        id="email"
        type="email"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.values.email}
        placeholder=""
        className={
          props.errors.email && props.touched.email ? "error" : "text-input"
        }
      />
      {props.errors.email ? <span>{props.errors.email}</span> : null}
    </FormField>
    <FormField labelName="Password">
      <Input
        id="password"
        type="password"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.values.password}
        placeholder=""
        className={
          props.errors.password && props.touched.password
            ? "error"
            : "text-input"
        }
      />
      {props.errors.password ? <span>{props.errors.password}</span> : null}
    </FormField>
    <FormField labelName="Confirm Password">
      <Input
        id="confirmpassword"
        type="password"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.values.confirmpassword}
        placeholder=""
        className={
          props.errors.confirmpassword && props.touched.confirmpassword
            ? "error"
            : "text-input"
        }
      />
      {props.errors.confirmpassword ? (
        <span>{props.errors.confirmpassword}</span>
      ) : null}
    </FormField>
  </Fragment>
);
