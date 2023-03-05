
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}> 
        <main className={styles.main}>
          <NewTask />

          <TaskList />
        </main>

      </div>
    </div>
  )
}

export default App
