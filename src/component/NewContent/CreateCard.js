import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../NewContent/createItem.css";
function CreateCard() {
  const Navigate = useNavigate();
  const reduce = (prev, next) => ({ ...prev, ...next });
  const [{ title, categoryname, description, content, image }, setState] =
    useReducer(reduce, {
      title: "",
      categoryname: "",
      description: "",
      content: "",
      image: "",
    });
  const HandelChange = (e) => {
    const tag = e.target.name;
    const val = e.target.value;
    setState({ [tag]: val });
  };

  async function postdata(e) {
    e.preventDefault();
    try {
      await axios
        .post("https://gleaming-goat-sneakers.cyclic.app/item", {
          title,
          categoryname,
          description,
          content,
          image,
        })
        .then((data) => {
          setState(data);
          Navigate("/item");
        });
    } catch (err) {
      return err;
    }
  }
  return (
    <div className="CreateCard">
      <form id="contact" onSubmit={postdata}>
        <input
          type="text"
          name="title"
          placeholder="title Of the Topic"
          value={title}
          onChange={HandelChange}
        />

        <input
          type="text"
          name="categoryname"
          placeholder="category name"
          value={categoryname}
          onChange={HandelChange}
        />

        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={HandelChange}
        />

        <input
          type="text"
          name="content"
          placeholder="content"
          value={content}
          onChange={HandelChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          value={image}
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

export default CreateCard;
