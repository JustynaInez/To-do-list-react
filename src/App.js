import React from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./buttons";
import Section from "./Section";

const tasks = [
  { id: 1, content: "fdfd", done: true },
  { id: 2, content: "fdwe", done: true }
];
const hideAllTasksDone = false;

function App() {
  return (
    <body>
      <h1 className="Headline">Lista Zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
      body ={<List tasks={tasks} hideAllTasksDone={hideAllTasksDone}/>}
      extraContent = {<Buttons tasks={tasks} hideAllTasksDone={hideAllTasksDone}/>}
      />
    </body>
  );
}

export default App;
