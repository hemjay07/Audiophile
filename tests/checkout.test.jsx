import React from "react";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../src/context/cartContext";
import userEvent from "@testing-library/user-event";
import Checkout from "../src/pages/checkout/checkout";
import { build } from "@jackfranklin/test-data-bot";
import { faker } from "@faker-js/faker";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/home";
import { expect } from "vitest";

// mock default scroll behaviour
window.scrollTo = vi.fn();

// Build the login form with test data
const buildLoginForm = build({
  fields: {
    username: faker.person.fullName(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    zipCode: faker.location.zipCode(),
    city: faker.location.city(),
    country: faker.location.country(),
    eMoneyNumber: faker.string.numeric(),
    eMoneyPin: faker.string.numeric(),
  },
});

// Test suite for the Checkout component
describe("Checkout", () => {
  // Test for successful form submission
  test("the form is submitted if all the parameters are inputted and the thankYou modal is displayed", async () => {
    render(
      <CartProvider value={{ 1: 1 }}>
        <MemoryRouter initialEntries={["/checkout"]}>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    const {
      username,
      password,
      phone,
      address,
      zipCode,
      city,
      country,
      email,
      paymentMethod,
      eMoneyNumber,
      eMoneyPin,
    } = buildLoginForm();

    // Inputting all form data
    await userEvent.type(screen.getByLabelText(/name/i), username);
    await userEvent.type(screen.getByLabelText(/email/i), password);
    await userEvent.type(screen.getByLabelText(/phone/i), phone);
    await userEvent.type(screen.getByLabelText(/your address/i), address);
    await userEvent.type(screen.getByLabelText(/email address/i), email);
    await userEvent.type(screen.getByLabelText(/zip code/i), zipCode);
    await userEvent.type(screen.getByLabelText(/city/i), city);
    await userEvent.type(screen.getByLabelText(/country/i), country);
    await userEvent.click(screen.getByLabelText("e-Money"));
    await userEvent.type(
      screen.getByLabelText(/e-money number/i),
      eMoneyNumber
    );
    await userEvent.type(screen.getByLabelText(/e-money pin/i), eMoneyPin);

    // Submit the form
    const submitButton = screen.getByRole("button", {
      name: /continue to pay/i,
    });
    await userEvent.click(submitButton);

    // Check if "thank you" message is displayed
    expect(screen.getByText(/thank you for your order/i)).toBeInTheDocument();
  });

  // Test navigation to home page if cart is empty
  test("the form navigates to the home page if the cart is empty", async () => {
    render(
      <CartProvider>
        <MemoryRouter initialEntries={["/checkout"]}>
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </CartProvider>
    );

    // Check if the specific text is in the document (product is displayed)
    expect(screen.getByText(/XX99 MARK II /i)).toBeInTheDocument();
  });
});
