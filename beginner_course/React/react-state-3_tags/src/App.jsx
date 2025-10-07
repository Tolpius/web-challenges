import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  function onDeleteTag(tagToDelete) {
    let newTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(newTags);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={onDeleteTag} />
    </main>
  );
}
