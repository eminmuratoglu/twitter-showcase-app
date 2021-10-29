import React from 'react';

function Modal(props) {
	return (
		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content" style={{ backgroundColor: 'rgb(56, 61, 84)' }}>
					<div className="modal-body p-2">
						{props.children}
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
