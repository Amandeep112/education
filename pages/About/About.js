import styles from './about.module.css'
import Image from 'next/image'
export default function About(){
    return(
   <div className={styles.container}>
    <div  className={styles.libimgcon}>
        <div>

     
        <Image className={styles.libimg } src='/img/about.jpg' height={400} width={400}  alt='library'/>
    </div>
    <div className={styles.content}>
      <div className={styles.smallheadingbox}>
        <h3>ABOUT US</h3>
      </div>
      <div className={styles.largeheadingbox}>
        <h1>
        Innovative Way To Learn
        </h1>
      </div>
      <div className={styles.parabox}>
        <p >
        Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo aliquyam ipsum stet
        </p>
      </div>
      <div >
        <button className={styles.btnbox}>Learn More</button>
      </div>
      </div>
    </div>

  </div>
    )
}