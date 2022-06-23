import styles from './topbar.module.css'
import Image from 'next/image'
export default function Topbar() {
    return (
        <div className={styles.Container}>
            <div className={styles.label}>
                <h1>E<span className={styles.span}>COURSE</span></h1>
            </div>
            <div className={styles.Adddress}>
                <div className={styles.png}>
                <Image  src='/location.png' alt='locationicon' height={30} width={30}  />
                </div> 
                  <div className={styles.addDetails}>
                    <p  className={styles.parag}>Our Office</p>
                    <p className={styles.paragN}>123 street,New York,USA</p>
                </div>

            </div>
            <div className={styles.Adddress}>
            <div className={styles.png}>
                <Image  src='/mail.png' alt='locationicon' height={30} width={30}  />
                </div> 
                <div className={styles.addDetails}>
                    <p className={styles.parag}>Email Us</p>
                    <p className={styles.paragN}>mail@domain.com</p>
                </div>

            </div>
            <div className={styles.Adddress}>
            <div className={styles.png}>
          <div>  <i className="fa-solid fa-phone-flip"></i></div>
                </div> 
                <div className={styles.addDetails}>
                    <p  className={styles.parag}> Call Us</p>
                
                    <p className={styles.paragN}>+012 345 6789</p>
                </div>

            </div>
         </div>
    )
}