import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <main>
          <Elements stripe={stripePromise}>{children}</Elements>
        </main>
      </div>
    </React.Fragment>
  );
};
export default Layout;
