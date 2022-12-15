import React from "react";

//include images into your bundle
import rigoImage from "../../../img/rigo-baby.jpg";

import { FaHtml5 } from 'react-icons/fa';
import { MdAnchor } from 'react-icons/md';

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<p className="text-center">
				<i className="fa-brands fa-html5 fa-5x text-warning"></i>
				<FaHtml5 size={200} />
				<MdAnchor size={200} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
