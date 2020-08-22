import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
    {
        name: 'Arman',
        roll: 35,
        age: 23
    },
    {
        name: 'John',
        roll: 20,
        age: 42
    },  {
        name: 'Cena',
        roll: 12,
        age: 41
    },

]
    const names = ['Arman','John','Cena','Brain']
    const nameList = names.map((name) => <h2>{name}</h2>)
    const personList = persons.map((person) => (<Person person={person} />))

    return (
        <div>
            {nameList}
            {personList}
        </div>
    )
}

export default NameList
