import React from "react";
import "./album.scss";
import bobrovAloneImg from "../../images/bobrov_alone.jpg";
import bobrovHappyImg from "../../images/bobrov_happy.jpg";
import Photo from "./Photo";

const Album = () => {
	return (
		<div className="container">
			<div >
				<div className="d-flex align-items-center justify-content-between">
					<div className="p-3">
						<div className="">
							<h3 className="album__text">
								До встречи с тобой моя жизнь была серой и пасмурной
							</h3>
						</div>
					</div>
					<div className="p-3">
						<Photo image={bobrovAloneImg} />
					</div>
				</div>
				<div className="d-flex align-items-center justify-content-between flex-row-reverse">
					<div className="">
						<h3 className="album__text">
							Но встретив тебя я стал счастливым !!!
						</h3>
					</div>
					<div className="p-3">
						<Photo image={bobrovHappyImg} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Album;
