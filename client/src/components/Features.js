import React from 'react';
import './Features.css';

function Features(props) {
	return <h4 className="feature">{props.children}</h4>;
}

export default Features;
