import { useState } from 'react';
import shortid from 'shortid';
import Layout from '../components/layout/Layout';
import ShowTasks from '../components/section/ShowTasks';
import CreateTask from '../components/tasks/CreateTask';

function Tasks() {
  const [tasks, setTask] = useState([]);
  const [visibility, setVisibility] = useState('all');

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      cretedAt: new Date(),
      id: shortid.generate(),
    };
    setTask([task, ...tasks]);
  };

  return (
    <Layout>
      <h1>Task</h1>
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks tasks={tasks} />
    </Layout>
  );
}

export default Tasks;
