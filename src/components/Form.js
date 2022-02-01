import React, { useState } from "react";

const Form = (props) => {
  const [cityValue, valuechange] = useState("");
  const DataHandler = (e) => {
    valuechange(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log(cityValue);
    const Maincity = cityValue;
    props.OnSaveData(Maincity);
  };

  return (
    <form onSubmit={SubmitHandler}>
      <label>Enter City</label>
      <input type="text" onChange={DataHandler}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
