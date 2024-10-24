import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  // Array of course names
  const courses = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];
  
  // States to manage form data and output
  const [name, setName] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
 
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Validate course number
    const courseIndex = parseInt(courseNumber, 10) - 1;
    if (courseIndex >= 0 && courseIndex < courses.length) {
      const selectedCourse = courses[courseIndex];
      console.log(name);
      console.log(selectedCourse);
    } else {
      console.log("Nieprawidłowy numer kursu");
    }
  };
 
  return (
    <div className="container mt-5">
      <h2>Liczba kursów: {courses.length}</h2>
      
      {/* Display the list of courses */}
      <ol>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ol>
 
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Imię i nazwisko:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Numer kursu:</label>
          <input
            type="number"
            className="form-control"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary mt-3">Zapisz do kursu</button>
      </form>
    </div>
  );
}
 
export default App;