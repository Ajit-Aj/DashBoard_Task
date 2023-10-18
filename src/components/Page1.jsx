import React from "react";
import "./page1.css"
const data = [
  { id: 1, title: "Dummy data" },
  { id: 2, title: "Apple" },
  { id: 3, title: "Banana" },
  { id: 4, title: "Grapes" },
  { id: 5, title: "Strawberry" },
  { id: 6, title: "Mango" },
  { id: 7, title: "Pineapple" },
  { id: 8, title: "Blueberry" },
  { id: 9, title: "Watermelon" },
  { id: 10, title: "Peach" },
  { id: 11, title: "Cherry" },
  { id: 12, title: "Pear" },
  { id: 13, title: "Plum" },
  { id: 14, title: "Kiwi" },
  { id: 15, title: "Raspberry" },
  { id: 16, title: "Blackberry" },
  { id: 17, title: "strawberry" },
  { id: 18, title: "peanut"},
  { id: 19, title: "Blackgapes" },
  { id: 20, title: "Cherry" },
];

const Card = ({ title }) => {
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  );
};

const Page1 = () => {
  return (
    <div className="container">
      {data.map((item) => (
        <Card key={item.id} title={item.title} />
      ))}
    </div>
  );
};

export default Page1;
