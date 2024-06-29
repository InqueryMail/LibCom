import React from "react";
import { Inquiry, Footer, NavBar } from "../components";

const InquiryPage = () => {
  return (
    <div className="flex flex-column gap-5">
      <NavBar />
      <Inquiry />
      <Footer />
    </div>
  );
};

export default InquiryPage;
