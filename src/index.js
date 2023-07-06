import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import ScrollToTop from "./components/scrollToTop";

Amplify.configure({
  Auth: {
    identityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID, //REQUIRED - Amazon Cognito Identity Pool ID
    region: process.env.REACT_APP_AWS_S3_REGION, // REQUIRED - Amazon Cognito Region
  },
  Storage: {
    AWSS3: {
      bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME, // REQUIRED -  Amazon S3 bucket name
      region: process.env.REACT_APP_AWS_S3_REGION,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
