import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { SeasonGradeMixedWidget } from "./SeasonGradeMixedWidget";

export default class SeasonGradeDashboard extends React.Component {
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
            <div className="card">
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
              <div className="row">
                <div className="col-sm-5 px-md-0">
                  <div className="p-3 shadow">
                    <div className="row">
                      <div className="col-sm-5 px-md-0 ">
                        <div className="p-3">
                          <SeasonGradeMixedWidget />
                        </div>
                      </div>
                      <div className="col-sm-7 px-md-3">
                        <div className="p-3 shadow ">
                          <div className="row">asdf</div>
                          <div className="row">asdf</div>
                          <div className="row">asdf</div>
                          <div className="row">asdf</div>
                          <div className="row">asdf</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 mt-3 shadow">fdfdfdf</div>
                  <div className="p-3 mt-3 shadow">fdfdfdf</div>
                  <div className="p-3 mt-3 shadow">fdfdfdf</div>
                </div>

                <div className="col-sm-7 px-md-3">
                  <div className="p-3 shadow">asdasass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
