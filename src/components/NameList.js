import React from 'react'

function NameList() {
    const names = ['Arman','John','Cena','Brain']
    const nameList = names.map((name) =><h2>Hello {name}</h2> )

    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
