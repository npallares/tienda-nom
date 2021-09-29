import React from "react";
import zapas from "../../assets/images/zapas.jpg";
import remes from "../../assets/images/remes.jpg";
import campera from "../../assets/images/campera.jpg";
import { Link } from "react-router-dom";

const ListCategories = () => {
  return (
    <>
        <div className="listCategoriesComponent">

            
            <div className="card-container">
            <Link to={`/zapatillas`}>
                    <img src={zapas} alt="zapatillas" />
                    <div className="card-text-container">
                        <title>Zapatillas</title>
                        <p>NOM está de regreso en esta nueva<br /> temporada con lanzamientos impresionantes.<br /> ¡comprá ahora antes de que se acaben!</p>
                    </div>
            </Link>
            </div>

            <div className="card-container">
            <Link to={`/remeras`}>
                <img src={remes} alt="remeras" />
                <div className="card-text-container">
                    <title>Remeras</title>
                    <p>NOM está de regreso en esta nueva<br /> temporada con lanzamientos impresionantes.<br /> ¡comprá ahora antes de que se acaben!</p>
                </div>
            </Link>
            </div>

            <div className="card-container">
            <Link to={`/buzos`}>
                <img src={campera} alt="camperas" />
                <div className="card-text-container">
                    <title>Buzos</title>
                    <p>NOM está de regreso en esta nueva<br /> temporada con lanzamientos impresionantes.<br /> ¡comprá ahora antes de que se acaben!</p>
                </div>
            </Link>
            </div>

        </div>
    </>
  );
};

export default ListCategories;
