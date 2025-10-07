import useName from "./hooks/useName";
import "./styles.css";

export default function App() {
  const [firstName, lastName, setFirstName, setLastName] = useName();

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="first name"
          value={firstName || ""}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="last name"
          value={lastName || ""}
          onChange={handleLastNameChange}
        />
      </form>
      <h2>The full name:</h2>
      <output>{`${firstName} ${lastName}`}</output>
    </>
  );
}
