import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const listItems = ["Willows", "Pioneer", "AJ Jolly", "Twin Oaks", "Devou"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item + " selected");
  };

  const handleButtonClick = () => {
    console.log("Button Clicked");
    setAlertVisibility(true);
  };

  return (
    <div>
      <ListGroup
        items={listItems}
        heading="Local Golf Courses"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="success" onClick={handleButtonClick}>
        Select Course
      </Button>
    </div>
  );
}

export default App;
