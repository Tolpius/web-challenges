import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    newAnimal.id = crypto.randomUUID();
    setAnimals((prevAnimals) => [...prevAnimals, newAnimal]);
    console.log("New animal added:", newAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
