import { useState } from "react";
import FormContact from "../components/form/FormContact";

function Contact() {

    const [mensajeExito, setMensajeExito] = useState('')

    const handleSubmit = (user) =>{
        setMensajeExito('Gracias '+ user.nombre +', te contactaremos cuanto antes vía mail')
    }

    return (
        <>
        <section className="section-contact">
            <h1>Contactanos</h1>
            <FormContact onSubmit={handleSubmit}/>
            {mensajeExito && <p className="msj-exito"><i className="fa-light fa-face-smile-wink"></i> {mensajeExito}</p>}
        </section>
        </>
     );
}

export default Contact;