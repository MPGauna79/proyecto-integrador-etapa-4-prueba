import React from "react";
import useTitulo from "../hooks/useTitulo";
import "./Nosotros.scss";

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <>
    <div className="nosotros-body__div">  
    <h1 className="nosotros-body__h1">Quienes somos</h1>

    <h2 className="nosotros-body__h2">La mirada puesta en el futuro</h2>

    <p className="nosotros-body__p"> 
    <img className="nosotros-body__img" src="/public/img/tecno empresa.jpg"/> 
    Somos el deseo constante por la innovación, búsqueda de experiencias que conectan personas. Intentamos llegar a lo más profundo del universo tecnológico para que no te pierdas absolutamente nada de la era digital. Con más de 10 años de trayectoria en el mercado, nos dedicamos a la importación, distribución y venta de productos electrónicos.
    
    Tenemos un claro compromiso, satisfacer las demandas de nuestros clientes más exigentes, resolviéndolas de una forma fácil y simple, garantizando que la experiencia de compra sea la mejor del mercado. Ofrecemos excelentes precios a nuestros clientes y todos nuestros productos cuentan con garantía, así el consumidor puede comprar con seguridad.
    
    Los valores que rigen nuestra actividad diaria, se basan en transparencia, calidad y compromiso con nuestros clientes.
    </p>
    </div>
    </>
  );
};

export default Nosotros;