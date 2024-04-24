import React from "react";
import { A, Image, Paragraph, Section, Sheet, Title } from "./error-style";
import ERROR404 from "../../assets/img/ERROR404.png";

function Error() {
  return (
    <Section>
      <Sheet>
        <Title>No se pudo encontrar la página que solicitó</Title>
        <Image src={ERROR404} />
        <Paragraph>
          Buscamos alto y bajo, pero no pudimos encontrar lo que buscaba.
          Busquemos un lugar mejor para ir.
        </Paragraph>
        <A href="/" className="book-a-table-btn scrollto">
          Inicio de la Página
        </A>
      </Sheet>
    </Section>
  );
}

export default Error;
