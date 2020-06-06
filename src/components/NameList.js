import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Alvi", "Zoey", "Snoopy", "Alvi"];
  const persons = [
    {
      id: 1,
      name: "Alvi",
      age: 18,
      skill: "React",
    },
    {
      id: 2,
      name: "Zoey",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Snoopy",
      age: 28,
      skill: "Vue",
    },
  ];
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
