import React, { useState, useEffect } from "react";
import axios from "axios";
import "../B2Bcomponent/CardStyle.css";

function B2Bsheet() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    axios
      .get("https://puce-enthusiastic-swordfish.cyclic.app/Comment")
      .then((data) => setstate(data.data.msg));
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="card-container">
      {state.length === 0 && <h3>No data available</h3>}

      {state.length > 0 &&
        state.map((v, i) => (
          <div key={i} className="card">
            <h3 className="card-title">HotelName: {v.HotelName}</h3>
            <h3 className="card-data">Check-In: {formatDate(v.CheckIn)}</h3>
            <h3 className="card-data">Check-Out: {formatDate(v.CheckOut)}</h3>
            <h3 className="card-data">Number of Pax: {v.NumberOfPax}</h3>
            <h3 className="card-data">
              Cancelation Policy: {v.CancelationPolicy}
            </h3>
            <h3 className="card-data">Room Type: {v.RoomType}</h3>
            <h3 className="card-data">Nationality: {v.Nationality}</h3>
            <h3 className="card-data">Number of Units: {v.NumberOfUnits}</h3>
            <h3 className="card-data">Budget: {v.Price}</h3>
            <h3 className="card-data">Note: {v.Note}</h3>
          </div>
        ))}
    </div>
  );
}

export default B2Bsheet;
