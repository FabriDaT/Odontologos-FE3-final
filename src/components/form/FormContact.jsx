import { useState } from "react";
import styles from './FormContact.module.css'
const FormContact = (props) => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensajeError, setMensajeError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (nombre.trim() === '') {
          setMensajeError('Debe ingresar un nombre')
        } else if (nombre.length <= 5) {
          setMensajeError('Debe ingresar un nombre mayor a 5 caracteres')
        } else {
          props.onSubmit({nombre})
          setNombre('')
          setEmail('')
          setMensajeError('')
        }
      }

    return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
    <div className={styles.formRow}>
    <div className="d-flex f-dir-colum">
      <input type="text" placeholder="Nombre Completo" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
      <br />
      <input className={styles.input} placeholder="Email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      <br />
    </div>
    </div>
    <button className={styles.btnForm} type="submit">Contactar</button>
    </form>
    {mensajeError && <p className={styles.error}>{mensajeError}</p>}
    </> );
}

export default FormContact;