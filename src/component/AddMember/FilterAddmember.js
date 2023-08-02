import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  Navbar,
  Spinner,
} from "reactstrap";
import "../AddMember/FilterAddmember.css";

function FilterAddmember({ data, DeleteBTN }) {
  const [input, setinput] = useState("");
  const [dataFiltered, setdataFiltered] = useState([]);

  useEffect(() => {
    if (data) {
      let mynewdata = data.filter((v) => {
        return v.name.toLowerCase().includes(input);
      });
      setdataFiltered(mynewdata);
    }
  }, [data, input]);

  const Handelinput = (e) => {
    setinput(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="search"
        className="search-input"
        value={input}
        onChange={Handelinput}
        placeholder="Search members"
      />
      <div className="FilterAddmember">
        <Navbar color="dark" dark expand="md">
          <Link to="/" className="back-link">
            Back to Home
          </Link>
        </Navbar>

        <div className="container">
          {data == null ? (
            <Spinner size="sm" className="loading-spinner">
              <h3>Loading data...</h3>
              <br />
              <h4>No data to show</h4>
            </Spinner>
          ) : (
            <div>
              <ul className="member-list">
                {dataFiltered.map((v, i) => (
                  <Card key={i} className="member-card">
                    <img
                      alt="Member avatar"
                      className="member-avatar"
                      src={v.pic}
                    />
                    <CardBody>
                      <CardText className="member-name">{v.name}</CardText>
                      <CardSubtitle className="member-account" tag="h6">
                        {v.Account}
                      </CardSubtitle>
                      <CardText className="member-sfid">{v.sfid}</CardText>
                      <CardText className="member-email">{v.email}</CardText>
                      {/* <CardLink
                        className="member-delete-btn"
                        onClick={() => DeleteBTN(v)}
                      >
                        Delete
                      </CardLink> */}
                    </CardBody>
                  </Card>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterAddmember;
