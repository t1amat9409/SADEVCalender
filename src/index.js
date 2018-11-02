import React from "react";
import { render } from "react-dom";
import SADEVCalender from "./SADEVCalender";

const styles = {
	fontFamily: "sans-serif",
	textAlign: "center"
};

const App = () => (
	<div>
		<SADEVCalender />
	</div>
);

render(<App />, document.getElementById("root"));
