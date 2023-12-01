import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FormInput from "../../components/input";
import Summary from "../../components/summary";
import inputFields from "../../components/inputFields";
import ThankYou from "../../components/thankYou";
import { nanoid } from "nanoid";
import GoBackButton from "../../components/goBackButton";
import {
  RadioDiv,
  PaymentMethod,
  StyledForm,
  StyledFormAndSummary,
} from "./checkoutStyled";
export default function () {
  const [showThanks, setShowThanks] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setShowThanks(true);
  }

  return (
    <>
      <Navbar /> <GoBackButton />
      <StyledFormAndSummary>
        {" "}
        <StyledForm id="my-form" onSubmit={handleSubmit} autoComplete="on">
          <h2>CHECKOUT</h2>
          {inputFields.map((field, index) => {
            return (
              <React.Fragment key={index}>
                {index == 0 && <h3>BILLING DETAILS</h3>}
                {index == 3 && <h3>SHIPPING INFO</h3>}
                {index == 7 && <h3>PAYMENT DETAILS</h3>}
                {field.type == "radio" ? (
                  <>
                    <PaymentMethod>Payment Method</PaymentMethod>
                    {field.options.map((item, index) => {
                      return (
                        <RadioDiv key={index}>
                          <FormInput
                            // {...field}
                            type={field.type}
                            value={item.value}
                            onChange={handleChange}
                            required={true}
                            name={field.name}
                            id={`${item.name}-${index}`}
                          />
                          <label htmlFor={`${item.name}-${index}`}>
                            {item.label}
                          </label>
                        </RadioDiv>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <label>{field.label}</label>
                    <FormInput
                      {...field}
                      /* this help prevent this error:
                       Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.*/

                      value={formData[field.name] ?? ""}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </StyledForm>
        <Summary showThanks={showThanks} />
      </StyledFormAndSummary>
      <Footer />
    </>
  );
}
