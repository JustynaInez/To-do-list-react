import React from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "fdfd", done: true },
  { id: 2, content: "fdwe", done: true }

];
const hideAllTasksDone = false;

function App() {
  return (
    <Container>
     <Header title="Lista Zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
      body ={<List tasks={tasks} hideAllTasksDone={hideAllTasksDone}/>}
      extraContent = {<Buttons tasks={tasks} hideAllTasksDone={hideAllTasksDone}/>}
      />
    </Container>
  );
}

export default App;
