import { useState } from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

function Create({users}){
  const [addName, setAddName]=useState();
  const [addEmail, setAddEmail]=useState();
  const [addAddress, setAddAddress]=useState();
  const [addSalary, setAddSalary]=useState();
const navigate=useNavigate();

  const addData=(e)=>{
    e.preventDefault();
    console.log("clicked");
    let usersData= {
      name: addName ,
      email: addEmail,
      salary: addSalary,
      address:addAddress,
    }
    users.push(usersData);
    navigate("/");
  }
    return(
        <>
        <div className="form-box">
          <form onSubmit={addData}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name :</label>
    <input type="text" class="form-control" onChange={(e)=>{setAddName(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email :</label>
    <input type="text" class="form-control" onChange={(e)=>{setAddEmail(e.target.value)}} id="exampleInputPassword1" placeholder="Enter Email" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Address</label>
    <input type="text" class="form-control" onChange={(e)=>{setAddAddress(e.target.value)}} id="exampleInputPassword1" placeholder="Enter Address" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">salary</label>
    <input type="text" class="form-control" onChange={(e)=>{setAddSalary(e.target.value)}} id="exampleInputPassword1" placeholder="Enter Salary" />
  </div>
  <div style={{textAlign:"right", marginTop:"5%"}}>
  <button type="submit" class="btn btn-primary" style={{width:"45%"}}>Add</button>
  </div>
</form>
</div>
        
        </>
    )
}
export default Create;