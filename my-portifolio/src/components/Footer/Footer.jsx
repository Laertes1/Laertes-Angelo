import React from "react";
import "./Fotter.css";
/*----Buttons----*/
import GitHubIcon from "../Buttons/GitHubIcon/GitHubIcon";
import LinkedinIcon from "../Buttons/LinkedinIcon/LinkedinIcon";
import Email from "../Buttons/Email/Email";
/*-----Icons----*/
import ArrowUp from "../../assets/icons/noBackGround/Icon=arrow-up, Theme=dark, State=default.svg";
/*-----React Scroll-----*/
import { Element } from "react-scroll";
/*------React Link------*/
import { Link } from "react-router-dom";

export default function Footer() {
  /*----Scrollar Para Cima-----*/
  const scroolToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  };
  // React Scroll
const Scroll = require("react-scroll");
const ScrollLink = Scroll.Link;
  return (
    <>
      <Element className="footer" name="Footer">
        <section className="footer-container1">
          <div className="footer-container1-box1">
            <h5 className="footer-container1-box1-title">Vamos nos conectar</h5>
            <p className="footer-container1-box1-paragraph">
            Envie-me um e-mail para conversar sobre trabalho ou apenas diga "oi"{" "}
            </p>
          </div>
          <div className="footer-container1-box2">
            <span className="footer-container1-box2-buttons">
              <GitHubIcon />
              <LinkedinIcon />
              

                <Link to="/">
                <Email />
                </Link>
                
            </span>
            <span
              className="footer-container1-box2-backToTop"
              onClick={scroolToTop}
            >
              <p className="footer-container1-box2-backToTop-paragraph">
                Voltar para o topo
              </p>
              <img
                src={ArrowUp}
                alt=""
                className="footer-container1-box2-backToTop-arrowDown"
              />
            </span>
          </div>
        </section>
        <section className="footer-container2">
          <p className="footer-container2-paragraph">
            © Criado por Laertes Angelo 💜{" "}
          </p>
        </section>
      </Element>
    </>
  );
}
