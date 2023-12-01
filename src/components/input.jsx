import React, { useState } from "react";
import styled from "styled-components";
const Form = styled.div`
  display: flex;
  flex-direction: column;
  //   border: solid 2px violet;
  margin-bottom: 2rem;
  input {
    margin: 0.5rem 0;
    padding: 1.2rem 0 1.2rem 1.5rem;
    border-radius: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #cfcfcf;
    background: #fff;
  }
  input:focus {
    border: 1px solid #d87d4a;
  }

  span {
    color: #cd2c2c;

    font-size: 0.9rem;
    display: none;
  }
  input:invalid[focused="true"] ~ span {
    display: block;
  }
  input:invalid[focused="true"] {
    border: 2px solid #cd2c2c;
  }
`;

export default function (props) {
  const { label, errorMessage, ...inputProps } = props;
  //   console.log(props);
  const [focused, setFocused] = useState(false);

  return (
    <Form>
      <input
        {...inputProps}
        //onBlur basically means that the input was clicked then left(that is you went ahead to click another input) and in this case you cant to set the focused to true so that if the validation is not correct, the error message pops up
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        //the focused of country is set to true because onBlur wont happen here since it is the last element and you would most likely wont be triggering any input after. Therefore we need to set the focused immediately it is clicked
        onFocus={() => inputProps.name == "eMoneyPin" && setFocused(true)}
      />
      <span>{errorMessage}</span>
    </Form>
  );
}
