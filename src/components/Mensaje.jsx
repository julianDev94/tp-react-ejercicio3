import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Mensaje = ({ valorMensaje }) => {
  const [msj, setMsj] = useState("");

  const mostrarMsj = () => {
    const valorMensaje2 = "(from changed state)";
    setMsj(valorMensaje2);
  };

  return (
    <section>
      <p className="fs-3 fw-bold">
        Hello {valorMensaje} {msj}
      </p>

      <Button variant="secondary" onClick={mostrarMsj}>
        Click me
      </Button>
    </section>
  );
};

export default Mensaje;
