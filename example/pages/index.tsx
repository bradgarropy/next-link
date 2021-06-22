import {FC} from "react"

import Link from "../../."
import styles from "../styles/Home.module.css"

const Home: FC = () => {
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
                    This is the home page. Check out the{" "}
                    <Link to="/about" className={styles.link}>
                        about
                    </Link>{" "}
                    page.
                </p>
            </main>
        </div>
    )
}

export default Home
