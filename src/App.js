import React, {useState, useEffect} from 'react';
import Display from './Components/Display'
import Controls from './Components/Controls'
import data from './data'
import logo from './logo.svg';
import './reset.css'
import './App.css';

function App() {
  const [people, setPeople] = useState(data)
  const [curPerson, setCurPerson] = useState(people[0])

  console.log(people)

  function handlePrev() {
    setCurPerson(people[curPerson.id - 2])
  }

  function handleNext() {
    console.log('next')
    setCurPerson(people[curPerson.id])
  }

  function handleEdit() {
    console.log('Edit person:', curPerson)
  }

  function handleDelete() {
    console.log('Delete person:', curPerson)
  }

  function handleNew() {
    console.log('New person')
  }

  console.log(curPerson)
  return (
    <div className="App">
      <div
        className='header'>
          <span>Home</span>
      </div>
      <div 
        className='card'>
        <Display 
          length={people.length} 
          curPerson={curPerson} />
        <Controls
          total={people.length}
          index={curPerson.id - 1}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleNew={handleNew} />
      </div>
    </div>
  );
}

export default App;
