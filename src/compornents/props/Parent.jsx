import React from 'react';
import Child from './Child';

function Parent(props){
    const Details={name:"muni",age:25,sex:"male"};
    const Detail=["muni","25","male"];
    return(
        <>
            <button type='button'>hi</button>
            <Child details={Details} detail={Detail}/>
        </>
    );
}
export default Parent;