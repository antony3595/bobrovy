import React from "react";
import GiveMeLove from "./hearts/GiveMeLove";
import Album from "./album/Album";

const HomeView = () => {
	return (
		<div className="home-view">
			<Album />
			<GiveMeLove />
		</div>
	);
};

export default HomeView;
