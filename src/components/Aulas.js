import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data';

export default function Aulas(props) {

   

    return(
        <div className='page aula'>
            <h1>Aulas</h1>
            <ul className='aulas'>
                {data.map(aula => 
                    <li key={aula.id}>
                        {/* <Link>{aula.title}</Link> */}
                        <Link className='linkAula' to={`${aula.id}`}>
                        {aula.title}
                        </Link>
                    </li>
                    )}
            </ul>
            
        </div>
    )
}