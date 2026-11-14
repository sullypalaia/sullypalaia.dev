import styles from "@/src/styles/page.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className={`${styles.name} motion-safe:animate-float`}>Sully Palaia</h1 >

      <div className={styles.intro}>
        <section className={styles.personal_intro}>
          <div className={styles.personal_intro_text}>
            Hi, I am a <strong>computer engineering</strong> student at <strong>California Polytechnic State University, San Luis Obispo</strong>.
          </div>
          <div className={styles.personal_intro_images}>
            <Image src="/calpoly-icon.svg" alt="Cal Poly Icon" width={50} height={50} className={styles.calpoly_image} />
          </div>
        </section>
        <section className={styles.projects_intro}>
          <div className={styles.projects_intro_text}>
            I have worked on multiple projects, including <strong>Neovim</strong> plugins written in Lua and a <strong>game engine</strong> built with <strong>OpenGL</strong> and C++.
          </div>
          <div className={styles.project_intro_images}>
            <Image src="/neovim-icon.webp" alt="Neovim Icon" width={20} height={20} className={styles.nvim_image} />
            <Image src="/opengl-icon.webp" alt="OpenGL Icon" width={50} height={20} className={styles.opengl_image} />
          </div>
        </section >
        <section className={styles.experience_intro}>
          <div className={styles.experience_intro_text}>
            Currently, I am a software developer at <strong>Hack4Impact Cal Poly</strong>.
          </div>
          <div className={styles.experience_intro_images}>
            <Image src="/hack4impact-logo.png" alt="Hack4Impact Icon" width={50} height={50} className={styles.hack4impact_image} />
          </div>
        </section>
      </div >

      <div className={styles.projects}>
        <h2 className={styles.project_header}>My Projects</h2>
        <div className={styles.projects}>
          <section className={styles.project1}>
            <div className={styles.project1_text}>
              <h3 className={styles.project1_title}>fancy-marks.nvim</h3>
              <p className={styles.project1_description}>
                A game engine built with OpenGL and C++ that allows for the creation of 2D and 3D games.
              </p>
            </div>
            <div className={styles.project1_image}>
              <Image src="/fancy-marks-sc.png" alt="fancy-marks.nvim screenshot" width={400} height={200} className={styles.fancy_marks_image} />
            </div>
          </section>
          <section className={styles.project2}>
            <div className={styles.project2_text}>
              <h3 className={styles.project2_title}>fancy-notifications.nvim</h3>
              <p className={styles.project2_description}>
                A game engine built with OpenGL and C++ that allows for the creation of 2D and 3D games.
              </p>
            </div>
            <div className={styles.project2_image}>
            </div>
          </section>
        </div>
      </div>

      <div className={styles.experience}>
        <h2 className={styles.experience_header}>My Experience</h2>
      </div>
    </>
  );
}
