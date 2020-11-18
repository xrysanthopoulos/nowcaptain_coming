import React, { useState } from "react"
import axios from "axios";

import logo_hat from './logo_hat_blue.svg';
import logo_text from './logo_text_blue.svg';
import hero_image from './hero_image.jpg';
import fb_icon from './facebook_icon_color.png';
import insta_icon from './instagram_icon_color.png';

import icon_blue from './favicon_blue.ico';
import icon_white from './favicon_white.ico';

import './App.scss';

import hero_video from './hero_video.mp4';

import { RiSendPlane2Fill } from 'react-icons/ri';
import { Helmet } from "react-helmet";

function App() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  let isDark = prefersDarkScheme.matches;

  const FormOk = () => {
    return (
      <>
        <div class="alert alert-primary" role="alert">
          Got this! You are one step closer.
            </div>
      </>
    )
  }

  const FormError = () => {
    return (
      <>
        <div class="alert alert-warning" role="alert">
          Oops.. Something went wrong with the sending form.
          </div>
      </>
    )
  }

  const [serverState, setServerState] = useState({
    submitting: null,
    status: null
  });
  const handleServerResponse = (ok, form) => {
    setServerState({
      submitting: null,
      status: ok,
      submited: true,
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true, submited: true });
    axios({
      method: "post",
      url: "https://getform.io/f/1db7a86a-0f42-4a2a-9570-fe7e7c12bc1b",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, form, true);
      })
      .catch(r => {
        handleServerResponse(false, form, true);
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NowCaptain - Explore the coastline!!</title>
        {isDark ? <link rel="icon" href={icon_white} id="light-scheme-icon" /> :
          <link rel="icon" href={icon_blue} id="dark-scheme-icon" />}
      </Helmet>
      <div className="App">
        <video autoPlay="autoplay" loop="loop" muted poster={hero_image}>
          <source src={hero_video} type="video/mp4" />
        </video>

        <div className="App-content">
          <img src={logo_hat} className="logo-hat" alt="logo" />
          <img src={logo_text} className="logo-text" alt="logo" />
          <p className="p-soon">Ahoy.. Coming Soon</p>
          <p className="paragraph">The App that gives you access to explore more coastline.</p>
          <div className="newsletter-form">
            <h5 className="newsletter d-block">Subscribe to our newsletter</h5>
            {serverState.submited ?
              <div className="alert">
                {serverState.status === true ? <FormOk /> : null}
                {serverState.status === false ? <FormError /> : null}
              </div>
              :
              <form className="form-inline contact-form" onSubmit={handleOnSubmit}>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" aria-describedby="emailHelp" id="exampleInputName" placeholder="Your email" required="required" />
                </div>
                <button type="submit" className="btn" disabled={serverState.submitting}>
                  <RiSendPlane2Fill size={20} />
                </button>
              </form>
            }
          </div>
          <div className="social">
            <p className="social-text">Follow <span className="blue-text">nowCaptain</span></p>
            <div className="row">
              <div className="col">
                <a href="https://www.facebook.com/nowCaptain" target="_blank">
                  <img className="social-icon float-right" src={fb_icon} />
                </a>
              </div>
              <div className="col">
                <a href="https://www.instagram.com/nowcaptain/" target="_blank">
                  <img className="social-icon float-left" src={insta_icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
