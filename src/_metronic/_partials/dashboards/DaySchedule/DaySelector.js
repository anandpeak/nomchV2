import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { dateFormat } from "../../../util/Util";

const WEEKDAYS_LONG = {
  mn: {
    1: "Даваа ",
    2: "Мягмар",
    3: "Лхагва",
    4: "Пүрэв",
    5: "Баасан",
    6: "Бямба",
    7: "Ням",
  },

  en: {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  },
};

export default class DaySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      datePickerTitle: null,
    };
  }

  componentDidMount() {
    const dateObj = new Date();

    let dayTxt;

    if (WEEKDAYS_LONG["mn"][dateObj.getDay()] === undefined) {
      dayTxt = "Ням";
    } else {
      dayTxt = WEEKDAYS_LONG["mn"][dateObj.getDay()];
    }

    this.setState({
      datePickerTitle: dateFormat(new Date()) + " " + dayTxt,
      selectedDay: new Date(),
    });
  }

  handleDayChange(day) {
    console.log("gg", day);

    const dateObj = new Date(day);

    let dayTxt;

    if (WEEKDAYS_LONG["mn"][dateObj.getDay()] === undefined) {
      dayTxt = "Ням";
    } else {
      dayTxt = WEEKDAYS_LONG["mn"][dateObj.getDay()];
    }

    this.setState({
      selectedDay: day,
      datePickerTitle: dateFormat(new Date(day)) + " " + dayTxt,
    });
  }

  render() {
    const { datePickerTitle } = this.state;

    return (
      <div className="card-header">
        <i
          className="fa fa-angle-left"
          onClick={() => {
            let selectedDay = this.state.selectedDay
              .toString()
              .substring(0, 15);
            let selectedDate = new Date(selectedDay);
            selectedDate.setDate(selectedDate.getDate() - 1);
            this.handleDayChange(dateFormat(selectedDate));
          }}
        ></i>

        <DayPickerInput
          onDayChange={this.handleDayChange}
          hideOnDayClick={true}
          inputProps={{ readOnly: true }}
          placeholder={datePickerTitle}
          classNames={{
            container: "DayPickerInput input-pill-container myToday-DayPicker",
            overlay: "DayPickerInput input-pill-container",
          }}
        />
        
        <i
          className="fa fa-angle-right"
          onClick={() => {
            let selectedDay = this.state.selectedDay
              .toString()
              .substring(0, 15);
            let selectedDate = new Date(selectedDay);
            selectedDate.setDate(selectedDate.getDate() + 1);
            this.handleDayChange(dateFormat(selectedDate));
          }}
        ></i>
      </div>
    );
  }
}
