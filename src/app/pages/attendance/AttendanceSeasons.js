import React from "react";

import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default class AttendanceSeasons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  renderTabs() {
    const rows = ["1-р улирал", "2-р улирал"];
    let tabRows = rows.map((row) => <Tab label={<span>{row}</span>} />);

    return tabRows;
  }

  render() {
    const lessons = ["Монгол хэл", "Математик", "Түүх"];

    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="custom-card-body">
              <Tabs
                value={this.state.tabValue}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="secondary"
              >
                {this.renderTabs()}
              </Tabs>
            </div>
            <div className="card-body">
              {lessons.map((lesson) => (
                <div>
                  <Link target="_blank" to={`/attendance/${lesson}`}>
                    <span>{lesson}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
