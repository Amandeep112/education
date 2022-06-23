import styles from './Signup.module.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react';
import Image from 'next/image';
export default function Signup() {
  const[Loader,setLoader]= useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()
    const options = [
        { id: "0", value: "", text: "...select" },
        { id: "1", value: "1", text: "A" },
        { id: "2", value: "2", text: "B" },
        { id: "3", value: "3", text: "C" },
        { id: "4", value: "4", text: "D" },
    ]
    const onSubmit = data => {
        setLoader(true)
        setTimeout(()=>
        {setLoader(false)},100)
        const fname = data.firstname
        const mail = data.email
        const group = data.category
        const formbody = {
            firstname: fname,
            email: mail,
            group: group,
        }
        console.log("firstname", formbody)
        fetch('/api/signupApi',
            {
                method: 'POST',
                body: JSON.stringify(formbody),
                headers: {
                    'content-type': 'jsondata/json'
                }
            }).then(res => res.json()).then(data => data)
    }
    return (

        <div className={styles.Container} >

            <Image className={styles.Imgage} src='/img/registration.jpg' height={468} width={1366} alt='image' />

            <div className={styles.conAndform}>
                <div className={styles.ContentContainer}>
                    <h5 className={styles.heading}>NEED ANY COURSES</h5>
                    <h2>30% Off For New Students</h2>
                    <p className={styles.paragraph}>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <ul className={styles.list}>
                        <li>
                            <i className="fa-solid fa-check"></i> <p>Labore eos amet dolor amet diam</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i><p>Etsea et sit dolor amet ipsum</p>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i><p>Diam dolor diam elitripsum vero.</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.Signupform}>
                    <div className={styles.headSignup}>
                        <h1>Sign Up Now</h1>
                    </div>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <input autoComplete='off' {...register('firstname', {
                            required: true, pattern: {
                                value: /^[A-Za-z]{3,15}$/i,
                                message: 'minimum charcter 3 and max 15'
                            },

                        })} placeholder="Firstname" />
                        <p>{errors.firstname?.message}</p>
                        <input type='email' autoComplete='off' {...register('email', {
                            required: true, minLength: {
                                value: 10,
                                message: 'Enter  valid format'
                            },

                        })} placeholder="Your email" />
                        <p>{errors.email?.message}</p>
                        <select className={styles.select} autoComplete='off'  {...register("category", { required: "this field is required" })}>
                            {options.map(opt => <option key={opt.id} value={opt.value}>{opt.text}</option>)}

                        </select>
                       {Loader && <i className="spinner-border text-secondary"></i>}
                        <input className={styles.submitbtn} type='Submit' value="Sign Up Now" />
                    </form>
                </div>

            </div>
        </div>

    )
}