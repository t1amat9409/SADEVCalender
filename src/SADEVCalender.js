import React, { Component } from "react";
import "./SADEVCalender.css";

export default class SADEVCalender extends Component {
	constructor(props) {
		super(props);
		this.date = new Date();
		this.months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July ",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		this.state = {
			days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			current: {
				date: this.date.getDate(),
				year: this.date.getFullYear(),
				month: this.months[this.date.getMonth()],
				index: this.date.getMonth(),
				lastDay: this.getLastDay(
					this.date.getDate(),
					this.date.getMonth()
				)
			},
			dates: this.genDays(
				this.date.getFullYear(),
				this.date.getMonth() + 1
			)
		};
	}

	getLastDay(year, month) {
		var year = this.date.getFullYear();
		var date = new Date(year, this.date.getMonth() + 1, 0);
		return date.getDate();
	}

	prev(int) {
		if (this.state.current.index === 0) {
			var year = this.state.current.year - 1;
			this.setState({
				current: {
					date: this.date.getDate(),
					year: year,
					month: this.months[11],
					index: 11,
					lastDay: this.getLastDay(year, 12)
				},
				dates: this.genDays(year, 13)
			});
		} else {
			var year = this.state.current.year;
			this.setState({
				current: {
					date: this.date.getDate(),
					year: year,
					month: this.months[int],
					index: int,
					lastDay: this.getLastDay(year, int)
				},
				dates: this.genDays(year, int + 1)
			});
		}
	}

	next(int) {
		if (this.state.current.index === 11) {
			var year = this.state.current.year + 1;
			this.setState({
				current: {
					date: this.date.getDate(),
					year: year,
					month: this.months[0],
					index: 0,
					lastDay: this.getLastDay(year, 1)
				},
				dates: this.genDays(year, 2)
			});
		} else {
			var year = this.state.current.year;
			this.setState({
				current: {
					date: this.date.getDate(),
					year: year,
					month: this.months[int],
					index: int,
					lastDay: this.getLastDay(year, int)
				},
				dates: this.genDays(year, int + 1)
			});
		}
	}

	genDays(year, month) {
		var date = new Date(year, month, 0);
		var firstDay = new Date(year, month - 1, 1);
		var startDay = firstDay.getDay();
		const arr = [];
		for (let i = 0; i < date.getDate() + startDay; i++) {
			if (i < startDay) {
				arr.push({
					id: null,
					value: i
				});
			} else {
				arr.push({
					id: i,
					value: i - startDay
				});
			}
		}

		return arr;
	}

	render() {
		const days = this.state.dates;
		return (
			<div className="supotsu-cal">
				<div className="supotsu-cal-header">
					<i
						className="icon left"
						onClick={() => {
							this.prev(this.state.current.index - 1);
						}}
					/>
					<span>
						{this.state.current.month +
							", " +
							this.state.current.year}
					</span>
					<i
						className="icon right"
						onClick={() => {
							this.next(this.state.current.index + 1);
						}}
					/>
				</div>
				<div className="supotsu-cal-days">
					{this.state.days.map((item, i) => {
						return <span key={i}>{item}</span>;
					})}
				</div>
				<div className="supotsu-cal-dates">
					{days.map((item, i) => {
						return (
							<div
								key={i}
								className={item.id === null ? "past" : ""}
							>
								{item.id === null ? "-" : item.value + 1}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
