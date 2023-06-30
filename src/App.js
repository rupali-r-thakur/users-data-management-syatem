import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
function App() {
  const [filterValue, setFilterValue] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [limitData, setLimitData] = useState(10);
  const [total, setTotal] = useState(0);

  const getUsers = async () => {
    try {
      console.log("calling", (currentPage - 1) * limitData);
      const usersData = await fetch(
        ` https://dummyjson.com/users?limit=${limitData}&skip=${
          (currentPage - 1) * limitData
        }`
      ).then((res) => res.json());
      console.log(usersData);
      setTotal(usersData.total / limitData);
      // console.log(usersData.users[0].firstName);
      setFilterValue(usersData.users);
    } catch (error) {}
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <UserList
              data={filterValue}
              setFilterValue={setFilterValue}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setTotal={setTotal}
              total={total}
              limitData={limitData}
            />
          }
        />
      </Routes>
    </>
  );
}
// https://dummyjson.com/users
export default App;
