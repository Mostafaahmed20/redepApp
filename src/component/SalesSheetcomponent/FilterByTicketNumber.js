import React, { useState } from "react";

function FilterByTicketNumber({ data }) {
  const [val, setVal] = useState("");
  const [filtered, setFiltered] = useState(data);

  const handleSearch = (e) => {
    const value = e.target.value;
    setVal(value);

    const filterTkt =
      value === ""
        ? data.msg
        : data.msg.filter((v) => String(v.TicketNumber) === value);

    setFiltered(filterTkt);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <input
        type="search"
        value={val}
        onChange={handleSearch}
        placeholder="Tiket......."
      />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Ticket Number</th>
            <th>Agent Name</th>
            <th>Product Type</th>
            <th>Guest Name</th>
            <th>Supplier</th>
            <th>Supplier Category</th>
            <th>Juniper REF</th>
            <th>Supplier Reference</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th>Voucher Number</th>
            <th>Sales Rate</th>
            <th>Net Rate</th>
            <th>Currency</th>
            <th>Exchange Rate</th>
            <th>Net Rate IN KWD</th>
            <th>Profit</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(filtered) &&
            filtered.map((v, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{v.TicketNumber}</td>
                <td>{v.AgentName}</td>
                <td>{v.ProductType}</td>
                <td>{v.GuestName}</td>
                <td>{v.Supplier}</td>
                <td>{v.SupplierCategory}</td>
                <td>{v.JuniperREF}</td>
                <td>{v.SupplierReference}</td>
                <td>{formatDate(v.CheckInDate)}</td>
                <td>{formatDate(v.CheckOutDate)}</td>
                <td>{v.Vouchernumber}</td>
                <td>{v.SalesRate}</td>
                <td>{v.NetRate}</td>
                <td>{v.Currency}</td>
                <td>{v.ExchangeRate}</td>
                <td>{v.NetRateINKWD}</td>
                <td>{v.Profit}</td>
                <td>{v.Remarks}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterByTicketNumber;
