import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src}){

  return(
    <img
        src={src}
        alt="Imagem do usuário"
        className={hasBorder ? styles.avatarWithBorder : styles.avatar }
        />
  )
}