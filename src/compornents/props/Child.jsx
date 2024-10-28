import React from 'react';

function Child(props){
    const details=props.details;
    const [name,age,sex]=props.detail;  //array destructuring
    return(
        <>
            <button type='button'>{props.details.name}</button>
            <p>{details.name}</p>
            <p>{details.age}</p>
            <p>{details.sex}</p>

            
            <p>{name}</p>
            <p>{age}</p>
            <p>{sex}</p>
        </>
    );
}
export default Child;