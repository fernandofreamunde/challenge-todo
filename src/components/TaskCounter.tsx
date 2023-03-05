import styles from './TaskCounter.module.css';

interface CounterProps {
  title: string;
  count: number;
  color: 'blue' | 'purple'
}

export function TaskCounter ({color, count, title}: CounterProps) {
  return (
    <div className={ color == 'blue' ? styles.textBlue : styles.textPurple} >
      {title} <span className={styles.badge}>{count}</span>
    </div>
  )
}
