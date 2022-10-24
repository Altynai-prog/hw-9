import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";



function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  const deleteUser = (id) => {
    return () => {
      const Delete = userList.filter((user) => user.id !== id);
      setUserList(Delete);
    };
  };


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} onDeleteUser={deleteUser}/>
    </div>
  );
}

export default App;
