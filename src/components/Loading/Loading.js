import React from 'react';

const loading = (props) => {
	return (
		<div className="card-panel center"><br/>
			<div className="preloader-wrapper active">
				<div className="spinner-layer spinner-red-only">
					<div className="circle-clipper left">
						<div className="circle"></div>
					</div><div className="gap-patch">
						<div className="circle"></div>
					</div><div className="circle-clipper right">
						<div className="circle"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default loading;