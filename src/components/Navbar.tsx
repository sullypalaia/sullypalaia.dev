"use client"

import styles from "@/src/styles/navbar.module.css"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const routenames = ["home", "blog", "contact", "resume"];
  const pathname = usePathname()

  //map the route names to a list of links with the active one highlighted
  const routes = routenames.map((name) => {
    //home route is actually at '/'
    if (name == "home") {
      if (pathname == "/")
        return <li key="home"><Link href="/" className={styles.active}>Home</Link></li>
      return <li key="home"><Link href="/">Home</Link></li>
    }
    const display_name = name[0].toUpperCase() + name.slice(1);
    if (pathname == "/" + name)
      return <li key={name}><Link href={"/" + name} className={styles.active}>{display_name}</Link></li>
    return <li key={name}><Link href={"/" + name}>{display_name}</Link></li>
  });

  return (
    <nav className={styles.navbar_container}>
      <ul className={styles.navbar}>
        {routes}
      </ul>
    </nav>
  );
}
