import React from 'react'
import Column from './Column'

function Table() {
    return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Shop</th>
                    </tr>  
                </thead>
                <tbody>
                    <Column />
                </tbody>
            </table>
   
    )
}

export default Table
