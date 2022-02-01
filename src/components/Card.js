import React, { useState, useEffect } from "react";

const Card = (props) => {
  const URL =
    "https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001816d1fb98c5c44de41bd02d36ca7365f&format=json&offset=0&limit=1000";

  const [receive, setReceive] = useState();

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
      <h1>{}</h1>
    </div>
  );
};
export default Card;
