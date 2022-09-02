import React from 'react';

import { useLocation } from 'react-router-dom'


function useQuery(){
    const l = useLocation().search
    return l.replace('?', '');

}

export default function Assistir(props){

    const location = useQuery()
    
    return(
        <div className='page'>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${location}`} title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
    )
}

//LjJFu6Y6MrU