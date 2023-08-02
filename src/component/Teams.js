import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import {
  Navbar,
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from "reactstrap";
import axios from "axios";
import FilterAddmember from "./AddMember/FilterAddmember";
// import "./productStyle.css";

function Teams() {
  const [Teamstate, setTeamstate] = useState(null);

  const DeletePersonFunc = (Teamstate) => {
    console.log(Teamstate);
    Swal.fire({
      title: `You are About to Delete ${Teamstate.name} Are Sure ? `,
      showCancelButton: true,
    }).then((Data) => {
      if (Data.isConfirmed) {
        axios.delete(
          `https://gleaming-goat-sneakers.cyclic.app/team/${Teamstate.Myid}`
        );
      } else {
        return;
      }
    });
  };

  useEffect(() => {
    async function fetching() {
      await fetch("https://gleaming-goat-sneakers.cyclic.app/team")
        .then((res) => res.json())
        .then((json) => {
          setTeamstate(json);
        });
    }
    fetching();
  }, []);

  return (
    <div>
      <FilterAddmember data={Teamstate} DeleteBTN={DeletePersonFunc} />
    </div>
  );
}

export default Teams;
