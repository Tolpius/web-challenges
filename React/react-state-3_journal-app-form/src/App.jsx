import "./App.css";
import { initialEntries } from "./components/EntriesSection";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={setEntries} entries={entries}/>
        <EntriesSection entries={entries}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
