import React from "react";
import { connect } from "react-redux";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { Link } from 'react-router-dom';

class HomeworkDashboard extends React.Component {
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
                  <Link target="_blank" to={`/homework/${lesson}`}>
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

const mapStateProps = (state) => {
  return {

  }
};

export default connect(mapStateProps)(HomeworkDashboard);
