import React, { useState, useEffect } from 'react';
import List from './List'

function App() {
  const [Tasks, setTasks] = useState('')
  const [TasksList, setList] = useState(['add'])

  function Task(e) {
    setTasks(e.target.value)
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setList(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(TasksList));
  }, [TasksList]);

  function DeleteAll() {
    setList([])

  }

  function DeleteTask(task) {
    console.log(task)
    setList(
      TasksList.filter(e => e !== task)
    )
  }

  function disabled() {
    if (Tasks.length < 1) {
      return 'false';
    }
  }



  return (

    <div className='container'>
      <p> You Have {TasksList.length} {TasksList.length < 2 ? 'Task' : 'tasks'} </p>
      <input className='input' value={Tasks} onChange={Task} placeholder='Type item here' />
      <button disabled={disabled()} onClick={() => { setList([...TasksList, Tasks]); setTasks('') }} >Add</button>

      <List TasksList={TasksList}
        DeleteTask={DeleteTask}
      />
      <button onClick={() => { DeleteAll() }}>delete all</button>
    </div>


  )
}

export default App;
