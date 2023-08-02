import React, { useState } from "react";
import DataEmails from "../../Data/Emails";
import "./Mails.css";
import FilterEmail from "./FilterEmail";

function ImportantEmail() {
  return (
    <div>
      <FilterEmail data={DataEmails} />
    </div>
  );
}

export default ImportantEmail;
