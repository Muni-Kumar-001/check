import React, { useState } from "react";
import "./ex.css";
function UserAuthentiPage(){
    // const containerStyle={backgroundColor:"white",borderRadius:"30px",fontWeight:"bold",width:"30vw",height:"190px",textAlign:"center",alignContent:"center"};
    // const buttonStyle={backgroundColor:"green",color: "white",width: "90px",height: "30px",borderRadius: "inherit"};
    const [details,setDetails]=useState('')
    const VoteOf=(e)=>{
        console.log(details);
    }
    const assign=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setDetails((values)=>({...values,[name]:value}));
    }
    return(
        <>
        {/* <form className="container" onSubmit={VoteOf}> */}
        <form className="container">
            <label htmlFor="RollNo">Roll No::</label>
            <input type="text" name="RollNo" id="RollNo" value={details.RollNo} onChange={assign} required/>
            <br/>
            <label htmlFor="candidate">Vote for ::</label>
            <select name="candidate" id="candidate" onChange={assign} required>
                <option value="Candidate1">Candidate1</option>
                <option value="Candidate2">Candidate2</option>
                <option value="Candidate3">Candidate3</option>
                <option value="Candidate4">Candidate4</option>
            </select>
            <br></br>
            <input type="button" value="Vote" className="voteButton" onClick={VoteOf}/>
        </form>
        </>
    );
}

export default UserAuthentiPage;