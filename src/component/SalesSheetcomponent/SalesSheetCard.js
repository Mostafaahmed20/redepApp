import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "../SalesSheetcomponent/SalesSheetCard.css";
import FilterByTicketNumber from "./FilterByTicketNumber";
function SalesSheetCard() {
  const [data, setdata] = useState(null);
  const [err, seterr] = useState(null);

  useEffect(() => {
    axios
      .get("https://puce-enthusiastic-swordfish.cyclic.app/salesB2C")
      .then((Nwedata) => setdata(Nwedata.data))
      .catch((err) => seterr(err));
  }, []);
  return (
    <div>
      <FilterByTicketNumber data={data} />
    </div>
  );
}

export default SalesSheetCard;
