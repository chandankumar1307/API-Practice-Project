import React, { useEffect, useState } from "react";

const Tree = () => {

const URL = "https://api.data.gov.in/resource/6606a86a-5a66-4da5-b60b-75486d5e6cae?format=json&offset=0&api-key=579b464db66ec23bdd0000010cfb1359b8e4494947d998cecd368b7a&limit=37"
  const [receive, setReceive] = useState([]);
  
  const fetchData = () => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let check = data.records;
        console.log(check)
        setReceive(check);
      });
  };

  useEffect(() => {
    console.log("Inside usEffect");
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div>
      {receive.map((data) => (
          <div className="card-c">
          </div>
        ))}
  </div>
  );
};

export default Tree;
