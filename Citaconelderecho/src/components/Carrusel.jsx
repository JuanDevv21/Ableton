import React from "react";
import { useState } from "react";
import "./Carrusel.css"
import RCN from "../assets/RCN.png"
import LG from "../assets/LG.png"
import VNVD from "../assets/VNVD.png"
import X2 from "../assets/X2.png"
import EBANISTERIA from "../assets/EBANISTERIA.png"
import CORFODELI from "../assets/CORFODELI.png"

const Carrusel = () => {
    const [pagina, setPagina] = useState(0);

    const imagenes = [
        { id: 1, src: RCN, text: "RCN" },
        { id: 2, src: LG, text: "LG" },
        { id: 3, src: VNVD, text: "VNVD" },
        { id: 4, src: X2, text: "X2" },
        { id: 5, src: EBANISTERIA, text: "EBANISTERIA" },
        { id: 6, src: CORFODELI, text: "CORFODELI" },
    ];

    return (
        <section className="carrusel-ventana">
            <div className="carrusel-tira" style={{ transform: `translateX(-${pagina * 50}%)` }}>
                
                <div className="carrusel-pagina">
                    {imagenes.slice(0, 3).map(img => (
                        <figure key={img.id} className="carrusel-item">
                            <img src={img.src} alt={img.text} />
                        </figure>
                    ))}
                </div>

                <div className="carrusel-pagina">
                    {imagenes.slice(3, 6).map(img => (
                        <figure key={img.id} className="carrusel-item">
                            <img src={img.src} alt={img.text} />
                        </figure>
                    ))}
                </div>
                
            </div>

            <div className="controles">
                <button onClick={() => setPagina(0)} disabled={pagina === 0}>❮</button>
                <button onClick={() => setPagina(1)} disabled={pagina === 1}>❯</button>
            </div>
        </section>
    );
}

export default Carrusel;