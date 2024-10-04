import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [nameAndSurname, setNameAndSurname] = useState()
  const [courseNumber, setCourseNumber] = useState()

  const courses = [
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django",
  ]

  const nameChange = (event) => {
    event.preventDefault()
    const input = event.target.value
    setNameAndSurname(input)
  }

  const numChange = (event) => {
    event.preventDefault()
    const input = event.target.value
    setCourseNumber(input)
  }

  const onSubmitButton = (event) => {
    event.preventDefault()
    console.log(nameAndSurname)
    if (courses[courseNumber]) {
      console.log(courses[courseNumber])
    } else {
      console.log("Nieprawidłowy numer kursu")
    }
    
  }
  return (
    <div>
      <h1>Liczba kursów: 3</h1>
      <ol>
        {courses.map(course => <li>{course}</li>)}
      </ol>
      <form onSubmit={onSubmitButton}>
        <div class="form-group"> 
          <label for="nameAndSurname">Imie i mazwisko:</label> 
          <input type="text" class="form-control" id="nameAndSurname" onChange={nameChange}  /> 
        </div> 
        <div class="form-group">
          <lable for="courseNum">Numer kursu:</lable><br/>
          <input type="number" class="form-control" name="courseNum" onChange={numChange}/><br/>
        </div>
        <button type="submit" class="btn btn-primary">Zapisz do kursu</button>
      </form>

    </div>
  );
}

export default App;
