import React, {useState, useEffect} from 'react';
import Display from './Components/Display'
import Controls from './Components/Controls'
import data from './data'
import './reset.css'
import './App.css';

function App() {
  const [people, setPeople] = useState(data)
  const [curPerson, setCurPerson] = useState(people[0])

  console.log(people)

  function handlePrev() {
    setCurPerson(people[people.indexOf(curPerson) - 1])
  }

  function handleNext() {
    console.log('next')
    setCurPerson(people[people.indexOf(curPerson) + 1])
  }

  function handleEdit() {
    console.log('Edit person:', curPerson)
  }

  function handleDelete() {
    console.log('Delete person:', curPerson)
    let temp = people
    temp.splice(curPerson.id - 1, 1)
    temp.forEach((v, i, a) => a[i].id = i + 1)

    setPeople(temp)
    setCurPerson(people[0])

  }

  function handleNew() {
    console.log('New person')
  }

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
