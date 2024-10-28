import React, { useState } from 'react';

function Arrays(){
    // const vowels=['a','e','i','o','u'];
    // const mylist=vowels.map((item)=><p>{item}</p>);
    // const a=[1,2,3,4,5,6,7,8];
    // const b=[4,5,6];
    // const c=[...a,...b];
    // const [one,two,...rest]=a;
    // const [name,setName]=useState('');
    const [details,setDetails]=useState('');
    const show=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setDetails((values)=>({...values,[name]:value}))
        // setName(e.target.value);
        // console.log(e.target.value);
    }
    const showName=()=>{
        console.log(details);
    }
    return(
        <>
            {/* {mylist}
            {c} */}
            <input type='telephone' name="age" value={details.age} onChange={show}/>
            <input type='text' name="name" value={details.name} onChange={show}/>
            <input type='button' onClick={showName} value="show name"/>
        </>
    );
}

export default Arrays;