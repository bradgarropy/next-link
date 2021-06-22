import {FC, MouseEventHandler} from "react"

import Link from "../../."
import styles from "../styles/Home.module.css"

const About: FC = () => {
    const onClick: MouseEventHandler<HTMLAnchorElement> = () => {
        console.log("onClick")
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to{" "}
                    <Link
                        to="https://nextjs.org"
                        className={styles.link}
                        onClick={onClick}
                    >
                        Next.js!
                    </Link>
                </h1>

                <p className={styles.description}>
                    This is the about page. Check out the{" "}
                    <Link to="/" className={styles.link} onClick={onClick}>
                        home
                    </Link>{" "}
                    page.
                </p>
            </main>
        </div>
    )
}

export default About
