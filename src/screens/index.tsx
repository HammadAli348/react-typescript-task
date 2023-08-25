import React, { useState } from "react";
import CheckboxListGroup from "./CheckboxListGroup";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../config/configureStore";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../reducers/taskHandler";
import { toast } from "react-toastify";

const MainListPage: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const { taskList } = useSelector((state: RootState) => state.userTaskHandler);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onItemSelect = (itemId: number) => {
    if (!selectedItems.includes(itemId)) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== itemId)
      );
    }
  };

  const addTaskHandler = () => {
    navigate("/create-task");
  };

  const deleteTaskHandler = () => {
    if (selectedItems.length) {
      dispatch(deleteTask(selectedItems));
    } else {
      toast.dismiss();
      toast.error("Please Select Any Task For Delete");
    }
  };

  return (
    <div className="container">
      <div className="list-group-section mt-4">
        <h5>Task Lists</h5>
        <CheckboxListGroup items={taskList} onItemSelect={onItemSelect} />
        <div className="button-group">
          <Button variant="success" onClick={addTaskHandler}>
            Add Task
          </Button>
          <Button variant="danger" onClick={deleteTaskHandler}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainListPage;
