import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className='container'>
        {/* <!-- details --> */}
        <section className='details'>
          <div className='left-details'>
            <abbr title='Hi, I am Soumik. A professional Video Editor & Film Maker'>
              <img src='./soumik.jpg' alt='' />
            </abbr>
          </div>

          <div className='right-details'>
            <h1 id='name'>Hi, it's Soumik</h1>
            <p id='job'>I'm Video Editor & Film Maker</p>
            <p id='about' className='text-base'>
              I'm Soumik, a visual storyteller. As a passionate freelance video editor with six months of hands-on
              experience, I've had the previllage of working with a variety of clients, creating cinematic visuals that
              tell compelling stories.{" "}
              <b className='text-cyan-200'>
                {" "}
                My expertise and interests lie in video editing, filmmaking, short films, documentaries, music videos,
                podcasts, and cinematic travel films.{" "}
              </b>
            </p>

            <a href='https://www.linkedin.com/in/soumik-basu-8a6135209/'>
              <button className='btn'>Hire Me</button>
            </a>
            <NavLink to={"/contact"}>
              <button className='btn ml-4'>Contact</button>
            </NavLink>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
