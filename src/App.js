import { useState, useEffect } from "react";

import Marquee from "react-fast-marquee";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMessage, MdEmail } from "react-icons/md";

import GridCard from "./components/GridCard";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";

import "./App.css";

function App() {
  const olympiadList = [
    "Maths Olympiad",
    "English Olympiad",
    "Grads Olympiad",
    "Finance Olympiad",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tick = () => setIndex((i) => (i + 1) % olympiadList.length);

    const id = setInterval(tick, 1500);
    return () => clearInterval(id);
  });

  return (
    <div className="App">
      <NavBar />

      <header>
        <h1>
          Feeling Prepared?
          <br />
          Register for{" "}
          <span className="shuffling-text">{olympiadList[index]}</span>
        </h1>
        <button>Register</button>
        <button>Schedule</button>
      </header>

      <div className="marquee">
        <Marquee>
          <p>Registration For 2021-22 Is Closing. Register Now</p>
          <br />
          <p>
            Springfield Olympiads Will Be Conducting Olympiads Online For the
            Year 2021-22
          </p>
          <br />
          <p>Schedule Of Olympiads Has Been Declared</p>
        </Marquee>
      </div>

      <GridCard />

      <div className="flex-institute">
        <div id="text">
          <h3>
            Register as an <span id="span-color">Institute</span>
          </h3>
          <p>
            Want to give a headstart to the students of your institute by
            providing them an exciting platform to test their knowledge and
            skills. Then, get your Institute registered with us now!
          </p>
          <button>Register Now!</button>
        </div>

        <div id="text">
          <h3>
            Register as a <span id="span-color">Coordinator</span>
          </h3>
          <p>
            Grab the opportunity and get a chance to work in the education
            sector with one of the renowned education service providers with the
            option to work full time or part time. Work as a mediator between
            education institutes and us and Earn a handsome amount of money by
            working at your convenience. Top coordinators will be given to work
            as full-time employees with good pay.
          </p>
          <button>Register Now!</button>
        </div>
      </div>

      <section id="about">
        <h3>About Springfield Olympiads</h3>
        <p>
          We, at Springfield Olympiads, provide one of the best Olympiad
          solutions for students and working professionals and students.
          Springfield Olympiads is an Educational Organization popularizing
          academic competition and assisting the development of competitive
          spirit among learners.
        </p>
        <button>Know More!</button>
      </section>

      <Reviews />

      <footer>
        <div className="footer-container">
          <div className="social-links">
            <FaFacebook className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaInstagram className="social-icon" />
            <div id="social-grid-text">Connect with us on social media!</div>
            <FaWhatsapp className="social-icon" />
            <MdEmail className="social-icon" />
            <MdMessage className="social-icon" />
          </div>

          <form id="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"></input>
            <br />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"></input>
            <br />

            <label htmlFor="msg">Message</label>
            <textarea id="msg" name="msg"></textarea>

            <button className="submit-button">Submit!</button>
          </form>
        </div>

        <div id="creator">
          <h4>
            Page created as an assignment. Source code hosted{" "}
            <a href="https://github.com/nobodyn0se/sfoly-clone">here</a>
          </h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
