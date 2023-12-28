// Importing necessary libraries, hooks, and components
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FormInput from "../../components/input";
import Summary from "../../components/summary";
import inputFields from "../../components/inputFields";
import GoBackButton from "../../components/goBackButton";
import { useCartContext } from "../../context/cartContext";

// Importing styled components
import {
  RadioDiv,
  PaymentMethod,
  StyledForm,
  StyledFormAndSummary,
} from "./checkoutStyled";

// This is a function component.
export default function () {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(cart).length === 0) {
      navigate("/");
    }
  });

  // useState hook to toggle thank you message
  const [showThanks, setShowThanks] = useState(false);

  // useState hook to hold form data
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

  // Function to handle change in form input
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Function to handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    setShowThanks(true); // Show thank you message on submit
  }

  // Rendered component
  if (Object.keys(cart).length > 0) {
    return (
      <>
        <Navbar /> <GoBackButton />
        <StyledFormAndSummary>
          <StyledForm id="my-form" onSubmit={handleSubmit} autoComplete="on">
            {/* Form begins */}
            <h2>CHECKOUT</h2>
            {inputFields.map((field, index) => {
              // Form fields are dynamically created using map
              return (
                <React.Fragment key={index}>
                  {index == 0 && <h3>BILLING DETAILS</h3>}
                  {index == 3 && <h3>SHIPPING INFO</h3>}
                  {index == 7 && <h3>PAYMENT DETAILS</h3>}

                  {field.type == "radio" ? (
                    <>
                      <PaymentMethod>Payment Method</PaymentMethod>
                      {field.options.map((item, index) => {
                        // If field type is radio
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
                      <label htmlFor={index}>{field.label}</label>
                      <FormInput
                        {...field}
                        /* This help prevent this error:
                       Warning: A component is changing an uncontrolled input to be controlled. */

                        value={formData[field.name] ?? ""}
                        onChange={handleChange}
                        required={true}
                        id={index}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </StyledForm>{" "}
          {/* Summary component displayed after
        form
        */}
          <Summary showThanks={showThanks} />
        </StyledFormAndSummary>
        <Footer />
      </>
    );
  } else {
    return null;
  }
}
