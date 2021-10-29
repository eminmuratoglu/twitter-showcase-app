import React from 'react';

function LoadingSpinner() {
	return (
		<div className="d-flex justify-content-center align-items-center mt-5">
			<div className="spinner-border" style={{ height: '3rem', width: '3rem' }} role="status" />
		</div>
	);
}

export default LoadingSpinner;
