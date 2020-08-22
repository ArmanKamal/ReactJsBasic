import React from 'react'
import Person from './Person'

// Why key is needed 

// Because without key react cant compare with old tree so it has to create a new copy... 

// Try to avoid index as a key (Many problems occur)
function NameList() {
    const persons = [
    {
        id: 1,
        name: 'Arman',
        roll: 35,
        age: 23
    },
    {
        id: 2,
        name: 'John',
        roll: 20,
        age: 42
    },  {
        id: 3,
        name: 'Cena',
        roll: 12,
        age: 41
    },

]
    const names = ['Arman','John','Cena','Brain']
    const nameList = names.map((name) => <h2 key={name}>{name}</h2>)
    const personList = persons.map((person) => (<Person key={person.name} person={person} />))

    return (
        <div>
            {nameList}
            {personList}
        </div>
    )
}

export default NameList
