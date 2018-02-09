import React, { Component } from 'react';

const Header = () => {
	return (
		<div className="container-fluid">
			<div className="row center no-margin-bot banner-image">
				<img src="https://i.imgur.com/NPqHt2yb.jpg" alt="author" className="author-showcase circle responsive-img z-depth-2" />
				<h1 className="banner-text no-margin-top">Terence Mangram</h1>
				<h3 className="banner-text">Bilingual Front-End Developer</h3>
			</div>
		</div>
	)
}

export default Header;