import { useEffect, useState } from "react";
// import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


import jsLanguageLogo from './assets/languages/javascript.svg';
import phpLanguageLogo from './assets/languages/php.svg';
import cssFrontEndLogo from './assets/frontend/css.svg';
import htmlFrontEndLogo from './assets/frontend/html.svg';
import reactFrontEndLogo from './assets/frontend/react.svg';
import tailwindFrontEndLogo from './assets/frontend/tailwind-css.svg';
import expressBackEndLogo from './assets/backend/express-js.svg';
import mysqlBackEndLogo from './assets/backend/mysql.svg';
import nodeBackEndLogo from './assets/backend/node-js.svg';
import xamppBackEndLogo from './assets/backend/xampp.svg';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setIsNavVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`overflow-hidden flex flex-col gap-0 justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <nav className={`flex flex-row justify-between items-center fixed top-0 left-0 right-0 z-50 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow transition-transform duration-300 `}
        >
          {/* ${isNavVisible ? 'translate-y-0' : '-translate-y-full'} */}
          <ul className='flex flex-row gap-3 items-center justify-center'>
            <li className={'cursor-pointer ' + `${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <Link
                to="intro"
                smooth={true}
                duration={500}
                activeClass="active-link p-2 w-[100px] rounded-md"
                spy={true}
                offset={-50}
                onSetActive={() => AOS.refresh()}
                onClick={() => AOS.refresh()}
              >
                Intro
              </Link>
            </li>
            <li className={'cursor-pointer ' + `${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                activeClass="active-link p-2 rounded-md"
                spy={true}
                offset={-50}
                onSetActive={() => AOS.refresh()}
                onClick={() => AOS.refresh()}
              >
                Skills
              </Link>
            </li>
            <li className={'cursor-pointer ' + `${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              <Link
                to="technologies"
                smooth={true}
                duration={500}
                activeClass="active-link p-2 rounded-md"
                spy={true}
                offset={-50}
                onSetActive={() => AOS.refresh()}
                onClick={() => AOS.refresh()}
              >
                Technologies
              </Link>
            </li>
          </ul>
          <button className={`p-2 rounded-full bg-${isDarkMode ? 'gray-600' : 'gray-300'} transition-colors duration-300`} onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className={`text-${isDarkMode ? 'yellow' : 'gray-800'}`} />
          </button>
        </nav>

        <section className="min-h-screen grid place-content-center mx-0 my-auto w-fit" id="intro" data-aos="fade-down">
          <div className="max-w-[568px]">
            <h1 className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Hello, my name is <i className={`text-teal-500 font-bold`}>Roald</i></h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Welcome to my portfolio! I specialize in building RESTful APIs and have extensive experience in full-stack development. Although my work has been primarily focused on local projects, feel free to explore my <a className="p-1 rounded-md bg-blue-500 text-white" href="https://github.com/Roald2000" target="_blank" rel="noreferrer">GitHub</a> repositories and clone them if you find them interesting!</p>
          </div>
        </section>

        <section className={`min-h-screen w-full grid place-content-center mx-0 my-auto relative ${isDarkMode ? 'bg-gray-800' : 'bg-blue-500 text-white'}`} id="skills" data-aos="fade-zoom-in">
          <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : ''}`}>Skills</h1>
          <div className="mx-6">
            <p>
              <strong className={`ml-2 text-lg ${isDarkMode ? 'text-white' : 'text-gray-300'}`}>Front End Development</strong>
            </p>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={htmlFrontEndLogo} className="w-16" alt="HTML" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>HTML</span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={cssFrontEndLogo} className="w-16" alt="CSS" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>CSS</span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={jsLanguageLogo} className="w-16" alt="JavaScript" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>JavaScript</span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={reactFrontEndLogo} className="w-16" alt="React JS" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>React JS</span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={tailwindFrontEndLogo} className="w-16" alt="Tailwind CSS" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Tailwind CSS</span>
              </div>
            </div>
          </div>
          <div className="mx-6 mt-8">
            <p>
              <strong className={`ml-2 text-lg ${isDarkMode ? 'text-white' : 'text-gray-300'}`}>Back End Development</strong>
            </p>
            <div className="grid grid-cols-5 gap-4 mt-4">
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-between`}>
                <img src={xamppBackEndLogo} className="w-16" alt="XAMPP" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>XAMPP</span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-between`}>
                <img src={mysqlBackEndLogo} className="w-16" alt="MySQL" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>MySQL </span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={nodeBackEndLogo} className="w-16" alt="Node.js" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Node.js</span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={expressBackEndLogo} className="w-16" alt="Express.js" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Express.js</span>
              </div>
              <div className={`bg-${isDarkMode ? 'gray-700' : 'white'} p-4 rounded-lg flex flex-col items-center justify-center`}>
                <img src={phpLanguageLogo} className="w-16" alt="HTML" />
                <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>PHP</span>
              </div>
            </div>
          </div>
        </section>



        <section className={`min-h-screen grid place-content-center mx-0 my-auto w-fit ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`} id="technologies" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <h1 className={`text-3xl text-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Technologies used in developing web apps/APIs</h1>
          <br />
          <div className="flex flex-row h-full w-full overflow-hidden">
            <div className="flex animate-marquee gap-3">
              <img src={jsLanguageLogo} className="w-[240px] no-drag" alt="" />
              <img src={phpLanguageLogo} className="w-[240px] no-drag" alt="" />
              <img src={cssFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={htmlFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={reactFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={tailwindFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={expressBackEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={mysqlBackEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={nodeBackEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={xamppBackEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={jsLanguageLogo} className="w-[240px] no-drag" alt="" />
              <img src={phpLanguageLogo} className="w-[240px] no-drag" alt="" />
              <img src={cssFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={htmlFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={reactFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={tailwindFrontEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={expressBackEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={mysqlBackEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={nodeBackEndLogo} className="w-[240px] no-drag" alt="" />
              <img src={xamppBackEndLogo} className="w-[240px] no-drag" alt="" />
            </div>
          </div>
        </section>

        <footer className={`p-2 my-3 rounded-md flex flex-row items-center justify-center bg-${isDarkMode ? 'gray-800' : 'gray-200'} text-${isDarkMode ? 'gray-300' : 'gray-800'}`}>
          <p>© 2023 Roald Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
