import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckboxItem } from "../interface/CheckboxItem";

interface TodosListInterface {
  taskList: CheckboxItem[]; // Make sure CheckboxItem is imported here
}

const initialState: TodosListInterface = {
  taskList: [],
};

const userTaskHandler = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<CheckboxItem>) => {
      state.taskList.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number[]>) => {
      state.taskList = state.taskList.filter(
        (item) => !action.payload.includes(item.id)
      );
    },
  },
});

export const { addTask, deleteTask } = userTaskHandler.actions;
export default userTaskHandler.reducer;
