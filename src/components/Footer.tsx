import styles from "@/src/styles/footer.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.github} >
            <Link href="https://github.com/sullypalaia" target="_blank">Github</Link>
            <Link href="https://github.com/sullypalaia" target="_blank"><Image src="/github-icon.png" alt="Github Icon" width={20} height={20} className={styles.github_icon} /></Link>
          </div>
          <p className={styles.footer_text}>© 2026 Sully Palaia. All rights reserved.</p>
          <div className={styles.email}>
            <p>sullypalaia@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  )
}
