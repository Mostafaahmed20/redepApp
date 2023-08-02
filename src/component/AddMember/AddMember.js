import React, { useReducer, useState } from "react";
import axios from "axios";
import "../AddMember/AddmemberStyle.css";
import { useNavigate } from "react-router-dom";
function AddMember() {
  const Navigate = useNavigate();
  const reduce = (prev, next) => ({ ...prev, ...next });
  const [{ pic, name, Account, email, sfid, contact }, setState] = useReducer(
    reduce,
    {
      pic: "",
      name: "",
      Account: "",
      email: "",
      sfid: "",
      contact: "",
    }
  );

  const HandelChange = (e) => {
    const tag = e.target.name;
    const val = e.target.value;
    setState({ [tag]: val });
  };

  async function postdata(e) {
    e.preventDefault();

    await axios
      .post("https://gleaming-goat-sneakers.cyclic.app/team", {
        pic,
        name,
        Account,
        email,
        sfid,
        contact,
      })
      .then((data) => {
        if (!pic || !name || !Account || !email || !sfid || !contact) return;

        setState(data);
      });
    Navigate("/Agent");
  }
  return (
    <div className="CreateCard">
      {pic.length === 0 ||
      name.length === 0 ||
      Account.length === 0 ||
      email.length === 0 ||
      sfid.length < 5 ||
      contact.length === 0 ? (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "200px" }}>
          input Required
        </h2>
      ) : (
        ""
      )}

      <form id="contact" onSubmit={postdata}>
        <input
          type="text"
          name="pic"
          placeholder="Gravatar picture"
          value={pic}
          onChange={HandelChange}
        />

        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={HandelChange}
        />
        <input
          type="text"
          name="Account"
          placeholder="Account"
          value={Account}
          onChange={HandelChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email "
          value={email}
          onChange={HandelChange}
        />
        <input
          type="text"
          name="sfid"
          placeholder="sfid"
          value={sfid}
          onChange={HandelChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="contact"
          value={contact}
          onChange={HandelChange}
        />
        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddMember;
