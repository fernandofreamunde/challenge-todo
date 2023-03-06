import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import styles from './NewTask.module.css';
import { PlusCircle } from "phosphor-react";
import { iTask } from './TaskList';

interface NewTaskProps {
  list: iTask[],
  updateList: Dispatch<SetStateAction<iTask[]>>
}

export function NewTask ({list, updateList}: NewTaskProps) {
  const [newTaskField, setNewTaskField] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const task = {
      id: list.length +1,
      description: newTaskField,
      isDone: false
    }

    const updatedList = [...list, task];
    updateList(updatedList);
    setNewTaskField('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskField(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className={styles.input} 
        type='text' 
        placeholder='Add a new task'
        value={newTaskField}
        onChange={handleNewCommentChange}
      />
      <button type='submit'> 
        Criar <PlusCircle size={22} />
      </button>
    </form>
  )
}