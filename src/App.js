import React from 'react';
import Form from "./Form";
import List from "./List";
import Buttons from "./buttons";

const tasks = [
  {id:1, content: "fdfd", done: true },
  {id:2, content: "fdwe", done: true }
];
const hideAllTasksDone = false;

function App() {
  return (
      <body>

        <h1 className="Headline">
          Lista Zadań
</h1>
        <section className="section">
          <h2 className="section__headline">Dodaj nowe zadanie</h2>

         <Form />
          </section>

          <section className="section ">
          <h2 className="section__headline section__flex" >Lista zadań  
          <Buttons tasks={tasks} hideAllTasksDone= {hideAllTasksDone}/> 
          </h2>
            <List tasks={tasks} hideAllTasksDone= {hideAllTasksDone} />
          </section>
          </body>

        
  );
}

export default App;
