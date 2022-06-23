import { buildPath, getdata } from "../api/hello"
import styles from './subject.module.css'
import Image from "next/image";
import {useEffect} from 'react'
import Link from "next/link";
import { db } from "../Firebase/firebase";
import { collection,getDoc,doc,onSnapshot } from "firebase/firestore";
 
 
export default function subjects(props) {
  // console.log('=>', props.feedback);
  
  onSnapshot(collection(db,'Subject_data'),(onSnapshot)=> 
    console.log(onSnapshot)
  )
 
 
  return (<div className={styles.layout}>
    <div ><h4> SUBJECTS</h4></div>
    <div><h1> Explore Top Subjects</h1></div>
    <div className={styles.container}>
      {props.feedback.map(item => <div className={styles.subCon} key={item.id} >
        <Link href={`/Subjects/${item.title}`} >
          <a> <div className={styles.imageCon}>
            <Image className={styles.Image} src={item.image} height={150} width={250} alt='images' />
          </div></a></Link>
        <div className={styles.content}>
          <p className={styles.heading}> {item.title}</p>
          <p className={styles.paragraph}>{item.allCourses}</p>
        </div>
      </div>)}
    </div>
  </div>
  )

}

export async function getStaticProps() {
  const filepath = buildPath()
  const data = getdata(filepath)
  return {
    props: {
      feedback: data
    },
  }
}
