import React, { useState } from "react";
import HeartsRain from "./HeartsRain";
import "./love.scss";
import heartIc from "../../images/heart.png";

const GiveMeLove = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<div className="give-me-love p3-3">
				<div className="d-flex justify-content-center align-content-center">
					<div className="" onClick={() => setActive(true)}>
						<div className="blob">
							<img src={heartIc} className="love-button_gtm" alt="*" />
						</div>
					</div>
				</div>
			</div>
			{active ? <HeartsRain setActive={setActive} /> : null}
		</>
	);
};

export default GiveMeLove;
