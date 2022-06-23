import Image from 'next/image'
import styles from './banner.module.css'
export default function banner() {


    return (
         <div className={styles.container}  >
            <Image className={styles.Image} src='/img/carousel-2.jpg' height={600} width={1400} alt='Bannerimg' />
            <div className={styles.banner} >    
              <p className={styles.titlesmall}>BEST ONLINE COURSES</p>
              <p className={styles.titleLarge}>Best Online Learning <br></br>Platform</p>
             <div><button className={styles.learnMore}>Learn More</button></div> 
         </div>
         </div>
            )
            }