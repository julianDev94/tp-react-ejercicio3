import React from 'react';
import { Button } from 'react-bootstrap';

const Mensaje = ({valorMensaje}) => {
    return (
        <section>
            <article>
            <p>Hello {valorMensaje}</p>
            </article>
            <Button></Button>
        </section>
    );
};

export default Mensaje;