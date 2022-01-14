import React from 'react';
import './TopBanner.css';
import Typewriter from "typewriter-effect";

const TopBanner = () => {
    return (
        <div id="homeBanner">
            <h3>
                <span
                    style={{}}>হ্যালো !
                </span>
                <span style={{ fontWeight: 'bolder', fontSize: '120%', color: '#F43F12' }}> tution</span>
                <span style={{ fontWeight: 'bolder', fontSize: '120%', color: '#29E46D' }}>sheba</span><span>-তে</span><br />
                <span>আপনাকে</span>
                <span style={{ color: '#29E46D' }}> স্বাগতম </span>


            </h3>
            <div style={{ fontSize: '200%', fontWeight: 'bold' }}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Providing Tution Services")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("All Over Bangladesh")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("দেশব্যাপী টিউশন সেবা")
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </div>
            <br />
            <a href="/" target="_blank" rel="noreferrer">
                <button type="button" className="btn" style={{ backgroundColor: '#29E46D', color: '#2A2B2B', fontWeight: 'bold' }}> I Need A Student</button><br /><br />
                <button type="button" className="btn" style={{ backgroundColor: '#F43F12', color: 'white', fontWeight: 'bold' }}> I Need A Teacher</button>
            </a>
        </div >
    );
};

export default TopBanner;