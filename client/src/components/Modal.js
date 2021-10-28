import React from 'react';

function Modal(props) {
	return (
		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					{/* <div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
						</div> */}
					<div className="modal-body p-2">
						{props.children}
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
					</div>
					{/* <div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div> */}
				</div>
			</div>
		</div>
	);
}

export default Modal;
