import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CreateProduct/ProductFilterStyle.css";
import {
  Card,
  CardBody,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function FilteredProduct({ data }) {
  const [input, setInput] = useState("");
  const [myData, setMyData] = useState(data);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (data) {
      const filteredItems = data.msg.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setMyData({ msg: filteredItems });
    }
  };

  return (
    <div className="filtered-product-container">
      <input
        type="search"
        value={input}
        onChange={handleSearch}
        className="search-input"
        placeholder="Search by title..."
      />
      {myData === null && <h3>No data found</h3>}
      {myData &&
        myData.msg.map((item, i) => (
          <ul className="unOrderList">
            <Card key={i} className="product-card">
              <CardBody>
                <CardTitle tag="h5">#{i + 1}</CardTitle>
                <CardSubtitle className="product-card-subtitle" tag="h6">
                  {item.full_name}
                </CardSubtitle>
              </CardBody>

              <CardBody>
                <CardText className="product-card-text">{item.title}</CardText>

                <CardText className="product-card-description">
                  {item.description}
                </CardText>

                <CardLink className="product-card-link">
                  <Link to={`/${item.Myid}`} className="btn btn-primary">
                    Go to Details
                  </Link>
                </CardLink>

                <CardText className="product-card-createdOn">
                  Created On: {item.createdOn}
                </CardText>
              </CardBody>
            </Card>
          </ul>
        ))}
    </div>
  );
}

export default FilteredProduct;
