import styles from "./Card.module.scss"
import Image from "next/image"

type Props = {
  title: string
  description: string
  image: string
}

export default function Card({ title, description, image }: Props) {
  return (
    <div className={styles.card}>

      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill />
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  )
}