import React from 'react';

const Header = () => {
	return (
		<div className="container-fluid">
			<div className="row center no-margin-bot banner-image">
				<div className="col s2 offset-s3">
					<img src="https://i.imgur.com/NPqHt2yb.jpg" alt="author" className="author-showcase circle responsive-img z-depth-2" />
				</div>
				<div className="col s4">
					<h1 className="banner-text">Terence Mangram</h1>
					<h3 className="banner-text">Bilingual Front-End Developer</h3>
				</div>
			</div>
		</div>
	)
}

export default Header;