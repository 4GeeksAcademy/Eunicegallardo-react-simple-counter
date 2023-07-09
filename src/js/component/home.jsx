import React from "react"
import Proptypes from 'prop-types'
import { FaRegClock } from 'react-icons/fa'

//include images into your bundle
let timerStyle = {
	backgroundColor: '#9C86E5',
	color: "white"
}

//create your first component
const Home = (props) => {
	return (
		<div className="w-50 m-auto d-flex inline justify-content-center p-1" style={timerStyle}>
			<div className="clockBox display-3 p-3">
				<FaRegClock></FaRegClock>
			</div>
			<div className="boxSix display-1 m-2 p-1">{props.digitSix}</div>
			<div className="boxFive display-1 m-2 p-1">{props.digitFive}</div>
			<div className="boxFour display-1 m-2 p-1">{props.digitFour}</div>
			<div className="boxThree display-1 m-2 p-1">{props.digitThree}</div>
			<div className="boxTwo display-1 m-2 p-1">{props.digitTwo}</div>
			<div className="boxOne display-1 m-2 p-1">{props.digitOne}</div>
		</div>
	)
};
Home.prototypes = {
	digitSix: Proptypes.number,
	digitFive: Proptypes.number,
	digitFour: Proptypes.number,
	digitThree: Proptypes.number,
	digitTwo: Proptypes.number,
	digitOne: Proptypes.number
};
export default Home;
