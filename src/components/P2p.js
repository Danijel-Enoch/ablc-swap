import React from 'react'
import logo from "./assets/Logo.png";
import llight from "./images/logo-full-white.png";
import bnb from "./assets/bnb.png";
import busd from "./assets/busd.png";
import secure from "./images/secure1.png"
import "./assets/css/theme.css";
import "./assets/css/rtl.css";
import "./assets/css/style-azalea.css";
import "./assets/css/style-dark.css";
import "./assets/css/style-jasmine.css";
import "./assets/css/style-lavender.css";
import "./assets/css/style-lobelia.css";
import "./assets/css/style-lungwort.css";
import "./assets/css/style-muscari.css";
import "./assets/css/style-salvia.css";
import "./assets/css/style-zinnia.css";
import "./assets/css/style.css";
import "./assets/css/vendor.bundle.bs4.css";
import "./assets/css/vendor.bundle.css";
import "../assets/about.css";
import "./assets/css/swap-button.css"
import particlesConfig from "../assets/particlesConfig.json";
import Particle from "react-particles-js";
import { BUDDY } from "ci-info";
import "./bybarter/assets/css/site/site.min.css";
import "./bybarter/assets/fontawesome/css/all.min.css";

export default function P2p() {
    return (
        <>
            <div className="token-info token-info-s1" >
                <div className="token-info-item token-info-item-s1" >
                    <div className="token-info-item-list">
                        <div id="options">
                            <p className="buytext">Base Token</p>
                            <p className="btcamount">1ABLC =0.04 USD</p>
                            <div className="selin">
                                <input className="secin" placeholder="Enter Quantity" />
                                <select name="" id="list2" >
                                    <option value="">ABLC<img className="logodesign" src={logo} /></option>
                                </select>
                            </div>
                            {/* <span className="spandiv"><input className="inputdiv"  placeholder="Amount$"></input></span> */}

                            <p className="buytext">Quote Token</p>
                            <p className="btcamount usd">≅0 USD</p>
                            <div className="selin">
                                <input className="secin" placeholder="Enter Quantity" />
                                <select name="" id="list2" >
                                    <option value="">BUSD <img src={busd} /></option>
                                    <option value="">BNB<img src={bnb} /></option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <a className="menu-link nav-link" href="#overview">OrderBook</a>
                        </div>
                    </div>
                </div>
                <div className='pdb mg-btn'>
                    <button style={{
                        marginRight: 10
                    }} className="btns"  >BUY ORDER</button>
                    <button style={{
                        marginRight: 5
                    }} className="btns">SELL ORDER</button>
                </div>

            </div>

        </>
    )
}
