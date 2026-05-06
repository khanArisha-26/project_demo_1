"use client";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali Khan", email: "ali@email.com", role: "Admin" },
    { id: 2, name: "Sara Ahmed", email: "sara@email.com", role: "User" },
  ]);

  function addUser(user) {
    setUsers([...users, { id: Date.now(), ...user }]);
  }

  function deleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  function updateUser(id, updatedUser) {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      )
    );
  }

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  return useContext(UserContext);
}