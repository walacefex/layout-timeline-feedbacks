import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img src="https://github.com/walacefex.png" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>
              Walace Felix
            </strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="07 de Junho às 18:00h" dateTime="2022-06-07 18:00:00">
          publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p> Acabei de subir mais um projeto no meu portifa.
          É um projeto que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#"> #nlw </a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>
    </article>
  )
}