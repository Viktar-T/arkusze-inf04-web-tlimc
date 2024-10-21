import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

function App() {
    const [filmName, setFilmName] = useState('')
    const [filmType, setFilmType] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`tytul: ${filmName}; rodzaj: ${filmType}`)
    }

    const handleChangeFilmName = (event) => {
        setFilmName(event.target.value)
    }

    const handleChangeFilmType = (event) => {
        setFilmType(event.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="filmName">Tytuł filmu</label>
                    <input 
                    type="text" 
                    id="filmName"
                    className="form-control"
                    value={filmName}
                    onChange={handleChangeFilmName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="filmType">Rodzaj</label>
                    <select 
                    name="filmType" 
                    id="filmType"
                    className="form-control"
                    value={filmType}
                    onChange={handleChangeFilmType}
                    >
                        <option></option>
                        <option>Komedia</option>
                        <option>Obyczajowy</option>
                        <option>Sensacyjny</option>
                        <option>Horror</option>
                    </select>               
                    <button type="submit" className="btn btn-primary">Dodaj</button>
                </div>
            </form>
        </div>
    )
}

export default App