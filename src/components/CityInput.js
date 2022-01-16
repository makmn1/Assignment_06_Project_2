import React from "react";
import ZipCode from "./ZipCode";

export default function CityInput(){

    const [zip, setZip] = React.useState("")
    const [cities, setCities] = React.useState("")

    function handleChange(event) {
        setCities(event.target.value)
    }

    function getZipCodes(event) {
        event.preventDefault()

        fetch(`http://ctp-zip-api.herokuapp.com/city/${cities.toUpperCase()}`)
   
            .then(function(response) {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(function(data) {
                console.log(data)
                setZip(data)
            }).catch(function(error) {
            console.log("Error: " +error)
        })
    }

    return (
        <div className="box" >
            <form onSubmit={getZipCodes}>
                <label id="label">Enter City:</label>
                <input
                    type="text"
                    placeholder="CITY"
                    name="lname"
                    value={cities}
                    onChange={handleChange}
                />  <br /> <br />
                <button>Search</button>
            </form>
            <div className="scroll-bar">
            

            {
                
                zip ? 
                   zip.map(entry => <ZipCode entry={entry}></ZipCode>)
                     : <h2>No matching Zicodes found yet :(</h2>

            }

            </div>
            
        </div>
    )


}