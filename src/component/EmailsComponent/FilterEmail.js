import React, { useState } from "react";
import "./Mails.css";
import DataEmails from "../../Data/Emails";

function FilterEmail() {
  const [input, setInput] = useState("");
  const [myDataFiltered, setMyFilteredData] = useState([]);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    const filteredData = DataEmails.filter((v) => {
      return v.description.toLowerCase().includes(inputValue.toLowerCase());
    });
    setMyFilteredData(filteredData);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div>
      <input
        type="search"
        value={input}
        className="search-input"
        onChange={handleSearch}
        placeholder="Search ........"
      />
      {myDataFiltered.map((v) => (
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/200/300" alt="product" />
              <div className="card-header">{v.description}</div>
              CityTown {v.CityTown}
              <div
                className="card-body"
                onClick={() => handleCopyEmail(v.email)}
              >
                {v.email}
              </div>
              <div className="card-body">
                {v.name}
                <br />
                {v.mobile}
              </div>
              <div className="card-body">{v.Designation}</div>
              <div className="card-body">{v.Address}</div>
              <div className="card-body">
                {v.CityTown}
                <br />
                {v.Country}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilterEmail;
