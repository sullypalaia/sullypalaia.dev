import styles from "@/src/styles/footer.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footer_text}>© 2026 Sully Palaia. All rights reserved.</p>
        <div className={styles.socials_container}>
          <section className={styles.socials}>
            <Link href="https://github.com/sullypalaia" target="_blank">Github</Link>
            <Image src="/github-icon.png" alt="Github Icon" width={20} height={20} />
          </section>
        </div>
      </footer>
    </>
  )
}
