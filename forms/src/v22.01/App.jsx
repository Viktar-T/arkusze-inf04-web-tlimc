import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState([
    "Programowanie w C#",
    "Angular dla początkujących",
    "Kurs Django"
  ])
  const [name, setName] = useState()
  const [courseNumber, setCourseNumber] = useState()

  function handleNameInput(event) {
    setName(event.target.value)
  }

  function handleCourseNumberInput(event) {
    setCourseNumber(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
    if (courses[courseNumber - 1]) {
      console.log(courses[courseNumber])
    } else {
      console.log("Nieprawidłowy numer kursu")
    }
  }

  return (
    <div>
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map(course => <li>{course}</li>)}
      </ol>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameAndSurname">Imię i nazwisko:</label>
          <input 
          type="test" 
          id="nameAndSurname" 
          className="form-control"
          onChange={handleNameInput} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseNum">Numer kursu:</label>
          <input 
          type="number" 
          id="courseNum" 
          className="form-control"
          onChange={handleCourseNumberInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
      </form>

    </div>
  )}


export default App
