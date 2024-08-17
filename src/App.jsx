import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [people, setPeople] = useState([
    { id: 101, name: "Tiko", surname: "Harutyunyan", salary: 200000 },
    { id: 102, name: "Ano", surname: "Davtyan", salary: 350000 },
    { id: 103, name: "Gago", surname: "Tigranyan", salary: 102000 },
    { id: 104, name: "Maro", surname: "Melqonyan", salary: 120000 },
    { id: 105, name: "Saro", surname: "Harutyunyan", salary: 75000 },
    { id: 106, name: "Varo", surname: "Mnacakanyan", salary: 820000 },
  ]);

  const handleSalaryUp = (id) => {
    let index = people.findIndex((x) => x.id === id);
    people[index].salary += 57000;
    setPeople([...people]);
  };

  const handleSalaryDown = (id) => {
    setPeople(
      people.map((person) =>
        person.id === id
          ? { ...person, salary: Math.max(person.salary - 50000, 50000) }
          : person
      )
    );
  };

  const handleRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      <h1>Barev</h1>
      {people.map((item) => (
        <div key={item.id}>
          <p>
            <strong>
              {item.name} {item.surname}
            </strong>
          </p>
          <p>
             <strong>{item.salary} AMD</strong>
          </p>
          <button onClick={() => handleSalaryUp(item.id)}>Salary Up</button>
          <button onClick={() => handleSalaryDown(item.id)}>Salary Down</button>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}
