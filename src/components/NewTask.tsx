import styles from './NewTask.module.css';
import { PlusCircle } from "phosphor-react";

export function NewTask () {
  return (
    <form>
      <input className={styles.input} type='text' placeholder='Add a new task'/>
      <button type='submit'> Criar <PlusCircle size={22} />
      </button>
    </form>
  )
}