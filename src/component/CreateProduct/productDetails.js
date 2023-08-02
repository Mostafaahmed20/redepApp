import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetailsStyle.css";

import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function ProductDetails() {
  const [Mycard, setMycard] = useState(null);
  const ProductID = useParams();

  useEffect(() => {
    axios
      .post(`https://gleaming-goat-sneakers.cyclic.app/item/Myid`, {
        ProductID,
      })
      .then((res) => setMycard(res));
  }, [ProductID]);

  return (
    <div className="ProductDiv">
      {Mycard !== null ? (
        <Card className="ProductCard">
          <CardImg top src={Mycard.data.image} alt={Mycard.data.title} />
          <CardBody>
            <CardTitle className="ProductTitle">{Mycard.data.title}</CardTitle>
            <CardText className="ProductDescription">
              {Mycard.data.description}
            </CardText>
          </CardBody>
        </Card>
      ) : (
        <h3 className="NoData">No data Found for this product</h3>
      )}
    </div>
  );
}

export default ProductDetails;
