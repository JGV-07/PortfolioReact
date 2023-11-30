import "./App.css";
import { useState, useEffect, useRef } from "react";
import DarkMode from "./components/DarkMode";
import SpanishMode from "./components/SpanishMode";
import Typed from "typed.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeToDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isSpanishMode, setIsSpanishMode] = useState(false);

  const changeToSpanishMode = () => {
    setIsSpanishMode(!isSpanishMode);
  };

  const [currentTab, setCurrentTab] = useState("skills");

  const el = useRef(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const titles = [
      isSpanishMode ? "Desarrollador Full Stack" : "Full Stack Developer",
      isSpanishMode ? "Desarrollador Frontend" : "Frontend Developer",
      isSpanishMode ? "Desarrollador Backend" : "Backend Developer",
    ];

    const options = {
      strings: [titles[currentTitleIndex]],
      typeSpeed: 60,
      backSpeed: 25,
      backDelay: 900,
      startDelay: 1000,
      loop: true,
      showCursor: true,
    };

    const typed = new Typed(el.current, options);

    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => {
      typed.destroy();
      clearInterval(intervalId);
    };
  }, [isSpanishMode, currentTitleIndex]);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className={isSpanishMode ? "english-mode" : "spanish-mode"}>
        <div id="header">
          <div className="container">
            <nav>
              <img src="/logo.png" className="logo" alt="" />
              <ul className="header-nav">
                <li>
                  <SpanishMode
                    isSpanishMode={isSpanishMode}
                    onClick={changeToSpanishMode}
                  />
                </li>
                <li>
                  <DarkMode
                    isDarkMode={isDarkMode}
                    onClick={changeToDarkMode}
                  />
                </li>
                <li>
                  <a className="header-nav-text" href="#home">
                    {isSpanishMode ? "Inicio" : "Home"}
                  </a>
                </li>
                <li>
                  <a className="header-nav-text" href="#about">
                    {isSpanishMode ? "Sobre mi" : "About me"}
                  </a>
                </li>
                <li>
                  <a className="header-nav-text" href="#services">
                    {isSpanishMode ? "Habilidades" : "Skills"}
                  </a>
                </li>
                <li>
                  <a className="header-nav-text" href="#portfolio">
                    {isSpanishMode ? "Portafolio" : "Portfolio"}
                  </a>
                </li>
                <li>
                  <a className="header-nav-text" href="#contact">
                    {isSpanishMode ? "Contacto" : "Contact"}
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href={
                isSpanishMode
                  ? "/CV-HF.pdf"
                  : "/CV-HF-EN.pdf"
              }
              download
              target="_blank"
              className="btnh btn2 Cv_Head"
            >
              {isSpanishMode ? "Descarga mi CV" : "Download my CV"}
            </a>
            <div className="header-text">
              <p ref={el} />
              <h1>
                {isSpanishMode ? "Hola, soy" : "Hi, I'm "}
                <span> Jonathan</span>
                <br />
                Garcia {isSpanishMode ? "de Colombia" : "from Colombia"}
              </h1>
            </div>
          </div>
        </div>
        {/* ----------ABOUT---------- */}
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="about-col-1">
                <img src="/user.jpg" alt="" />
              </div>
              <div className="about-col-2">
                <h1 className="sub-title">
                  {isSpanishMode ? "Sobre mí" : "About Me"}
                </h1>
                <p className="sub-title-text">
                  {isSpanishMode
                    ? "Desarrollador FullStack graduado en Academlo y profesional en administración de empresas, con conocimientos en HTML5, CSS, JavaScript, Node.js, React, además, mis habilidades de atención al cliente y trabajo en equipo me permiten colaborar con otros profesionales en proyectos conjuntos. Estoy comprometido con mi crecimiento profesional y actualizado en las últimas tendencias del desarrollo web. Mi objetivo es aplicar mis habilidades técnicas de programación y mis conocimientos empresariales para contribuir en el éxito de proyectos y seguir creciendo en esta apasionante industria."
                    : "FullStack Developer graduated at Academlo and a seasoned professional in business administration, I bring a strong foundation in HTML5, CSS, JavaScript, Node.js, React, to the table. My background also includes exceptional customer service skills and a collaborative spirit, which enables me to work effectively in cross-functional teams. I'm dedicated to my professional growth and stay well-versed in the latest web development trends. My aim is to leverage my technical programming skills alongside my business acumen to drive project success and continue advancing in this dynamic industry."}
                </p>

                <div className="tab-titles">
                  <p
                    className={`tab-links ${
                      currentTab === "skills" ? "active-link" : ""
                    }`}
                    onClick={() => setCurrentTab("skills")}
                  >
                    {isSpanishMode ? "Habilidades" : "Skills"}
                  </p>
                  <p
                    className={`tab-links ${
                      currentTab === "experience" ? "active-link" : ""
                    }`}
                    onClick={() => setCurrentTab("experience")}
                  >
                    {isSpanishMode ? "Proyectos" : "Projects"}
                  </p>
                  <p
                    className={`tab-links ${
                      currentTab === "education" ? "active-link" : ""
                    }`}
                    onClick={() => setCurrentTab("education")}
                  >
                    {isSpanishMode ? "Estudios" : "Education"}
                  </p>
                </div>

                <div
                  className="tab-contents"
                  id="skills"
                  style={{
                    display: currentTab === "skills" ? "block" : "none",
                  }}
                >
                  <ul>
                    <li>
                      <span>
                        HTML / JavaScript /{" "}
                        {isSpanishMode ? "TypeScript" : "TypeScript Sorcery "}{" "}
                        ✨
                      </span>
                      <br />
                      {isSpanishMode
                        ? "Realizando interfaces encantadoras para Web y aplicaciones"
                        : "Weaving Enchanting Web and App Interfaces"}
                    </li>
                    <li>
                      <span>
                        {" "}
                        {isSpanishMode ? "Desarrollo Web" : "Web Wizardry"}🌐
                      </span>
                      <br />
                      {isSpanishMode
                        ? "Creando hipnóticos diseños UI/UX para Web y aplicaciones"
                        : "Crafting Mesmerizing UI/UX for Web and Apps"}
                    </li>
                    <li>
                      <span>
                        CSS / React / {isSpanishMode ? "GIT" : "GIT Mastery"} 🎨
                      </span>
                      <br />
                      {isSpanishMode
                        ? "Dando vida a los diseños con adaptabilidad responsiva y organizada con CSS"
                        : "Bringing Designs to Life with Responsive Magic and Flexbox Wizardry"}
                    </li>
                    <li>
                      <span>
                        {isSpanishMode ? "Ingles" : "English Enchantment"} 🌟
                      </span>
                      <br />
                      {isSpanishMode
                        ? "Escritura, escucha y lectura en ingles | B2"
                        : " Magic in Speaking, Reading, and Writing | B2 Level Sorcerer"}
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-contents"
                  id="experience"
                  style={{
                    display: currentTab === "experience" ? "block" : "none",
                  }}
                >
                  <ul>
                    <li>
                      <span>2023</span>
                      <br />
                      {isSpanishMode
                        ? "Liberando la magia de pokedex en la Web"
                        : "Unleashing the Magic of Pokedex on the Web"}{" "}
                      🌐
                    </li>
                    <li>
                      <span>2023</span>
                      <br />
                      {isSpanishMode
                        ? "App del clima: Donde cada nube tiene un lado positivo"
                        : "Weather App: Where Every Cloud Has a Silver Lining"}{" "}
                      ☁️
                    </li>
                    <li>
                      <span>2023</span>
                      <br />
                      {isSpanishMode
                        ? "Creando un maravilloso mundo de compras en línea"
                        : "Creating an Online Shopping Wonderland"}{" "}
                      🛍️
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-contents"
                  id="education"
                  style={{
                    display: currentTab === "education" ? "block" : "none",
                  }}
                >
                  <ul>
                    <li>
                      <span>2023</span>
                      <br />
                      {isSpanishMode
                        ? "Desarrollador Full Stack en Academlo"
                        : "Developer Full Stack at Academlo"}{" "}
                      🚀
                    </li>
                    <li>
                      <span>2023</span>
                      <br />
                      {isSpanishMode
                        ? "El Arte de HTML, TypeScript, GIT, CSS y JavaScript"
                        : "The Art of HTML, CSS, and JavaScript"}{" "}
                      🎨
                    </li>
                    <li>
                      <span>2020</span>
                      <br />
                      {isSpanishMode
                        ? "Profesional en Administración de Empresas"
                        : "Professional in Business Administration"}{" "}
                      📊
                    </li>
                    <li>
                      <span>2013</span>
                      <br />
                      {isSpanishMode
                        ? "Capturando la esencia de la vida fotografo profesional"
                        : "Capturing Life's Essence: Journey to Photography Excellence"}{" "}
                      📸
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------SERVICES---------- */}
        <div id="services">
          <div className="container">
            <h1 className="sub-title">
              {isSpanishMode ? "Habilidades" : "My Skills"}
            </h1>
            <div className="services-list">
              <div>
                <i className="fa fa-html5" aria-hidden="true"></i>
                <h2>HTML / JavaScript /</h2>
                <h2>TypeScript</h2>
                <p>
                  {isSpanishMode
                    ? "Potenciando paginas web y apps a través de innovaciones cautivadoras en HTML, JavaScript y TypeScript."
                    : " Empowering your digital presence through captivating HTML, JavaScript  and TypeScript innovations."}
                </p>
              </div>
              <div>
                <i className="fa-solid fa-code"></i>
                <h2>{isSpanishMode ? "Ingles" : "English"}</h2>
                <p>
                  {isSpanishMode
                    ? "Lectura, escritura, comprensión auditiva y expresión oral en inglés a un nivel B2."
                    : " Reading, writing, listening comprehension, and spoken, expression skills in English level B2."}
                </p>
              </div>
              <div>
                <i className="fa fa-css3" aria-hidden="true"></i>
                <h2>CSS / React / GIT</h2>
                <p>
                  {isSpanishMode
                    ? "Armonizando impresionantes elementos visuales y funcionalidad dinámica mediante las herramientas de CSS, React, Redux y GIT."
                    : "Harmonizing stunning visuals and dynamic functionality using CSS, React, and Redux symphonies."}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ----------PORTFOLIO--------- */}
        <div id="portfolio">
          <div className="container">
            <h1 className="sub-title">
              {isSpanishMode ? "Proyectos" : "Projects"}
            </h1>
            <div
              className={`work-list ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="work">
                <img src="/work-4.jpg" alt="" />
                <div className="layer">
                  <h2>Pokedex App</h2>
                  <p>
                    {isSpanishMode
                      ? "La Pokedex para todas tus necesidades Pokémon. Obtén acceso rápido a información completa sobre diferentes Pokemon, habilidades y más.."
                      : "Pokedex app for all your Pokémon needs. Get quick access to comprehensive information about different species, abilities, and more."}
                  </p>
                  <a
                    href="https://pokedexappjgv-07.netlify.app"
                    target="_blank"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="work">
                <img src="/work-6.jpg" alt="" />
                <div className="layer">
                  <h2>
                    {isSpanishMode ? "Rick y Morty App" : "Rick & Morty App"}
                  </h2>
                  <p>
                    {isSpanishMode
                      ? "Explora el multiverso con la pagina de Rick and Morty App. Sumérgete en los perfiles de personajes, episodios y momentos hilarantes del programa."
                      : "Explore the multiverse with our Rick and Morty app. Dive into character profiles, episodes, and hilarious moments from the show."}
                  </p>
                  <a
                    href="https://rickandmortyappjgv-07.netlify.app"
                    target="_blank"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="work">
                <img src="/work-7.jpg" alt="" />
                <div className="layer">
                  <h2>
                    {isSpanishMode ? "Tienda E-commerce" : "E-commerce Shop"}
                  </h2>
                  <p>
                    {isSpanishMode
                      ? "Adéntrate en el mundo de las compras en línea con nuestra pagina web de comercio electrónico. Explora, selecciona y compra tus productos favoritos de manera fluida."
                      : "Step into the world of online shopping with our E-commerce app. Browse, select, and purchase your favorite products seamlessly."}
                  </p>
                  <a
                    href="https://academloshopjgv-07.netlify.app/"
                    target="_blank"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="work">
                <img src="/work-5.jpg" alt="" />
                <div className="layer">
                  <h2>{isSpanishMode ? "App del clima" : "Weather App"}</h2>
                  <p>
                    {isSpanishMode
                      ? "Pagina web meteorológica, intuitiva pagina de pronóstico del tiempo. Te proporcionamos información actualizada sobre temperaturas, condiciones climáticas y más."
                      : "Weather app with our intuitive weather forecast application. We provide you with updated information on temperatures, weather conditions, and more."}
                  </p>
                  <a
                    href="https://weatherappjgv-07.netlify.app"
                    target="_blank"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="work">
                <img src="/work-8.jpg" alt="" />
                <div className="layer">
                  <h2>{isSpanishMode ? "App de usuarios" : "Users App"}</h2>
                  <p>
                    {isSpanishMode
                      ? "Descubre la pagina web de Usuarios, tu puerta de acceso para administrar información de usuarios de manera eficiente. Simplifica los datos de usuarios, perfiles e interacciones de manera eficaz."
                      : "Discover the Users app, your gateway to managing user information efficiently. Streamline user data, profiles, and interactions effortlessly."}
                  </p>
                  <a href="https://users-jgv-07.netlify.app" target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact">
          <div className="container">
            <div className="row">
              <div className="contact-left">
                <h1 className="sub-title">
                  {isSpanishMode ? "Contacto" : "Contact Me"}
                </h1>
                <p>
                  <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                  <a
                    className="mail_link"
                    href="mailto:garciavillegasjonathan@gmail.com"
                    target="_blank"
                  >
                    garciavillegasjonathan@gmail.com
                  </a>
                </p>
                <p>
                  <i className="fas fa-phone-square-alt"></i>
                  <a
                    className="wp_link"
                    href="https://wa.me/+573152595718"
                    target="_blank"
                  >
                    +57 315 259 5718
                  </a>
                </p>
                <div className="social-icons">
                  <a href="https://github.com/JGV-07" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/jgv07/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <a
                  href={
                    isSpanishMode
                      ? "/CV-HF.pdf"
                      : "/CV-HF-EN.pdf"
                  }
                  download
                  target="_blank"
                  className="btn btn2"
                >
                  {isSpanishMode ? "Descarga mi CV" : "Download my CV"}
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              {isSpanishMode
                ? "Todos los derechos reservados"
                : "All rights reserved"}{" "}
              ©
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
