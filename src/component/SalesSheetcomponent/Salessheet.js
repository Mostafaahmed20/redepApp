import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Stylesheetcompo.css";
function Salessheet() {
  const nevegate = useNavigate();
  const Reducing = (prev, next) => ({ ...prev, ...next });
  const [NetKWD, SetKwd] = useState(0);
  const [MYprofit, SetProfit] = useState(0);
  const [
    {
      TicketNumber,
      AgentName,
      ProductType,
      GuestName,
      Supplier,
      SupplierCategory,
      JuniperREF,
      SupplierReference,
      CheckInDate,
      CheckOutDate,
      Vouchernumber,
      SalesRate,
      NetRate,
      Currency,
      ExchangeRate,
      NetRateINKWD,
      Profit,
      Remarks,
    },
    setData,
  ] = useReducer(Reducing, {
    TicketNumber: "",
    AgentName: "",
    ProductType: "",
    GuestName: "",
    Supplier: "",
    SupplierCategory: "",
    JuniperREF: "",
    SupplierReference: "",
    CheckInDate: "",
    CheckOutDate: "",
    Vouchernumber: "",
    SalesRate: "",
    NetRate: "",
    Currency: "",
    ExchangeRate: "",
    NetRateINKWD: NetKWD,
    Profit: MYprofit,
    Remarks: "",
  });
  const Handelchange = (e) => {
    const TAG = e.target.name;
    const VAL = e.target.value;
    setData({ [TAG]: VAL });
  };
  const HandelSubmition = (e) => {
    e.preventDefault();
    axios
      .post("https://puce-enthusiastic-swordfish.cyclic.app/salesB2C", {
        TicketNumber,
        AgentName,
        ProductType,
        GuestName,
        Supplier,
        SupplierCategory,
        JuniperREF,
        SupplierReference,
        CheckInDate,
        CheckOutDate,
        Vouchernumber,
        SalesRate,
        NetRate,
        Currency,
        ExchangeRate,
        NetRateINKWD,
        Profit,
        Remarks,
      })
      .then((data) => setData(data))
      .catch((Err) => console.log(Err));
    nevegate("/SalesSheetCard");
  };
  useEffect(() => {
    SetKwd(() => Math.round(ExchangeRate * NetRate).toFixed());
  }, [ExchangeRate, NetRate]);

  useEffect(() => {
    SetProfit(() => SalesRate - NetKWD);
  }, [SalesRate, NetKWD]);

  return (
    <div className="sales-sheet-container">
      <form onSubmit={HandelSubmition}>
        <input
          type="number"
          name="TicketNumber"
          value={TicketNumber}
          onChange={Handelchange}
          placeholder="TicketNumber"
        />
        <input
          type="text"
          name="AgentName"
          value={AgentName}
          onChange={Handelchange}
          placeholder="AgentName"
        />
        <input
          type="text"
          name="ProductType"
          value={ProductType}
          onChange={Handelchange}
          placeholder="ProductType"
        />
        <input
          type="text"
          name="GuestName"
          value={GuestName}
          onChange={Handelchange}
          placeholder="GuestName"
        />
        <input
          type="text"
          name="Supplier"
          value={Supplier}
          onChange={Handelchange}
          placeholder="Supplier"
        />
        <input
          type="text"
          name="SupplierCategory"
          value={SupplierCategory}
          onChange={Handelchange}
          placeholder="SupplierCategory"
        />
        <input
          type="text"
          name="JuniperREF"
          value={JuniperREF}
          onChange={Handelchange}
          placeholder="JuniperREF"
        />
        <input
          type="text"
          name="SupplierReference"
          value={SupplierReference}
          onChange={Handelchange}
          placeholder="SupplierReference"
        />
        <input
          type="date"
          name="CheckInDate"
          value={CheckInDate}
          onChange={Handelchange}
          placeholder="CheckInDate"
        />
        <input
          type="date"
          name="CheckOutDate"
          value={CheckOutDate}
          onChange={Handelchange}
          placeholder="CheckOutDate"
        />

        <input
          type="number"
          name="SalesRate"
          value={SalesRate}
          onChange={Handelchange}
          placeholder="SalesRate"
        />
        <input
          type="number"
          name="NetRate"
          value={NetRate}
          onChange={Handelchange}
          placeholder="NetRate"
        />
        <input
          type="text"
          name="Currency"
          value={Currency}
          onChange={Handelchange}
          placeholder="USD - EUR  GBP  - Kwd"
        />
        {Currency.length < 3 && (
          <span
            style={{
              color: "red",
            }}
          >
            USD - EUR - GBP - Kwd
          </span>
        )}
        <input
          type="number"
          name="ExchangeRate"
          value={ExchangeRate}
          onChange={Handelchange}
          placeholder="ExchangeRate"
        />
        <input
          type="number"
          name="NetRateINKWD"
          value={NetKWD}
          onChange={Handelchange}
          placeholder="NetRateINKWD"
        />
        <input
          type="number"
          name="Profit"
          value={MYprofit}
          onChange={Handelchange}
          placeholder="Profit"
        />
        <input
          type="text"
          name="Remarks"
          value={Remarks}
          onChange={Handelchange}
          placeholder="Remarks"
        />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Salessheet;
