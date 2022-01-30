import React, { useState, useEffect } from "react";

const Card = () => {
  const URL =
    "https://api.data.gov.in/resource/6606a86a-5a66-4da5-b60b-75486d5e6cae?format=json&offset=0&api-key=579b464db66ec23bdd0000010cfb1359b8e4494947d998cecd368b7a&limit=37";

  const [receive, setReceive] = useState("Chandan");

  const fetchData = () => {
    fetch(URL)
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        let check = data;
        setReceive(check);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(receive);

  return (
    <div>
      <h1>Inside Card</h1>
    </div>
  );
};
export default Card;
