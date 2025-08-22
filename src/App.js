import './App.css';
import React, { useState, useEffect } from 'react';
import ReloadButton from './components/ReloadButton';
import FactCard from './components/FactCard';

function App(){

    const [fact,setFact]=useState("");
    const [loading, setLoading]=useState(true);

    const fetchFact=async()=>{
        setLoading(true); //set loading to true
        try{
            const response=await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
            const data=await response.json(); //convert the JSON response into an object
            console.log(data);
            setFact(data.text); //set the fact to the text property of the object
        }
        catch(error){
            console.log("error",error); //display error details
        }
        setLoading(false);
    }
    useEffect(() => {
        fetchFact();
    }, []);

    return (
        <div className="app-container">
            <h1 className="page-title">Random Facts</h1>
             <FactCard fact={fact} loading={loading} />
            <center><ReloadButton onClick={fetchFact} /></center>
        </div>
    );
}

export default App;