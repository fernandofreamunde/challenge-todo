import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';

interface TaskProps {
  description: string;
  isDone?: boolean;
  id: number;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

export function Task ({isDone = false, description, onDelete, onDone, id}: TaskProps) {

  const [done, setDone] = useState(isDone);
  function handleOnDone() {
    setDone(!done)
    onDone(id);
  }
  function handleOnDelete() {
    onDelete(id);
  }

  return (
    <div className={styles.task}>
      <button  onClick={handleOnDone} className={done ? styles.markedCheckBox : styles.emptyCheckBox}>
        <span className={done ? styles.visible : styles.invisible} ><Check weight="bold" /></span>
      </button>
      <div className={`${done ? styles.textDone : ''} ${styles.description}` } >
        {description}
      </div>
      <button onClick={handleOnDelete} className={styles.deleteTask}>
        <Trash size={18} />
      </button>
    </div>
  )
}
