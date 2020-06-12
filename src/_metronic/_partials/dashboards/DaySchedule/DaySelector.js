import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { dateFormat, htmlDecode, floatFormat, isLargerFile } from '.../../../src/_metronic/Util'
import { Link } from 'react-router-dom';


const WEEKDAYS_LONG = {
  mn: {
    1: 'Даваа ',
    2: 'Мягмар',
    3: 'Лхагва',
    4: 'Пүрэв',
    5: 'Баасан',
    6: 'Бямба',
    7: 'Ням',
  },

  en: {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  }
};

export default class DaySelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  render() {

    let dateObj = new Date();

    let datePickerTitle = dateFormat(new Date()) + ' ' + WEEKDAYS_LONG['mn'][dateObj.getDay()];

    let startDate = null, endDate = null;

    if (this.state.currentSeason) {
      startDate = new Date(this.state.currentSeason.startDate);
      endDate = new Date(this.state.currentSeason.endDate);
    }

    return (
      <div className="card-header">
        <a href="#" onClick={() => {
          let selectedDay = new Date();
          let selectedDate = new Date(selectedDay);
          selectedDate.setDate(selectedDate.getDate() - 1);
          this.handleDayChange(dateFormat(selectedDate));
        }}
          className="btn m-btn m-btn--icon m-btn--icon-only m-btn--pill">
          <i className="fa fa-angle-left">
          </i>
        </a>
        <DayPickerInput
          onDayChange={this.handleDayChange}
          value={this.state.selectedDay}
          hideOnDayClick={true}
          inputProps={{ readOnly: true }}
          placeholder={datePickerTitle}
          dayPickerProps={{
            disabledDays: startDate && endDate
              ? {
                before: new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()),
                after: new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate())
              }
              :
              {}
          }}
          classNames={{
            container: 'DayPickerInput input-pill-container myToday-DayPicker',
            overlay: 'DayPickerInput input-pill-container'
          }}
        />
        <a href="#" onClick={() => {
          let selectedDay = new Date();
          let selectedDate = new Date(selectedDay);
          selectedDate.setDate(selectedDate.getDate() + 1);
          this.handleDayChange(dateFormat(selectedDate));
        }} className="btn m-btn m-btn--icon m-btn--icon-only m-btn--pill">
          <i className="fa fa-angle-right">
          </i>
        </a>
      </div>
    )
  }
}
