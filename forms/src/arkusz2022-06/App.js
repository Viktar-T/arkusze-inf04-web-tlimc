import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {

  const [courses, setCourses] = useState([
      "Programowanie w C#",
      "Angular dla początkujących",
      "Kurs Django", 
    ]
  );

  const [nameAndSurname, setNameAndSurname] = useState()
  const [courseNum, setCourseNum] = useState()

  const onNameAndSurnameChange = (event) => {
    setNameAndSurname(event.target.value)
    }

  const onCourseNumChange = (event) => {
    setCourseNum(event.target.value)
    }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(nameAndSurname)
    if (courses[courseNum - 1]) {
      console.log(courses[courseNum])
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

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name-and-surname">Imie i nazwisko:</label>
          <input onChange={onNameAndSurnameChange} 
            className="form-control" 
            type="text" 
            id="name-and-surname" />
        </div>
        <div className="form-group">
          <label htmlFor="course-number" >Numer kursu:</label>
          <input onChange={onCourseNumChange}          
            className="form-control" 
            type="number" 
            id="course-number" />
        </div>

        <button className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default App;
