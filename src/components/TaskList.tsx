import { Dispatch, SetStateAction, useState } from 'react';
import { Task } from './Task';
import { TaskCounter } from './TaskCounter';
import styles from './TaskList.module.css';
import clipboard from '../assets/Clipboard.svg';

interface TaskListProps {
  list: iTask[],
  updateList: Dispatch<SetStateAction<iTask[]>>
}

export interface iTask {
  id: number;
  isDone: boolean;
  description: string;
}

export function TaskList ({ list, updateList }: TaskListProps) {
  const [tasksDone, setTasksDone] = useState(list.filter(task => task.isDone));

  function handleDone(id: number) {
    const task = list.find(task => task.id == id);

    if (!task) {
      return;
    }
    
    task.isDone = !task.isDone;
    const index = list.indexOf(task);
    list[index] = task;
    updateList(list);
    setTasksDone(list.filter(task => task.isDone));
  }

  function handleDelete(id: number) {
    // because when using `updateList` react will create a new context
    // and we will only have access to the old one in setTasksDone
    const updatedList = list.filter(task => task.id != id);
    updateList(updatedList);
    setTasksDone(updatedList.filter(task => task.isDone));
  }

  return (
    <div>
      <div className={styles.header}>
        <TaskCounter count={list.length} color='blue' title='Created tasks' />
        <TaskCounter count={tasksDone.length} color='purple' title='Finished' />
      </div>

      <div className={styles.listBox} >

        {
          list.length === 0 ?
          <div className={styles.emptyState}>
            <img src={clipboard} />
            <p><strong>You dont have any tasks submited yet</strong></p>
            <p>Create and organize your tasks of the day</p>
          </div>
          :
          list.sort((a: any, b: any) => a.isDone - b.isDone).map( 
            task => <Task 
              description={task.description} 
              isDone={task.isDone} 
              key={task.id}
              id={task.id}
              onDelete={handleDelete}
              onDone={handleDone}
            />)
        }

      </div>
    </div>
  )
}
