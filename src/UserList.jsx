import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function UserList({
  data,
  currentPage,
  setCurrentPage,
  setTotal,
  total,
  limitData,
}) {
  const [searchByName, setSearchByName] = useState();
  const [searchByEmail, setSearchByEmail] = useState();
  const [searchByAddress, setSearchByAddress] = useState();
  const [searchByAge, setSearchByAge] = useState();
  const [filterValue, setFilterValue] = useState(data);
  console.log(filterValue);
  const prevPage = () => {
    if(currentPage>1){
      console.log("hello");
      console.log(currentPage);
      setCurrentPage(currentPage - 1);
    }
   
  };
  const nextPage = () => {
    if(currentPage<total){
    setCurrentPage(currentPage + 1);}
  };
  const btn = (num) => {
    setCurrentPage(num);
  };
  let filterArray = [];
  const inputValue = (event) => {
    let valueOfInput = event.target.value.toUpperCase();
    switch (event.target.name) {
      case "searchName":
        setSearchByName(event.target.value);
        setSearchByEmail("");
        setSearchByAddress("");
        setSearchByAge("");
        filterArray = data.filter((element) => {
          console.log(element);
          return element.firstName.toUpperCase().includes(valueOfInput);
        });
        setFilterValue(filterArray);
        break;
      case "searchEmail":
        setSearchByName("");
        setSearchByEmail(event.target.value);
        setSearchByAddress("");
        setSearchByAge("");
        filterArray = data.filter((element) => {
          return element.email.toUpperCase().includes(valueOfInput);
        });
        setFilterValue(filterArray);
        break;
      case "searchAddress":
        setSearchByName("");
        setSearchByEmail("");
        setSearchByAddress(event.target.value);
        setSearchByAge("");
        filterArray = data.filter((element) => {
          return element.address.address.toUpperCase().includes(valueOfInput);
        });
        setFilterValue(filterArray);
        break;
      case "searchAge":
        setSearchByName("");
        setSearchByEmail("");
        setSearchByAddress("");
        setSearchByAge(event.target.value);
        filterArray = data.filter((element) => {
          return element.age >= event.target.value;
        });
        setFilterValue(filterArray);
        break;
      default:
    }
  };
  useEffect(() => {
    setFilterValue(data);
  }, [data]);
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
            value={searchByName}
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
            value={searchByEmail}
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
            value={searchByAddress}
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
            name="searchAge"
            value={searchByAge}
            placeholder="search-age"
          />
        </div>
      </div>
      <table class="table table-hover" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">age</th>
          </tr>
        </thead>
        <tbody>
          {filterValue.map((element, index) => (
            <tr>
              <th scope="row">{(currentPage - 1) * limitData + index + 1}</th>
              <td>{element.firstName}</td>
              <td>{element.email}</td>
              <td>{element.address.address}</td>
              <td>{element.age}</td>
            </tr>
          ))}
        </tbody>{" "}
      </table>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li role="button" class="page-item disabled" onClick={prevPage}>
            <a class="page-link" tabindex="-1">
              Previous
            </a>
          </li>
          {Array.from(Array(total), (e, inx) => {
            return (
              <li role="button" class="page-item">
                <a
                  class={
                    inx + 1 == currentPage ? "page-link active" : "page-link"
                  }
                  onClick={() => {
                    btn(inx + 1);
                  }}
                >
                  {inx + 1}
                </a>
              </li>
            );
          })}

          <li role="button" class="page-item" onClick={nextPage}>
            <a class="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default UserList;
