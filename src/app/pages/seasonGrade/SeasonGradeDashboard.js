import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { SeasonGradeMixedWidget } from "./SeasonGradeMixedWidget";
import SeasonGradeMixedChart from "./SeasonGradeMixedChart";
import DataTable from "../../../_metronic/_partials/widgets/util/table/DataTable";
import ModalMain from "../../../_metronic/_partials/modal/ModalMain";
import { SeasonGradeModalWidget } from "./SeasonGradeModalWidget";

const columns = [
  {
    key: "id",
    text: "№",
    align: "center",
    width: 50,
    sortable: false,
  },
  {
    key: "status",
    text: "Төлөв",
    sortable: false,
    align: "center",
    clickableTd: true,
    tdClassName: "underline",
  },
  {
    key: "score",
    text: "Оноо",
    align: "left",
    sortable: true,
  },
  {
    key: "checked_date",
    text: "Шалгасан огноо",
    align: "left",
    sortable: true,
  },
  {
    key: "checked_teacher",
    text: "Шалгасан багш",
    align: "right",
    clickableTd: true,
    tdClassName: "underline",
    sortable: true,
  },
  {
    key: "description",
    text: "Тайлбар",
    sortable: true,
    align: "left",
  },
];

const config = {
  show_all: true,
  show_info: false,
  show_pagination: false,
  dynamic: false,
  show_filter: false,
  sort: {
    column: "createdDate",
    order: "DESC",
  },
  excelFileName: "Excel",
};

const records = [
  {
    id: 2434,
    checked_date: "M01",
    clickable: true,
    status: "Амгаланбат",
    score: "Баатар",
    checked_teacher: "null",
    description: "null",
  },
  {
    id: 2435,
    checked_date: "M01",
    status: "Амгаланбат",
    score: "Баатар",
    checked_teacher: "null",
    description: "null",
  },

  {
    id: 2436,
    checked_date: "M01",
    status: "Амгаланбат",
    score: "Баатар",
    checked_teacher: "null",
    description: "null",
  },
];

export default class SeasonGradeDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
      showModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ tabValue: newValue });
  }

  renderTabs() {
    const rows = ["1-р улирал", "2-р улирал"];
    let tabRows = rows.map((row) => <Tab label={<span>{row}</span>} />);

    return tabRows;
  }

  renderModal() {
    this.setState({ showModal: true });
  }
  hideModal() {
    this.setState({ showModal: false });
  }

  render() {
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
                <div className="col-md-4 px-md-0">
                  <div className="p-3 shadow-sm">
                    <div className="row">
                      <div className="col-md-5 px-md-0 ">
                        <div className="p-3">
                          <SeasonGradeMixedWidget />
                        </div>
                      </div>
                      <div className="col-md-7 seasonGradeWidgetTxt px-md-3">
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Гүйцэтгэл
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              87
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Чанар
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Чанар
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Чанар
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5">
                            <span className="seasonGradeWidgetTxtKey">
                              Чанар
                            </span>
                          </div>
                          <div className="seasonGradeWidgetTxtValue">
                            <span className="seasonGradeWidgetTxtValue">
                              34-35 | 67
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 mt-3 shadow-sm">
                    <span>
                      <b>A</b> Үнэлгээтэй хичээл <b>7</b>
                    </span>
                  </div>
                  <div className="p-2 mt-3 shadow-sm">
                    <span>
                      <b>A</b> Үнэлгээтэй хичээл <b>7</b>
                    </span>
                  </div>
                  <div className="p-2 mt-3 shadow-sm">
                    <span>
                      <b>A</b> Үнэлгээтэй хичээл <b>7</b>
                    </span>
                  </div>
                </div>
                <div className="col-md-8 px-md-3">
                  <div className="p-3 shadow-sm">
                    <SeasonGradeMixedChart />
                  </div>
                  <div className="p-3 mt-3 shadow-sm">
                    <DataTable
                      className="table table-bordered"
                      config={config}
                      records={records}
                      columns={columns}
                      tdClick={this.renderModal}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalMain
            title="1r uliral, lessName"
            hideModal={this.hideModal}
            show={this.state.showModal}
          >
            <div className="row shadow">
              <div className="col-md-2 seasonGradeModalWidget px-md-0">
                <div className="p-3 h-100">
                  <SeasonGradeModalWidget />
                </div>
              </div>
              <div className="col-md-7 seasonGradeModalGroup px-md-2">
                <div class="row">
                  <div class="col-md-12">
                    <ul class="seasonGrade-list-group">
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                      <li class="row">
                        <span className="col-md seasonGradeList-group-key">Хичээл</span>
                        <span className="col-md seasonGradeList-group-value">Математик</span>
                      </li>
                    
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-5 shadow mt-5">
                <DataTable
                  className="table table-bordered"
                  config={config}
                  records={records}
                  columns={columns}
                  tdClick={this.renderModal}
                />
              </div>
            </div>
          </ModalMain>
        </div>
      </div>
    );
  }
}
