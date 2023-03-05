import { TaskCounter } from './TaskCounter';
import styles from './TaskList.module.css';

export function TaskList () {
  return (
    <div>
      <div className={styles.header}>
        <TaskCounter count={0} color='blue' title='Created tasks' />
        <TaskCounter count={0} color='purple' title='Finished' />
      </div>

      <div className={styles.listBox} ></div>
    </div>
  )
}
