import { useState } from 'react';
export default function useName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return [firstName, lastName, setFirstName, setLastName];
}
