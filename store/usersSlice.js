import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Ali",
      email: "ali@gmail.com",
      role: "Admin",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Date.now(),
        ...action.payload,
      };

      state.users.push(newUser);
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    updateUser: (state, action) => {
      const { id, updatedUser } = action.payload;

      const index = state.users.findIndex((user) => user.id === id);

      if (index !== -1) {
        state.users[index] = {
          id,
          ...updatedUser,
        };
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;