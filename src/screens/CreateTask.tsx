import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTask } from "../reducers/taskHandler";

const CreateTask = () => {
  const [taskName, setTaskName] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTaskAdd = () => {
    if (taskName.trim() !== "") {
      const taskId = Date.now();
      dispatch(addTask({ id: taskId, name: taskName }));
      navigate("/");
    } else {
      toast.dismiss();
      toast.error("Please Enter Any Task");
    }
  };

  return (
    <div className="container">
      <div className="list-group-section mt-4">
        <h5>Create Task</h5>
        <div className="d-flex">
          <input
            type="text"
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Button variant="success" onClick={handleTaskAdd}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
