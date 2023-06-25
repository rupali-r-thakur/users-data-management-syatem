import { useState } from "react";
import {Link, Routes, Route} from "react-router-dom";
import UserList from "./UserList";
import Create from "./Create"
function App() {
  const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      salary: 50000,
      address: "123 Main St, City, State",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      salary: 60000,
      address: "456 Elm St, City, State",
    },
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      salary: 55000,
      address: "789 Oak St, City, State",
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      salary: 70000,
      address: "321 Pine St, City, State",
    },
    {
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      salary: 45000,
      address: "987 Maple St, City, State",
    },
    {
      name: "Sarah Thompson",
      email: "sarah.thompson@example.com",
      salary: 55000,
      address: "654 Cedar St, City, State",
    },
    {
      name: "Christopher Brown",
      email: "christopher.brown@example.com",
      salary: 60000,
      address: "789 Elm St, City, State",
    },
    {
      name: "Olivia Taylor",
      email: "olivia.taylor@example.com",
      salary: 55000,
      address: "123 Oak St, City, State",
    },
    {
      name: "Matthew Anderson",
      email: "matthew.anderson@example.com",
      salary: 50000,
      address: "456 Pine St, City, State",
    },
    {
      name: "Ava Martinez",
      email: "ava.martinez@example.com",
      salary: 65000,
      address: "789 Cedar St, City, State",
    },
    {
      name: "David Thompson",
      email: "david.thompson@example.com",
      salary: 55000,
      address: "321 Maple St, City, State",
    },
    {
      name: "Sophia Martin",
      email: "sophia.martin@example.com",
      salary: 55000,

      address: "654 Elm St, City, State",
    },
    {
      name: "William Rodriguez",
      email: "william.rodriguez@example.com",
      salary: 60000,
      address: "987 Oak St, City, State",
    },
    {
      name: "Isabella Hernandez",
      email: "isabella.hernandez@example.com",
      salary: 55000,
      address: "123 Pine St, City, State",
    },
    {
      name: "James Lee",
      email: "james.lee@example.com",
      salary: 55000,
      address: "456 Cedar St, City, State",
    },
    {
      name: "Emma Clark",
      email: "emma.clark@example.com",
      salary: 55000,
      address: "789 Maple St, City, State",
    },
    {
      name: "Benjamin Walker",
      email: "benjamin.walker@example.com",
      salary: 59000,
      address: "789 Maple , City, State",
    },{
      name: "James ",
      email: "james.Jameslee@example.com",
      salary: 95000,
      address: "756 Cedar St, City, State",
    },
    {
      name: " Clark",
      email: "Clark.clark@example.com",
      salary: 75000,
      address: "589 Maple St, City, State",
    },
    {
      name: " Walker",
      email: "Walker.walker@example.com",
      salary: 53000,
      address: "769 Maple , City, State",
    },{
      name: " Lee",
      email: "Lee.lee@example.com",
      salary: 50000,
      address: "450 Cedar St, City, State",
    },
    {
      name: " Clark",
      email: "Clark.clark@example.com",
      salary: 75000,
      address: "789 Maple , City, State",
    },
    {
      name: "Benjamin ",
      email: "benj.walker@example.com",
      salary: 59000,
      address: "729 Maple , City, State",
    },
  ];
  return (
    <>
    <Routes>
      <Route path="/" element={<UserList users={users}/>} />

      <Route path="/create" element={<Create users={users}/>}/>
    </Routes>
      
    </>
  );
}
// https://dummyjson.com/users
export default App;
