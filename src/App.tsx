
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { NewTask } from './components/NewTask';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}> 
        <main className={styles.main}>
          <NewTask />
        </main>

      </div>
    </div>
  )
}

export default App
