import React, {useState, useEffect} from 'react';
import Display from './Components/Display'
import CardForm from './Components/CardForm'
import Controls from './Components/Controls'
import data from './data'
import './reset.css'
import './App.css';
import Form from './Components/CardForm';

function App() {
  const [people, setPeople] = useState(data)
  const [curPerson, setCurPerson] = useState(people[0])
  const [formFlag, setFormFlag] = useState(false)
  const [editFlag, setEditFlag] = useState(false)

  function handlePrev() {
    setCurPerson(people[people.indexOf(curPerson) - 1])
  }

  function handleNext() {
    console.log('next')
    setCurPerson(people[people.indexOf(curPerson) + 1])
  }

  // function handleEdit() {
  //   console.log('Edit person:', curPerson)
  // }

  function handleDelete() {
    console.log('Delete person:', curPerson)
    let temp = people
    temp.splice(curPerson.id - 1, 1)
    temp.forEach((v, i, a) => a[i].id = i + 1)

    setPeople(temp)
    setCurPerson(people[0])

  }

  // function handleNew(formFlag, editFlag) {
  //   console.log('New person')
  // }

  function handleForm(formFlag, editFlag) {
    setEditFlag(editFlag)
    setFormFlag(formFlag)
    formFlag && editFlag ?
      console.log('Edit current person')
    :
      formFlag ?
        console.log('Add new person')
      :
        console.log('how did you get here?')
  }

  function add(person) {
    let newPeople = people
    newPeople.push(person)
    setPeople(newPeople)
    setCurPerson(person)

    setFormFlag(false)
  }

  function update(person) {
    let oldPerson = curPerson
    let oldPeople = people

    oldPeople.splice(oldPeople.indexOf(oldPerson), 1, person)
    setCurPerson(person)
    setFormFlag(false)
    setEditFlag(false)
  }

  function closeFlags() {
    setEditFlag(false)
    setFormFlag(false)
  }

  return (
    <div className="App">
      <div
        className='header'>
          <span>Home</span>
      </div>
      <div 
        className='card'>{
          formFlag ? 
            <CardForm
              length={people.length}
              editFlag={editFlag}
              curPerson={editFlag ? curPerson : {}}
              closeFlags={closeFlags}
              addPerson={add}
              updatePerson={update} />
          :    
            <Display 
              length={people.length} 
              curPerson={curPerson} />
          }
        <Controls
          total={people.length}
          index={curPerson.id - 1}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleEdit={handleForm}
          handleDelete={handleDelete}
          handleNew={handleForm} 
          formFlag={formFlag} />
      </div>
    </div>
  );
}

export default App;
