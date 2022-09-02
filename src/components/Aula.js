import React from 'react';
import { useParams } from 'react-router-dom'

import data from '../Data'


function UseAula(){
    const id = useParams().id
    return data.filter(aula => aula.id === id)[0]
}

function Aula(props){

    const aula = UseAula()

    return(
        <div className='page aula'>
            <h1>{aula.title}</h1>
            <p>{aula.desc}</p>
        </div>
    )
}


export default Aula;