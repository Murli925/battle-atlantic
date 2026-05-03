"use client"
import styles from "./ParallaxSection.module.scss"

type Props = {
  image: string
  children?: React.ReactNode
  className?: string
}

export default function ParallaxSection({
  image,
  children,
  className = ""
}: Props) {
  return (
    <section
      className={`${styles.parallax} ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay} />

      {children && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </section>
  )
}