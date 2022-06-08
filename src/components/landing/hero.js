import React from "react"

import Image from "../image"

import { Link } from "react-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container h-100">
        <div className="row h-100 justify-content-around">
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>
                Hi. I'm
                <br />
                Nazrul Islam (Nadeem)
              </h1>
              <p>
              
              <br/></p>
              <Link
                to="content"
                className="hero-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Learn stuff about me
              </Link>
            </div>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="mini_profile.png"
                      style={{ width: "5rem", height: "5rem" }}
                      alt=""
                    />
                  </div>
                  <h3 className="card-title">@nzldev</h3>
                  <h4>
                    <span role="img" aria-label="pin">
                      📍
                    </span>{" "}
                    Dhaka, Bangladesh <br />
                  </h4>
                  <p className="card-text">
                  Software Engineer, Open-Source Enthusiast
                  </p>
                  <ul className="list-group list-group-horizontal">
                  
                    <li className="list-group-item">
                      <a
                        href="https://github.com/nzldev"
                        target="_blank"
                        rel="noreferrer"
                        alt="Github button"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://www.linkedin.com/in/nzldev/"
                        target="_blank"
                        rel="noreferrer"
                        alt="LinkedIn button"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="mailto:nazrul.devs@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        alt="Email button"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                  </ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
