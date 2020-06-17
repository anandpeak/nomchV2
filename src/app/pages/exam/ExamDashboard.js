import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

import ExamDashboardMixedChart from "./ExamDashboardMixedChart.js";
import { ExamModalMixedWidget } from "./ExamModalMixedWidget";
import DataTable from "../../../_metronic/_partials/widgets/util/table/DataTable";
import ModalMain from "../../../_metronic/_partials/modal/ModalMain";
import TreeView from "../../../_metronic/_partials/widgets/util/tree/TreeView";

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

const treeData = [
  {
    key: 85,
    title: "2019-2020",
    children: [
      {
        key: 219,
        gradeId: 219,
        title: "Монгол хэл",
      },
      {
        key: 220,
        gradeId: 220,
        title: "Монгол хэл",
      },
      {
        key: 221,
        gradeId: 221,
        title: "Монгол хэл",
      },
      {
        key: 222,
        gradeId: 222,
        title: "Монгол хэл",
      },
      {
        key: 223,
        gradeId: 223,
        title: "Монгол хэл",
      },
      {
        key: 225,
        gradeId: 225,
        title: "Монгол хэл",
      },
      {
        key: 226,
        gradeId: 226,
        title: "Монгол хэл",
      },
      {
        key: 227,
        gradeId: 227,
        title: "Монгол хэл",
      },
      {
        key: 228,
        gradeId: 228,
        title: "Монгол хэл",
      },
      {
        key: 230,
        gradeId: 230,
        title: "1Монгол хэл",
      },
      {
        key: 231,
        gradeId: 231,
        title: "1Монгол хэл",
      },
      {
        key: 232,
        gradeId: 232,
        title: "1Монгол хэл",
      },
    ],
  },
];

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

export default class ExamDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
      showModel: false,
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

  renderModal(row, column) {
    console.log("column = ", row, "row =", column);
    this.setState({ showModel: true });
  }

  hideModal() {
    this.setState({ showModel: false });
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
              <div className="row">
                <div className="col-md-4 px-md-2">
                  <div className="p-3 shadow">
                    <TreeView treeDatas={treeData} />
                  </div>
                </div>
                <div className="col-md-8 px-md-2">
                  <div className="p-3 shadow">
                    <ExamDashboardMixedChart />
                  </div>
                  <div className="p-3 mt-3 shadow">
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
          {this.state.showModel && (
            <ModalMain
              title="hicheel"
              hideModal={this.hideModal}
              show={this.state.showModel}
            >
              <div className="row">
                <div className="col-md-2 px-md-0">
                  <div className="p-3 h-100 shadow">
                    <ExamModalMixedWidget />
                  </div>
                </div>
                <div className="col-md-4 px-md-2">
                  <div className="p-3 h-100 shadow">Custom column padding</div>
                </div>
                <div className="col-md-2 px-md-0">
                  <div className="p-3 h-100 shadow">Custom column padding</div>
                </div>
                <div className="col-md-4 px-md-2">
                  <div className="p-3 h-100 shadow">Custom column padding</div>
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
          )}
        </div>
      </div>
    );
  }
}
