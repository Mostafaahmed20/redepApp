import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../CreateProduct/ProductStyle.css";
import Swal from "sweetalert2";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Spinner,
  CardLink,
  Navbar,
} from "reactstrap";
import axios from "axios";
import FilteredProduct from "./FilteredProduct";

function Product() {
  const imgUrl =
    "https://images.unsplash.com/photo-1661860833881-1c4c7f0a175b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60";

  const [stateArticle, setstateArticle] = useState(null);
  const DeleteItem = (stateArticle) => {
    Swal.fire({
      title: `You are about to delete ${stateArticle.title}`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios.delete(
          `https://gleaming-goat-sneakers.cyclic.app/item/deleteOne/${stateArticle.Myid}`
        );
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    async function fetching() {
      try {
        await fetch("https://gleaming-goat-sneakers.cyclic.app/item")
          .then((res) => res.json())
          .then((json) => {
            setstateArticle(json);
          });
      } catch (err) {
        return err;
      }
    }
    fetching();
  }, []);

  return (
    <div className="Repo" style={{ color: "black" }}>
      <Navbar className="my-1" color="dark" dark>
        <Link to="/">Back to Home</Link>
      </Navbar>

      {stateArticle && <FilteredProduct data={stateArticle} />}
    </div>
  );
}

export default Product;
