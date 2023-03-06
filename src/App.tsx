
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { NewTask } from './components/NewTask';
import { TaskList, iTask} from './components/TaskList';
import { useState } from 'react';

function App() {

  const tasks: iTask[] = [
    {
      id: 1,
      description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isDone: true
    },
    {
      id: 2,
      description: 'Study react: finish styling and adding behaviour to the challenge app.',
      isDone: true
    },
    {
      id: 3,
      description: 'Study Japanese: Do at least a round of JVS classes on level 4.',
      isDone: false
    },
    {
      id: 4,
      description: 'Order a pizza or make some deliciuos food.',
      isDone: false
    },
    {
      id: 5,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum, nesciunt voluptates suscipit pariatur ducimus id necessitatibus, amet corporis molestias ad! Similique voluptates aperiam explicabo dicta nemo temporibus asperiores sit.',
      isDone: true
    }
  ];

  const [taskList, setTaskList] = useState(tasks);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}> 
        <main className={styles.main}>
          <NewTask list={taskList} updateList={setTaskList} />

          <TaskList list={taskList} updateList={setTaskList} />
        </main>

      </div>
    </div>
  )
}

export default App
