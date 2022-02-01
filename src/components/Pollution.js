import Card from "./Card";
import CardUI from "./CardUI";
import Form from "./Form";

const Pollution = () => {
  // console.log("Hello");
  let MainCity;
  const DataHandler = (city) => {
    MainCity = city;
    console.log(MainCity);
  };

  return (
    <div>
      <h1>Air Quality Index</h1>
      <Form OnSaveData={DataHandler}></Form>

      <Card city={MainCity} />
      <CardUI />
    </div>
  );
};
export default Pollution;
