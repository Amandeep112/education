// import { useRouter } from "next/router"
import { buildpath, readData } from "../api/subjectdetails"
import Image from "next/image"
import styles from './subjectId.module.css'

export default function SubjectDetails(props) {
const {title,image,allCourses}=props.details
    //  const router=useRouter()
    //  const subjectId=router.query.SubjectId

    return (
      <div className={styles.container}>
      <div> <Image className={styles.img} src={image} alt='image' height={400} width={400}/></div> 
        <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.paragraph}><p>{allCourses}</p></div>
        </div>
      </div>
    )
}


export async function getStaticProps(context) {
    const { params } = context
    const subjectId = params.subjectId
    const filepath = buildpath()
    const data = readData(filepath)
    const subject = data.find(subject => subject.title === subjectId)
    return {
        props: {
            details: subject
        }
    }
}
export async function getStaticPaths() {
    return {
        paths: [{ params: { subjectId: '1' } },
        { params: { subjectId: '2' } },
        { params: { subjectId: '3' } },

        ], 
        fallback:true
    }
}