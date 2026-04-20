import styles from "./Card.module.scss"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

type Props = {
  title: string
  description: string
  image: string
  link:string
}

export default function Card({ title, description, image, link }: Props) {
  return (
    <div className={styles.card}>

      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill />
      </div>

      <div className={styles.content}>
        <div className={styles.contentWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
        <div className={styles.btnWrapper}>
        <a href={link}><ChevronRight className="w-5 h-5 text-white" /></a>
        </div>
      </div>

    </div>
  )
}