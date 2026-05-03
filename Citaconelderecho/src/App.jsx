import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Carrusel from "./components/Carrusel"
import Img1 from "./assets/Img1.png"
import Mapa from "./assets/Mapa.png"
import RamaJudicial from "./assets/RamaJudicial.png"
import MapaSeccion from './components/MapaSeccion'

const App = () => {

    return (
    <>
        <div className='hero-section'>
            <Navbar></Navbar>
            <div className="hero-text">
                <div className='hero-fantasma'>
                    <h1 className='hero-text1'>Abogados en linea, Asesorias Juridicas y Solucion de Problemas legales</h1>
                    <h2 className='hero-subtext'>Bienvenidos al sistema virtual de citas con el Derecho</h2>
                    <a className='btn-hero1'><span>WhatsApp</span></a>
                    <a className='btn-hero2'><span>Llamar</span></a>
                    <a className='btn-hero3'><span>Precios</span></a>
                    <div className='pie-hero'>
                        <div>Abogados en Bogota, Medellin, Cali y Pasto</div>
                        <div>Contactanos: +57 318 633 7969</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='recomendaciones'><p>Empresas que confiaron en nosotros:</p></div>
        <Carrusel></Carrusel>


        <div className='exp'>
            <div className='exp-izq'>
                <div className='exp-izq1'><p>Un poderoso equipo con mas de 40 abogados profesionales a tu disposición, atención inmediata, cobertura nacional e internacional.</p></div>
                <div className='exp-izq2'><p>Más de 15 años de experiencia trabajando por su bienestar, tenemos los mejores profesionales en las distintas ramas del derecho, representamos y asesoramos a personas y empresas en defensa e interés de sus derechos, brindamos seguridad, bienestar, y precios justos.</p></div>
                <div className='exp-izq3'>
                    <div className='exp-izq-31'>
                        <p className='exp-title'>Opiniones</p>
                        <p className='exp-sub'>Nos caracterizamos por trabajar con amor, conoce lo que nuestros clientes dicen de nosotros</p>
                    </div>
                    <div className='exp-izq-32'>
                        <p className='exp-title'>Empresas</p>
                        <p className='exp-sub'>Nos adaptamos a sus necesidades y agregamos valor a las organizaciones.</p>
                    </div>
                </div>
            </div>
            <div>
                    <div className='exp-img'>
                        <img src={Img1}></img>
                    </div>
            </div>
        </div>

        <div className='mapa'>
            <img src={Mapa}></img>
        </div>

        <h2 className='esp'>Nuestras especialidades</h2>

        <div className='tabla'>
            <div className='module'>
                <p className='tabla-title'>Derecho de Familia</p>
                <p className='tabla-subtitle'>Divorcio, demanda de alimentos, disolucion, conciliaciones...</p>
            </div>
            <div className='module'>
                <p className='tabla-title'>Derecho Migratorio</p>
                <p className='tabla-subtitle'>Consulta hoy un abogado experto en migración, visas, reagrupación familiar...</p>
            </div>
            <div className='module'>
                <p className='tabla-title'>Acciones constitucionales</p>
                <p className='tabla-subtitle'>Mecanismos de protección ciudadana, tutelas, Acciones Populares, derechos de petición, reclamos...</p>
            </div>
            <div className='module'>
                <p className='tabla-title'>Seguridad social</p>
                <p className='tabla-subtitle'>Pensiones de vejez, invalidez y sobreviviente; Régimen de Prima Media y Régimen de Ahorro Individual</p>
            </div>
        </div>
        <div className='tabla'>
            <div className='module'>
                <p className='tabla-title'>Violencia intrafamiliar y sexual</p>
                <p className='tabla-subtitle'>Medidas de protección, Denuncia ante la fiscalía, estudio, liquidación de la sociedad conyugal</p>
            </div>
            <div className='module'>
                <p className='tabla-title'>Derecho disciplinario</p>
                <p className='tabla-subtitle'>Medidas de protección, Denuncia ante la fiscalía, estudio, liquidación de la sociedad conyugal</p>
            </div>
            <div className='module'>
                <p className='tabla-title'>Derecho laboral</p>
                <p className='tabla-subtitle'>Demandas por despido injustificado, revisión de contratos, obligaciones entre trabajadores y empleadores, protección al trabajador.</p>
            </div>
            <div className='module'>
                <p className='tabla-more'>VER TODAS LAS AREAS</p>
            </div>
        </div>
        <div className='resenas'>
            <div className='res'>
                <script src="https://elfsightcdn.com/platform.js" async></script>
                <div className="elfsight-app-b445ebe4-134b-4cb0-abe7-6423cbd1d27d" data-elfsight-app-lazy></div>
            </div>
        </div>

        <div className='section-3'>
            <div className='section-3-izq'>
                <p>Quedate seguro, somos profesionales</p>
                <span>Nuestra empresa tiene mas de 15 años de trayectoria atendiendo clientes a nivel local e internacional, mas de 2.500 usuarios felices, y un red de 40 abogados especializados, en toda Colombia, conoce todo lo que podemos hacer por ti.</span>
                <ul>
                    <li>Abogados expertos en migracion</li>
                    <li>Expertos en derecho internacional</li>
                    <li>Abogados expertos en familia</li>
                    <li>Abogados expertos en demandas de alimentos</li>
                    <li>Abogados expertos en Divorcios </li>
                    <li>Abogados expertos en Herencias</li>
                    <li>Abogados en derecho penal</li>
                    <li>Abogados expertos en control de garantias</li>
                    <li>Expertos en registro de marca</li>
                    <li>Abogados expertos en derecho administrativo</li>
                    <li>Abogados expertos en contabilidad</li>
                    <li>Abogados expertos en empresas</li>
                </ul>
            </div>
            <div className='section-3-der'>
                <img src={RamaJudicial}></img>
            </div>
        </div>
        <div className='section-4'>
                <div className='section-4-up'>
                    <h3>Mas de 15 firmas en 4 departamentos y mas de 40 abogados en linea en todo Colombia</h3>
                    <h2>¿Por qué elegirnos?</h2>
                </div>
                <div className='section-4-down'>
                    <div className='section-4-down1'>
                        <div className='bloq'>
                            <p>Proyecto humanizado</p>
                            <span>Comprendemos tu historia, te hablamos con honestidad y claridad en los procesos, atencion inmediata</span>
                        </div>
                        <div className='bloq'>
                            <p>Excelente desempeño</p>
                            <span>Respaldo y proteccion de una respetable firma juridica con buena reputacion ante el tribunal</span>
                        </div>
                        <div className='bloq'>
                            <p>Tarifas transparentes</p>
                            <span>Manejamos la mejor tarifa del mercado, si no te gusta lo que hacemos te devolvemos tu dinero</span>
                        </div>
                    </div>
                    <div className='section-4-down2'>
                        <div className='bloques'>
                            <div className='bl'>
                                <p>2500+</p>
                                <span>Asesorias legales</span>
                            </div>
                            <div className='bl'>
                                <p>96%</p>
                                <span>Casos exitosos</span>
                            </div>
                        </div>
                        <div className='bloques'>
                            <div className='bl'>
                                <p>40+</p>
                                <span>Abogados profesionales</span>
                            </div>
                            <div className='bl'>
                                <p>100%</p>
                                <span>Usuarios felices</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='section-5'>
            <p>Contactanos 24/7</p>
            <p>+57 318 633 7969</p>
            <p>Atencion al cliente</p>
            <button>Whatsapp</button>

        </div>
        <div>
            <MapaSeccion></MapaSeccion>
        </div>
    </>
    )
}

export default App