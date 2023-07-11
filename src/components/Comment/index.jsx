import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/walacefex.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Walace Felix</strong>
              <time title="07 de Junho às 18:00h" dateTime="2022-06-07 18:00:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}