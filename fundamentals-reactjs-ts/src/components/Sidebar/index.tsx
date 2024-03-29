import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="imagem de fundo"
      />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/16948390?v=4"/>
        <strong>Walace Felix</strong>
        <span>Web Developer</span>
      </div>
      <footer className={styles.footer}>
        <a href="#">
          <PencilLine
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}