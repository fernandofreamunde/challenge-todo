import styles from './Header.module.css';
import todoLogo from '../assets/rocket.svg';

export function Header () {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='todo logo'/>
      <strong ><span>to</span><span>do</span></strong>
    </header>
  )
}
