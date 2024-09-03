import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

const ToDoList = () => {
  // State variables
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  // Set a user input value
  const updateInput = (value) => {
    setUserInput(value);
  };

  // Add item if user input is not empty
  const addItem = () => {
    if (userInput !== "") {
      const newItem = {
        id: Math.random(), // Generate a random id
        value: userInput,
      };
      setList([...list, newItem]);
      setUserInput(""); // Clear input field
    }
  };

  // Function to delete item from list using id
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Function to edit an item in the list
  const editItem = (index) => {
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== null && editedTodo.trim() !== '') {
      const updatedList = list.map((item, idx) =>
        idx === index ? { ...item, value: editedTodo } : item
      );
      setList(updatedList);
    }
  };

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row>

      <hr />
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="add item . . . "
              size="lg"
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
            />
            <InputGroup>
              <Button
                variant="dark"
                className="mt-2"
                onClick={addItem}
              >
                ADD
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {/* map over and print items */}
            {list.map((item, index) => (
              <div key={item.id}>
                <ListGroup.Item
                  variant="dark"
                  action
                  style={{
                    display: "flex",
                    justifyContent: 'space-between'
                  }}
                >
                  {item.value}
                  <span>
                    <Button style={{ marginRight: "10px" }}
                      variant="light"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </Button>
                    <Button variant="light"
                      onClick={() => editItem(index)}
                    >
                      Edit
                    </Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoList;
