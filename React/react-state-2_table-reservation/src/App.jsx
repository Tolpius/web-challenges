import Counter from "./components/Counter";
import "./styles.css";
import {useState} from "react";

export default function App() {
  const [peopleCounter, setPeopleCounter] = useState(2);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter peopleCounter={peopleCounter} setPeopleCounter={setPeopleCounter}/>
      <p>You are going to reserve a table for {peopleCounter} people.</p>
    </div>
  );
}
