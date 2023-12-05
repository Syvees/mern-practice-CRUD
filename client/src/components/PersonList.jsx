import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const PersonList = (props) => {
    const { removeFromDom, people, setPeople} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/people") // GET ALL
        .then(res => {
            console.log(res.data);
            setPeople(res.data);
        })
        .catch((err) => {console.log(err)});    
    }, [])

    const deletePerson = (personId) => {
        axios.delete("http://localhost:8000/api/people/" + personId)
        .then(res => {
            removeFromDom(personId)
        })
        .catch((err) => {console.log(err)});    
    }

    return (
        <div>
            {
                people.map((person, index) => {
                    return (
                        <div key={index}> 
                            <br/><Link to={`/people/${person._id}`}>{person.lastName}, {person.firstName}</Link>
                            <Link to={"/people/edit/" + person._id}> Edit </Link>
                            <button onClick = {e => {deletePerson(person._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PersonList;