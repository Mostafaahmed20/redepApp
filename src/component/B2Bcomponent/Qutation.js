import React, { useReducer, useState } from "react";
import styles from "./Qutation.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Qutation() {
  const Nevegate = useNavigate();
  const Reducingdata = (prev, next) => ({ ...prev, ...next });

  const [
    {
      HotelName,
      CheckIn,
      CheckOut,
      NumberOfPax,
      Nationality,
      NumberOfUnits,
      RoomType,
      CancelationPolicy,
      Price,
      Note,
    },
    setData,
  ] = useReducer(Reducingdata, {
    HotelName: "",
    CheckIn: "",
    CheckOut: "",
    NumberOfPax: "",
    Nationality: "",
    NumberOfUnits: "",
    RoomType: "",
    CancelationPolicy: "",
    Price: "",
    Note: "",
  });
  const HandelChange = (e) => {
    const TAG = e.target.name;
    const VAL = e.target.value;

    setData({ [TAG]: VAL });
  };

  const HandelSubmation = (e) => {
    e.preventDefault();
    axios
      .post("https://puce-enthusiastic-swordfish.cyclic.app/Comment", {
        HotelName,
        CheckIn,
        CheckOut,
        NumberOfPax,
        Nationality,
        NumberOfUnits,
        RoomType,
        CancelationPolicy,
        Price,
        Note,
      })
      .then((data) => setData(data));
    Nevegate("/B2BDATA");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={HandelSubmation}>
        <input
          type="text"
          name="HotelName"
          value={HotelName}
          placeholder="HotelName"
          onChange={HandelChange}
        />
        <input
          type="date"
          name="CheckIn"
          value={CheckIn}
          placeholder="CheckIn"
          onChange={HandelChange}
        />
        <input
          type="date"
          name="CheckOut"
          value={CheckOut}
          placeholder="CheckOut"
          onChange={HandelChange}
        />
        <input
          type="number"
          name="NumberOfPax"
          value={NumberOfPax}
          placeholder="NumberOfPax"
          onChange={HandelChange}
        />
        <input
          type="text"
          name="Nationality"
          value={Nationality}
          placeholder="Nationality"
          onChange={HandelChange}
        />
        <input
          type="number"
          name="NumberOfUnits"
          value={NumberOfUnits}
          placeholder="NumberOfUnits"
          onChange={HandelChange}
        />
        <input
          type="text"
          name="RoomType"
          value={RoomType}
          placeholder="RoomType"
          onChange={HandelChange}
        />
        <input
          type="text"
          name="CancelationPolicy"
          value={CancelationPolicy}
          placeholder="CancelationPolicy"
          onChange={HandelChange}
        />
        <input
          type="number"
          name="Price"
          value={Price}
          placeholder="Price"
          onChange={HandelChange}
        />
        <input
          type="text"
          name="Note"
          value={Note}
          placeholder="Note......."
          onChange={HandelChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Qutation;
