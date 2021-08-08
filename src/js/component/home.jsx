import React, { Fragment, useState } from "react";
import Light from "./light.jsx";

const Home = () => {
	const [traficlight, setTraficlight] = useState({
		danger: true,
		warning: true,
		go: true
	});

	const changeColor = selectedLight => {
		if (selectedLight == "danger") {
			setTraficlight({ danger: true, warning: false, go: false });
		} else if (selectedLight == "warning") {
			setTraficlight({ warning: true, danger: false, go: false });
		} else if (selectedLight == "go") {
			setTraficlight({ go: true, danger: false, warning: false });
		}
	};

	return (
		<Fragment>
			<div className="box ">
				<Light
					colorLight="danger"
					changeLight={changeColor}
					statecolor={traficlight.danger}
				/>
				<Light
					colorLight="warning"
					changeLight={changeColor}
					statecolor={traficlight.warning}
				/>
				<Light
					colorLight="go"
					changeLight={changeColor}
					statecolor={traficlight.go}
				/>
			</div>
		</Fragment>
	);
};
export default Home;
