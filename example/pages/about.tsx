import {FC} from "react"

import Link from "../../."
import styles from "../styles/Home.module.css"

const About: FC = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to{" "}
                    <Link to="https://nextjs.org" className={styles.link}>
                        Next.js!
                    </Link>
                </h1>

                <p className={styles.description}>
                    This is the about page. Check out the{" "}
                    <Link to="/" className={styles.link}>
                        home
                    </Link>{" "}
                    page.
                </p>
            </main>
        </div>
    )
}

export default About
