import styles from './navbar.module.css'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
export default function Navbar() {
    return (
        <>
            <Script src="https://kit.fontawesome.com/d7b789e221.js"     ></Script>
            <div className={styles.container}>
                <div className={styles.subject}>


                    <i className="fa-solid fa-book-open">  Subject  </i>

                    <i className="fa-solid fa-angle-down"></i>



                </div>
                <nav cl>
                    <ul className={styles.listitems}>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                           <Link href="/Subjects/subjects"><p>Course</p></Link> 
                        </li>
                        <li>
                            <p>Teachers</p>
                        </li>
                        <li>
                            <p>Blog</p>
                        </li>
                        <li>
                            <p>Contact</p>
                        </li>
                    </ul>
                </nav>
                <div className={styles.joindiv}>
                    <ul className={styles.joinnow}>
                        <li>
                            <input type='button' value='Join Now' />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}