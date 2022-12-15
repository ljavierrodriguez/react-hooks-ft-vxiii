import React from "react";
import { FaHtml5 } from 'react-icons/fa';
import { MdAnchor } from 'react-icons/md';

import './About.css';

//create your first component
const About = () => {

    let style = {
        color: '#d3b51d',
        fontSize: '200px',
        boxShadow: '1px 2px 5px #cccccc'
    }

    return (
        <div className="text-center">
            <p className="text-center">
                <i className="fa-brands fa-html5 fa-5x text-warning"></i>
                <FaHtml5 size={200} style={{ color: '#d3b51d' }} />
                <MdAnchor size={200} className="yellow-anchor" style={style} />
            </p>
        </div>
    );
};

export default About;
