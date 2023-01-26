import React, { useEffect, useRef, useState } from 'react'
import styles from './form.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'
import {useForm} from 'react-hook-form'
import Mindmap from '../Mindmap/Mindmap'
import Loading from '../Loading/Loading'
import {motion} from 'framer-motion'
import Input from '../Input/Input'


function Form() {
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    setIsValid(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if(isLoading){
    return(
      <Loading isLoading={isLoading} />
    )
  }

  if(!isValid){
    return (
    
      <motion.div transition={{ duration: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1}} className={styles.container}>
        <h1 className={styles.primary}>Welcome to <span className={styles.bold}>Museo Galileo</span></h1>
        <h2 className={styles.secondary}>Enjoy your visit to our museum</h2>
        <div className={styles.boldline}></div>
  
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >  
          <Input id="name" register={register} type="text" label="Visitor's Name" errors={errors} />
          <Input id="age" register={register} type="number" label="Visitor's Age" errors={errors} />
          <Input id="school" register={register} type="text" label="School Name" errors={errors} />
          <Input id="level" register={register} type="text" label="Educational Level" errors={errors} /> 
          <button className={styles.submitBtn} type="submit">Welcome</button>
  
        </form>
  
        <Image alt="Logo Vast" className={styles.logo} src={logo} width={188} height={64}></Image>
      </motion.div> 
    )

  }

  return (
    <Mindmap />
  )
  
}

export default Form