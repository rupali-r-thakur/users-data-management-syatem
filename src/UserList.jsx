import React, {useState} from "react";
import { Link } from "react-router-dom";
function UserList({users}){
    
  const [filterValue, setFilterValue] = useState(users);
  let filterArray = [];
  const inputValue = (event) => {
    let valueOfInput = event.target.value.toUpperCase();
    switch (event.target.name) {
      case "searchName":
        filterArray = users.filter((element) => {
          return element.name.toUpperCase().includes(valueOfInput);
        });
        setFilterValue(filterArray);
        break;
      case "searchEmail":
        filterArray = users.filter((element) => {
          return element.email.toUpperCase().includes(valueOfInput);
        });
        setFilterValue(filterArray);
        break;
      case "searchAddress":
        filterArray = users.filter((element) => {
          return element.address.toUpperCase().includes(valueOfInput);
        });
        setFilterValue(filterArray);
        break;
      case "searchSalary":
        filterArray = users.filter((element) => {
          return element.salary > event.target.value;
        });
        setFilterValue(filterArray);
        break;
      default:
    }
  };
    return (
        <>
        <div className="header">
        <h1>users-data-management-system</h1>
      </div>
      <div className="input-container">
        <div class="form-outline">
          <input
            style={{ padding: "5%", marginTop: "5%" }}
            class="form-control"
            id="formControlReadonly"
            name="searchName"
            type="text"
            onChange={inputValue}
            placeholder="search-name"
          />
        </div>
        <div class="form-outline">
          <input
            style={{ padding: "5%", marginTop: "5%" }}
            class="form-control"
            id="formControlReadonly"
            type="text"
            onChange={inputValue}
            name="searchEmail"
            placeholder="search-email"
          />
        </div>
        <div class="form-outline">
          <input
            style={{ padding: "5%", marginTop: "5%" }}
            class="form-control"
            id="formControlReadonly"
            type="text"
            onChange={inputValue}
            name="searchAddress"
            placeholder="search-address"
          />
        </div>
        <div class="form-outline">
          <input
            style={{ padding: "5%", marginTop: "5%" }}
            class="form-control"
            id="formControlReadonly"
            type="text"
            onChange={inputValue}
            name="searchSalary"
            placeholder="search-salary"
          />
        </div>
        <Link to="/create"> <button
          type="button"
          class="btn btn-secondary"
        >
          Secondary
        </button></Link>
      </div>
      <table class="table table-hover" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">salary</th>
          </tr>
        </thead>
        <tbody>
          {filterValue.map((element, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.address}</td>
              <td>{element.salary}</td>
            </tr>
          ))}
        </tbody>{" "}
      </table>
        
        </>
    )
}
export default UserList