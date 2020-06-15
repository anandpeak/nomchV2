import React, { Component, Fragment } from "react";

import _ from "lodash";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { Checkbox, Form, Radio, Input } from "semantic-ui-react";
import InlineEdit from "../inline_edit/InlineEdit";
import ReactTooltip from "react-tooltip";
import { translations } from "../../../util/translations";
import { priceFormat } from "../../../util/Util";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import upArrow from "./up_sort.png";
import downArrow from "./down_sort.png";
import noArrow from "./no_sort.png";

let style = {
  table_body: {
    marginTop: "16px",
  },
  table_size: {
    background: "none",
    border: "none",
    padding: 0,
  },
  table_size_dropdown: {
    width: "70px",
    flex: "none",
    margin: "0px 10px",
    display: "inline-block",
    float: "none",
  },
  table_filter: {
    display: "inline-block",
    verticalAlign: "top",
    marginRight: "5px",
    width: "250px",
  },
  table_tool: {
    display: "inline-block",
    verticalAlign: "top",
  },
  table_tool_btn: {
    marginRight: "5px",
  },
  sort_asc: {
    backgroundImage: `url(${upArrow})`,
  },
  sort_desc: {
    backgroundImage: `url(${downArrow})`,
  },
  no_sort: {
    backgroundImage: `url(${noArrow})`,
  },
};

class ReactDatatable extends Component {
  constructor(props) {
    super(props);
    this.exportExcelRef = React.createRef();
    this.sortColumn = this.sortColumn.bind(this);
    this.numPages = this.numPages.bind(this);
    this.exportToExcel = this.exportToExcel.bind(this);
    this.exportToPDF = this.exportToPDF.bind(this);
    this.exportToCSV = this.exportToCSV.bind(this);
    this.onChange = this.onChange.bind(this);
    this.filterRecords = this.filterRecords.bind(this);
    this.filterData = this.filterData.bind(this);
    this.hexToRgb = this.hexToRgb.bind(this);
    this.config = {
      button: {
        excel:
          props.config && props.config.button && props.config.button.excel
            ? props.config.button.excel
            : false,
        homeworkReportExcel:
          props.config &&
          props.config.button &&
          props.config.button.homeworkReportExcel
            ? props.config.button.homeworkReportExcel
            : false,
        print:
          props.config && props.config.button && props.config.button.print
            ? props.config.button.print
            : false,
        csv:
          props.config && props.config.button && props.config.button.csv
            ? props.config.button.csv
            : false,
      },
      filename:
        props.config && props.config.filename ? props.config.filename : "table",
      language: {
        length_menu:
          props.config &&
          props.config.language &&
          props.config.language.length_menu
            ? props.config.language.length_menu
            : "_MENU_",
        filter:
          props.config && props.config.language && props.config.language.filter
            ? props.config.language.filter
            : translations(props.locale).search || "",
        info:
          props.config && props.config.language && props.config.language.info
            ? props.config.language.info
            : "Нийт _TOTAL_ илэрцийн _START_-с _END_-г харуулж байна",
        pagination: {
          first:
            props.config &&
            props.config.language &&
            props.config.language.pagination &&
            props.config.language.pagination.first
              ? props.config.language.pagination.first
              : '<i className="la la-angle-left"></i>',
          previous:
            props.config &&
            props.config.language &&
            props.config.language.pagination &&
            props.config.language.pagination.previous
              ? props.config.language.pagination.previous
              : '<i className="la la-angle-left"></i>',
          next:
            props.config &&
            props.config.language &&
            props.config.language.pagination &&
            props.config.language.pagination.next
              ? props.config.language.pagination.next
              : '<i className="la la-angle-right"></i>',
          last:
            props.config &&
            props.config.language &&
            props.config.language.pagination &&
            props.config.language.pagination.last
              ? props.config.language.pagination.last
              : '<i className="la la-angle-right"></i>',
        },
      },
      length_menu:
        props.config && props.config.length_menu
          ? props.config.length_menu
          : [10, 25, 50, 75, 100],
      no_data_text:
        props.config && props.config.no_data_text
          ? props.config.no_data_text
          : translations(props.locale).empty || "",
      show_length_menu:
        props.config.show_length_menu != undefined
          ? props.config.show_length_menu
          : true,
      show_filter:
        props.config.show_filter != undefined ? props.config.show_filter : true,
      show_pagination:
        props.config.show_pagination != undefined
          ? props.config.show_pagination
          : true,
      show_info:
        props.config.show_info != undefined ? props.config.show_info : true,
      show_first:
        props.config.show_first != undefined ? props.config.show_first : true,
      show_last:
        props.config.show_last != undefined ? props.config.show_last : true,
      show_all:
        props.config.show_all != undefined ? props.config.show_all : false,
      show_footer:
        props.config.show_footer != undefined
          ? props.config.show_footer
          : false,
    };

    this.state = {
      filter_value: "",
      page_size:
        props.config.show_all && props.records.length > 0
          ? props.records.length
          : props.config.page_size
          ? props.config.page_size
          : 10,
      page_number: 1,
      sort:
        props.config && props.config.sort
          ? props.config.sort
          : {
              column: props.columns[0].key,
              order: "asc",
            },
      contextMenuId: props.contextMenuId || null,
      contextMenus: props.contextMenus || [],
      radioOptions: props.radioOptions || null,
      locale: props.locale,
    };

    this.inputRefs = [];
  }

  componentDidUpdate() {
    if (
      this.config.show_all &&
      this.state.page_size < this.props.records.length
    ) {
      this.setState({
        page_size: this.props.records.length,
      });
    }
    if (this.state.contextMenuId !== this.props.contextMenuId) {
      this.setState({
        contextMenuId: this.props.contextMenuId,
      });
    }
    if (this.state.contextMenus !== this.props.contextMenus) {
      this.setState({
        contextMenus: this.props.contextMenus,
      });
    }

    if (this.state.locale !== this.props.locale) {
      this.setState({
        locale: this.props.locale,
      });
    }
    if (this.state.sort !== this.props.config.sort) {
      this.setState({
        sort: this.props.config.sort,
      });
    }
  }

  filterRecords(e) {
    let value = e.target.value;
    this.setState(
      {
        filter_value: value,
      },
      () => {
        this.onChange();
      }
    );
  }

  changePageSize(e) {
    let value = e.target.value;
    this.setState(
      {
        page_size: value,
      },
      () => {
        this.onChange();
      }
    );
  }

  sortColumn(column, sortOrder) {
    if (!column.sortable) return false;

    let newSortOrder = sortOrder == "asc" ? "desc" : "asc";
    this.setState(
      {
        sort: { column: column.key, order: newSortOrder },
      },
      () => {
        this.onChange();
      }
    );
  }

  paginate(records) {
    let page_size = this.state.page_size;
    let page_number = this.state.page_number;
    --page_number; // because pages logically start with 1, but technically with 0
    return records.slice(
      page_number * page_size,
      (page_number + 1) * page_size
    );
  }

  numPages(totalRecord) {
    return Math.ceil(totalRecord / this.state.page_size);
  }

  previousPage(e) {
    e.preventDefault();
    let nextPage = this.state.page_number - 1,
      pageState = {
        previous_page: this.state.page_number,
        current_page: nextPage,
      };
    if (this.isFirst()) return false;
    this.setState(
      {
        page_number: nextPage,
      },
      () => {
        this.props.onPageChange(pageState);
        this.onChange();
      }
    );
  }

  nextPage(e) {
    e.preventDefault();
    let nextPage = this.state.page_number + 1,
      pageState = {
        previous_page: this.state.page_number,
        current_page: nextPage,
      };
    if (this.isLast()) return false;
    this.setState(
      {
        page_number: nextPage,
      },
      () => {
        this.props.onPageChange(pageState);
        this.onChange();
      }
    );
  }

  firstPage(e) {
    e.preventDefault();
    let pageState = {
      previous_page: this.state.page_number,
      current_page: 1,
    };
    if (this.isFirst()) return false;
    this.setState(
      {
        page_number: 1,
      },
      () => {
        this.props.onPageChange(pageState);
        this.onChange();
      }
    );
  }

  lastPage(e) {
    e.preventDefault();
    let pageState = {
      previous_page: this.state.page_number,
      current_page: this.pages,
    };
    if (this.isLast()) return false;
    this.setState(
      {
        page_number: this.pages,
      },
      () => {
        this.props.onPageChange(pageState);
        this.onChange();
      }
    );
  }

  isLast() {
    if (this.state.page_number == this.pages) {
      return true;
    } else {
      return false;
    }
  }

  isFirst() {
    if (this.state.page_number == 1) {
      return true;
    } else {
      return false;
    }
  }

  exportToExcel() {
    // let sTable = "<table>";
    // sTable += "<thead>";
    // sTable += "<tr>";
    // for (let column of this.props.columns) {
    //     sTable += "<th>" + column.text + "</th>";
    // }
    // sTable += "</tr>";
    // sTable += "</thead>";
    // sTable += "<tbody>";
    // for (let i in this.props.records) {
    //     let record = this.props.records[i];
    //     sTable += "<tr>";
    //     for (let column of this.props.columns) {
    //         if (column.cell && typeof column.cell === "function") {
    //             sTable += "<td></td>";
    //         } else if (record[column.key]) {
    //             sTable += "<td>" + record[column.key] + "</td>";
    //         } else {
    //             sTable += "<td></td>";
    //         }
    //     }
    //     sTable += "</tr>";
    // }
    // sTable += "</tbody>";
    // sTable += "</table>";

    let records = [];
    let rowIndex = 1;

    let filterValue = this.state.filter_value;

    let filterRecords = this.props.records;
    if (filterValue) {
      filterRecords = this.filterData(this.props.records);
    }

    for (let record of filterRecords) {
      let recordCol = {};
      let colIndex = 1;
      for (let column of this.props.columns) {
        if (column.key in record) {
          if (column.type && column.type === "number") {
            recordCol[column.text] =
              this.props.staticFirstRow && colIndex === 1
                ? rowIndex
                : parseInt(
                    record[column.key].replace(/(\d+),(?=\d{3}(\D|$))/g, "$1")
                  );
            colIndex++;
          } else if (column.type && column.type === "html") {
            let cellText =
              (record[column.key].props && record[column.key].props.data) || "";
            recordCol[column.text] =
              this.props.staticFirstRow && colIndex === 1 ? rowIndex : cellText;
            colIndex++;
          } else {
            recordCol[column.text] =
              this.props.staticFirstRow && colIndex === 1
                ? rowIndex
                : record[column.key];
            colIndex++;
          }
        }
      }
      rowIndex++;

      records.push(recordCol);
    }

    let fileName = "excel";

    if (this.props.config && this.props.config["excelFileName"]) {
      fileName = this.props.config["excelFileName"];
    }

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(records);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, this.props.filename || fileName + fileExtension);
  }

  exportToPDF() {
    let sTable = "";
    sTable += "<table>";
    sTable += "<thead>";
    sTable += "<tr>";
    for (let column of this.props.columns) {
      sTable += "<th>" + column.text + "</th>";
    }
    sTable += "</tr>";
    sTable += "</thead>";
    sTable += "<tbody>";
    let rowIndex = 1;
    for (let i in this.props.records) {
      let record = this.props.records[i];
      sTable += "<tr>";
      let colIndex = 1;
      for (let column of this.props.columns) {
        if (column.cell && typeof column.cell === "function") {
          sTable += "<td></td>";
        } else if (record[column.key]) {
          sTable +=
            "<td>" +
            (this.props.staticFirstRow && colIndex === 1
              ? rowIndex
              : record[column.key]) +
            "</td>";
        } else {
          sTable += "<td></td>";
        }
        colIndex++;
      }
      sTable += "</tr>";
      rowIndex++;
    }
    sTable += "</tbody>";
    sTable += "</table>";

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style =
      style +
      "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align:left;}";
    style = style + "</style>";

    var win = window.open("", "_blank");
    win.document.write("<html><head>");
    win.document.write("<title>" + this.config.filename + "</title>");
    win.document.write(style);
    win.document.write("</head>");
    win.document.write("<body>");
    win.document.write("<h1>" + this.config.filename + "</h1>");
    win.document.write(sTable);
    win.document.write("</body></html>");
    win.print();
    win.close();
  }

  convertToCSV(objArray) {
    let array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let index in array[i]) {
        if (line != "") line += ",";
        line += array[i][index];
      }
      str += line + "\r\n";
    }
    return str;
  }

  exportToCSV(headers, items, fileTitle) {
    var headers = {};
    // add columns in sheet array
    for (let column of this.props.columns) {
      headers[column.key] = '"' + column.text + '"';
    }
    var records = [];
    // add data rows in sheet array
    for (let i in this.props.records) {
      let record = this.props.records[i],
        newRecord = {};
      for (let column of this.props.columns) {
        if (column.cell && typeof column.cell === "function") {
          newRecord[column.key] = "";
        } else if (record[column.key]) {
          let colValue = record[column.key].replace(/"/g, '""');
          newRecord[column.key] = '"' + colValue + '"';
        } else {
          newRecord[column.key] = "";
        }
      }
      records.push(newRecord);
    }
    if (headers) {
      records.unshift(headers);
    }
    // Convert Object to JSON
    let jsonObject = JSON.stringify(records);
    let csv = this.convertToCSV(jsonObject);
    let exportedFilenmae = this.config.filename + ".csv" || "export.csv";
    let blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      let link = document.createElement("a");
      if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        let url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = "hidden";
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  onChange() {
    let tableData = {
      filter_value: this.state.filter_value,
      page_number: this.state.page_number,
      page_size: this.state.page_size,
      sort_order: this.state.sort,
    };

    this.props.onChange(tableData);
  }

  filterData(records) {
    let filterValue = this.state.filter_value;
    var result = records.filter((record) => {
      let allow = false;
      _.each(this.props.columns, (column, key) => {
        if (record[column.key]) {
          allow = _.includes(
            record[column.key].toString().toLowerCase(),
            filterValue.toString().toLowerCase()
          )
            ? true
            : allow;
        }
      });
      return allow;
    });
    return result;
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  naturalSort(ar = [], index) {
    var L = ar.length,
      i,
      who,
      next,
      isi = typeof index == "number",
      rx = /(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.(\D+|$))/g;

    function nSort(aa, bb) {
      var a = aa[0],
        b = bb[0],
        a1,
        b1,
        i = 0,
        n,
        L = a.length;
      while (i < L) {
        if (!b[i]) return 1;
        a1 = a[i];
        b1 = b[i++];
        if (a1 !== b1) {
          n = a1 - b1;
          if (!isNaN(n)) return n;
          return a1 > b1 ? 1 : -1;
        }
      }
      return b[i] != undefined ? -1 : 0;
    }

    for (i = 0; i < L; i++) {
      who = ar[i];
      next = isi ? ar[i][index] || "" : who;
      ar[i] = [String(next).toLowerCase().match(rx), who];
    }
    ar.sort(nSort);
    for (i = 0; i < L; i++) {
      ar[i] = ar[i][1];
    }
  }

  render() {
    let filterRecords, totalRecords, pages, isFirst, isLast;

    var collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: "base",
    });

    if (this.props.dynamic === false) {
      let records = this.props.records;

      if (this.state.sort && !this.props.hasCustomSort) {
        if (this.state.sort.order === "asc") {
          records.sort((a, b) =>
            collator.compare(
              a[this.state.sort.column],
              b[this.state.sort.column]
            )
          );
        } else {
          records.sort((b, a) =>
            collator.compare(
              a[this.state.sort.column],
              b[this.state.sort.column]
            )
          );
        }
      }

      //let records = _.orderBy(this.props.records, [this.state.sort.column], [this.state.sort.order]),
      let filterValue = this.state.filter_value;

      filterRecords = records;
      if (filterValue) {
        filterRecords = this.filterData(records);
      }
      totalRecords = filterRecords.length;

      pages = this.pages = this.numPages(totalRecords);

      isFirst = this.isFirst();
      isLast = this.isLast();
      filterRecords = this.paginate(filterRecords);
    } else {
      filterRecords = this.props.records;

      if (this.state.sort && !this.props.hasCustomSort) {
        if (this.state.sort.order === "asc") {
          records.sort((a, b) =>
            collator.compare(
              a[this.state.sort.column],
              b[this.state.sort.column]
            )
          );
        } else {
          records.sort((b, a) =>
            collator.compare(
              a[this.state.sort.column],
              b[this.state.sort.column]
            )
          );
        }
      }

      totalRecords = this.props.total_record;

      pages = this.pages = this.numPages(totalRecords);
      isFirst = this.isFirst();
      isLast = this.isLast();
    }

    let startRecords =
      this.state.page_number * this.state.page_size -
      (this.state.page_size - 1);
    let endRecords = this.state.page_size * this.state.page_number;
    endRecords = endRecords > totalRecords ? totalRecords : endRecords;

    let lengthMenuText = this.config.language.length_menu;
    lengthMenuText = lengthMenuText.split("_MENU_");
    let paginationInfo = this.config.language.info;
    paginationInfo = paginationInfo.replace(
      "_START_",
      this.state.page_number == 1 ? 1 : startRecords
    );
    paginationInfo = paginationInfo.replace("_END_", endRecords);
    paginationInfo = paginationInfo.replace("_TOTAL_", totalRecords);

    let hasContextMenu = this.state.contextMenuId;

    let defaultRowIndex = 0;
    let radioOnChange = this.props.radioOnChange;

    let hexToRgb = this.hexToRgb;
    let contextItemClick = this.props.contextMenuItemClick;

    this.inputRefs = [];

    return (
      <div
        className="as-react-table react-datatable"
        id={this.props.id ? this.props.id + "-container" : ""}
      >
        <div
          className="row table-head asrt-table-head"
          id={this.props.id ? this.props.id + "-table-head" : ""}
        >
          <div className="col-md-6">
            {this.props.config.add_button_left ? (
              this.props.config.text_or_button === "button" ? (
                <button
                  onClick={(e) => this.props.buttonLeftClick()}
                  className={this.props.config.button_style}
                >
                  <span>{this.props.config.button_name}</span>
                </button>
              ) : this.props.config.text_or_button === "text" ? (
                <div>
                  <span>{this.props.config.button_name}</span>
                </div>
              ) : null
            ) : null}
            {this.config.show_length_menu && !this.config.show_all ? (
              <div className="input-group asrt-page-length">
                <div className="input-group-addon input-group-prepend">
                  <span className="input-group-text" style={style.table_size}>
                    {lengthMenuText[0] ? lengthMenuText[0] : ""}
                  </span>
                </div>
                {_.includes(this.config.language.length_menu, "_MENU_") ? (
                  <select
                    type="text"
                    className="form-control"
                    style={style.table_size_dropdown}
                    onChange={this.changePageSize.bind(this)}
                  >
                    {this.config.length_menu.map((value, key) => {
                      return <option key={value}>{value}</option>;
                    })}
                    <option value={this.props.records.length}>All</option>
                  </select>
                ) : null}
                <div className="input-group-addon input-group-prepend">
                  <span className="input-group-text" style={style.table_size}>
                    {lengthMenuText[1] ? lengthMenuText[1] : ""}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-md-6 float-right text-right">
            {this.config.show_filter ? (
              <div className="table_filter" style={style.table_filter}>
                <input
                  type="search"
                  className="form-control m-input--pill"
                  placeholder={this.config.language.filter}
                  onChange={this.filterRecords}
                />
              </div>
            ) : null}
            <div className="table_tools" style={style.table_tool}>
              {this.config.button.excel ? (
                <button
                  className="btn btn-primary buttons-excel"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to Excel"
                  style={style.table_tool_btn}
                  onClick={this.exportToExcel}
                >
                  <span>
                    <i className="la la-file-excel-o" aria-hidden="true"></i>
                  </span>
                </button>
              ) : null}
              {this.config.button.homeworkReportExcel ? (
                <button
                  className="btn btn-primary buttons-excel"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to Excel"
                  style={style.table_tool_btn}
                  onClick={this.props.exportToExcelCustomize}
                >
                  <span>
                    <i className="la la-file-excel-o" aria-hidden="true"></i>
                  </span>
                </button>
              ) : null}
              {this.config.button.csv ? (
                <button
                  className="btn btn-primary buttons-csv"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to CSV"
                  style={style.table_tool_btn}
                  onClick={this.exportToCSV}
                >
                  <span>
                    <i className="la 	la-file-text-o" aria-hidden="true"></i>
                  </span>
                </button>
              ) : null}
              {this.config.button.print ? (
                <button
                  className="btn btn-primary buttons-pdf"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to PDF"
                  style={style.table_tool_btn}
                  onClick={this.exportToPDF}
                >
                  <span>
                    <i className="la la-print" aria-hidden="true"></i>
                  </span>
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className="row table-body asrt-table-body"
          style={style.table_body}
          id={this.props.id ? this.props.id + "-table-body" : ""}
        >
          <div className="col-md-12">
            <div className="table-responsive">
              <table className={this.props.className} id={this.props.id}>
                <thead>
                  <tr>
                    {this.props.columns.map((column, index) => {
                      let classText = column.sortable
                          ? "sortable "
                          : "non-sortable",
                        width = column.width ? column.width : "",
                        align = column.align ? column.align : "",
                        sortOrder = "",
                        columnStyle = {};
                      if (this.state.sort.column == column.key) {
                        sortOrder = this.state.sort.order;
                        classText += sortOrder ? " " + sortOrder : "";
                        columnStyle =
                          sortOrder == "asc" ? style.sort_asc : style.sort_desc;
                      } else {
                        columnStyle = style.no_sort;
                      }

                      // classText += " text-" + align;
                      if (column.className) classText += " " + column.className;

                      return (
                        <th
                          key={column.key ? column.key : column.text}
                          className={classText}
                          width={width}
                          style={columnStyle}
                          onClick={() =>
                            this.props.hasCustomSort
                              ? this.props.customSort(column, sortOrder)
                              : this.sortColumn(column, sortOrder)
                          }
                        >
                          {column.checkAll && column.colType === "checkbox" ? (
                            <Checkbox
                              label=""
                              checked={this.props.allRowChecked}
                              onChange={(e, { checked }) => {
                                this.props.allRowChange(checked);
                              }}
                            />
                          ) : column.clickableTh ? (
                            <div
                              onClick={() => this.props.theadClick(column.key)}
                              className="underline"
                              style={{ marginRight: column.sortable ? 30 : 0 }}
                            >
                              {column.text}
                            </div>
                          ) : (
                            <div
                              className=""
                              style={{ marginRight: column.sortable ? 30 : 0 }}
                            >
                              {column.text}
                            </div>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {filterRecords.length ? (
                    filterRecords.map((record, rowIndex) => {
                      rowIndex = _.indexOf(this.props.records, record);

                      let contextMenuId = record.contextMenuId;
                      let contextMenus = this.state.contextMenus;

                      if (contextMenuId && contextMenuId in contextMenus) {
                        contextMenus = contextMenus[contextMenuId];
                      }

                      this.rowInputRef = React.createRef();
                      this.inputRefs.push(this.rowInputRef);

                      defaultRowIndex++;

                      var rowClassName = "";
                      if (String(record.isChecked) === "1") {
                      } else {
                        if (this.props.uncheckedClassName) {
                          rowClassName = this.props.uncheckedClassName;
                        } else {
                        }
                      }

                      return (
                        <tr
                          key={rowIndex}
                          onClick={(e) =>
                            this.props.onRowClicked(e, record, rowIndex)
                          }
                          className={rowClassName}
                        >
                          {this.props.columns.map((column, colIndex) => {
                            let align = column.align ? column.align : "";
                            let classText = "";

                            classText += " text-" + align;
                            if (column.className)
                              classText += " " + column.className;

                            if (this.props.staticFirstRow && colIndex === 0) {
                              return (
                                <td
                                  className={
                                    hasContextMenu
                                      ? "has-context-menu " + classText
                                      : classText
                                  }
                                  key={column.key ? column.key : column.text}
                                >
                                  {hasContextMenu ? (
                                    <ContextMenuTrigger
                                      id={
                                        this.state.contextMenuId +
                                        "_row_" +
                                        column.key +
                                        "_record_" +
                                        record.id
                                      }
                                      attributes={{ test: "zzz" }}
                                    >
                                      {defaultRowIndex}
                                    </ContextMenuTrigger>
                                  ) : (
                                    defaultRowIndex
                                  )}
                                  {hasContextMenu &&
                                  contextMenus &&
                                  contextMenus.length > 0 ? (
                                    <ContextMenu
                                      id={
                                        this.state.contextMenuId +
                                        "_row_" +
                                        column.key +
                                        "_record_" +
                                        record.id
                                      }
                                    >
                                      {contextMenus.map(function (obj, i) {
                                        return (
                                          <MenuItem
                                            key={i}
                                            onClick={() =>
                                              contextItemClick(
                                                record.id,
                                                obj.key
                                              )
                                            }
                                          >
                                            <i
                                              className={
                                                "m-nav__link-icon " +
                                                obj.iconClassName
                                              }
                                            ></i>
                                            <span className="m-nav__link-text">
                                              {obj.text}
                                            </span>
                                          </MenuItem>
                                        );
                                      })}
                                    </ContextMenu>
                                  ) : null}
                                </td>
                              );
                            } else {
                              if (column.key in record) {
                                return (
                                  <td
                                    className={
                                      hasContextMenu
                                        ? "has-context-menu " + classText
                                        : classText
                                    }
                                    key={column.key ? column.key : column.text}
                                  >
                                    {hasContextMenu ? (
                                      <ContextMenuTrigger
                                        id={
                                          this.state.contextMenuId +
                                          "_row_" +
                                          column.key +
                                          "_record_" +
                                          record.id
                                        }
                                      >
                                        {column.colType &&
                                        column.colType === "image" ? (
                                          record[column.key] ? (
                                            <img
                                              src={record[column.key]}
                                              className={
                                                "circle " + column.className
                                              }
                                            />
                                          ) : (
                                            <img
                                              src={
                                                "/images/image_placeholder.jpg"
                                              }
                                              className={
                                                "circle " + column.className
                                              }
                                            />
                                          )
                                        ) : column.colType &&
                                          column.colType === "radio" ? (
                                          this.props.radioOptions &&
                                          this.props.radioOptions.length > 0 ? (
                                            <Form>
                                              {this.props.radioOptions.map(
                                                function (radioObj, i) {
                                                  let checkedStyle = {
                                                    color: "white",
                                                    backgroundColor:
                                                      "#" + radioObj.color,
                                                    border:
                                                      "solid 1px #" +
                                                      radioObj.color,
                                                    boxShadow:
                                                      "0 5px 10px 2px rgba(" +
                                                      hexToRgb(radioObj.color)
                                                        .r +
                                                      ", " +
                                                      hexToRgb(radioObj.color)
                                                        .g +
                                                      ", " +
                                                      hexToRgb(radioObj.color)
                                                        .b +
                                                      ", " +
                                                      0.19 +
                                                      ")",
                                                  };
                                                  let uncheckedStyle = {
                                                    color: "#" + radioObj.color,
                                                    backgroundColor: "white",
                                                    border:
                                                      "solid 1px #" +
                                                      radioObj.color,
                                                    boxShadow:
                                                      "0 5px 10px 2px rgba(" +
                                                      hexToRgb(radioObj.color)
                                                        .r +
                                                      ", " +
                                                      hexToRgb(radioObj.color)
                                                        .g +
                                                      ", " +
                                                      hexToRgb(radioObj.color)
                                                        .b +
                                                      ", " +
                                                      0.19 +
                                                      ")",
                                                  };
                                                  return (
                                                    <Form.Field
                                                      key={record.id + ":" + i}
                                                      style={{
                                                        display: "inline-block",
                                                      }}
                                                    >
                                                      {column.hasTooltip ? (
                                                        <Radio
                                                          label={
                                                            radioObj.shortName
                                                          }
                                                          data-tip
                                                          data-tooltip={
                                                            record.name
                                                          }
                                                          name={
                                                            "radio_" + record.id
                                                          }
                                                          value={
                                                            record.id +
                                                            "_" +
                                                            radioObj.id
                                                          }
                                                          onChange={
                                                            radioOnChange
                                                          }
                                                          checked={
                                                            record.radioTypeId ===
                                                            radioObj.id
                                                          }
                                                          className="circle-item"
                                                          style={
                                                            record.radioTypeId ===
                                                            radioObj.id
                                                              ? checkedStyle
                                                              : uncheckedStyle
                                                          }
                                                        />
                                                      ) : (
                                                        <Radio
                                                          label={
                                                            radioObj.shortName
                                                          }
                                                          data-tip
                                                          name={
                                                            "radio_" + record.id
                                                          }
                                                          value={
                                                            record.id +
                                                            "_" +
                                                            radioObj.id
                                                          }
                                                          onChange={
                                                            radioOnChange
                                                          }
                                                          checked={
                                                            record.radioTypeId ===
                                                            radioObj.id
                                                          }
                                                          className="circle-item"
                                                          style={
                                                            record.radioTypeId ===
                                                            radioObj.id
                                                              ? checkedStyle
                                                              : uncheckedStyle
                                                          }
                                                        />
                                                      )}
                                                    </Form.Field>
                                                  );
                                                }
                                              )}
                                            </Form>
                                          ) : null
                                        ) : column.colType &&
                                          column.colType === "input" ? (
                                          <Input
                                            ref={this.rowInputRef}
                                            data-id={record.id}
                                            placeholder=""
                                            className={record.inputClassName}
                                            value={record.comment}
                                            disabled={record.inputDisabled}
                                            onChange={(e) => {
                                              this.props.inputOnChange(
                                                e,
                                                record.id,
                                                this.inputRefs
                                              );
                                            }}
                                            onBlur={(e) => {
                                              this.props.onInputFocusOut(
                                                e,
                                                rowIndex,
                                                record.id,
                                                this.inputRefs
                                              );
                                            }}
                                            onKeyPress={(event) => {
                                              var code =
                                                event.keyCode || event.which;
                                              if (code === 13) {
                                                this.props.onInputEnterPress(
                                                  event,
                                                  rowIndex,
                                                  record.id,
                                                  this.inputRefs
                                                );
                                              } else if (
                                                code === 38 ||
                                                code === 40
                                              ) {
                                                this.props.onInputUpDownPress(
                                                  event,
                                                  rowIndex,
                                                  record.id,
                                                  this.inputRefs
                                                );
                                              }
                                            }}
                                          />
                                        ) : column.colType &&
                                          column.colType === "checkbox" ? (
                                          <Checkbox
                                            label=""
                                            checked={
                                              String(record.isChecked) ===
                                                "1" || !!record.radioTypeId
                                            }
                                            onChange={(e, { checked }) => {
                                              this.props.checkBoxOnChange(
                                                checked,
                                                record.id
                                              );
                                            }}
                                          />
                                        ) : column.colType &&
                                          column.colType === "inlineedit" ? (
                                          <InlineEdit
                                            text={
                                              record.comment !== null
                                                ? record.comment
                                                : ""
                                            }
                                            labelClassName="form-control m-input"
                                            inputClassName="form-control m-input"
                                            onFocusOut={(e) => {
                                              this.props.inlineEditOnChange(
                                                e,
                                                record.id,
                                                this.inlineEditRefs
                                              );
                                            }}
                                            onEnterPress={(e) => {
                                              this.props.inlineEditOnChange(
                                                e,
                                                record.id,
                                                this.inlineEditRefs
                                              );
                                            }}
                                          />
                                        ) : column.colType &&
                                          column.colType === "numericedit" ? (
                                          <Input
                                            ref={this.rowInputRef}
                                            value={
                                              record.takenScore !== null
                                                ? record.takenScore
                                                : ""
                                            }
                                            type="number"
                                            style={{ width: 95 }}
                                            className={
                                              record.numericEditClassName
                                            }
                                            onChange={(e) => {
                                              this.props.numberInputOnChange(
                                                e,
                                                record.id
                                              );
                                            }}
                                            onBlur={(event) => {
                                              this.props.numberInputFocusOut(
                                                event,
                                                rowIndex,
                                                record.id
                                              );
                                            }}
                                            onKeyDown={(event) => {
                                              var code =
                                                event.keyCode || event.which;
                                              if (code === 13) {
                                                this.props.onInputEnterPress(
                                                  event,
                                                  rowIndex,
                                                  record.id,
                                                  this.inputRefs
                                                );
                                              } else if (
                                                code === 38 ||
                                                code === 40
                                              ) {
                                                this.props.onInputUpDownPress(
                                                  event,
                                                  rowIndex,
                                                  record.id,
                                                  this.inputRefs
                                                );
                                                event.preventDefault();
                                              }
                                            }}
                                          />
                                        ) : column.colType &&
                                          column.colType === "html" ? (
                                          column.clickableTd &&
                                          record.clickable ? (
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: record[column.key],
                                              }}
                                              onClick={() => {
                                                this.props.tdClick(
                                                  column.key,
                                                  record.id
                                                );
                                              }}
                                            ></div>
                                          ) : (
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html: record[column.key],
                                              }}
                                            ></div>
                                          )
                                        ) : column.clickableTd &&
                                          record.clickable ? (
                                          <span
                                            className={column.tdClassName}
                                            onClick={() => {
                                              this.props.tdClick(
                                                column.key,
                                                record.id
                                              );
                                            }}
                                          >
                                            {column.priceFormat
                                              ? priceFormat(record[column.key])
                                              : record[column.key]}
                                          </span>
                                        ) : column.priceFormat ? (
                                          priceFormat(record[column.key])
                                        ) : (
                                          record[column.key]
                                        )}
                                      </ContextMenuTrigger>
                                    ) : column.colType &&
                                      column.colType === "image" ? (
                                      record[column.key] ? (
                                        <img
                                          src={record[column.key]}
                                          className={
                                            "circle " + column.className
                                          }
                                        />
                                      ) : (
                                        <img
                                          src={"/images/image_placeholder.jpg"}
                                          className={
                                            "circle " + column.className
                                          }
                                        />
                                      )
                                    ) : column.colType &&
                                      column.colType === "radio" ? (
                                      this.props.radioOptions &&
                                      this.props.radioOptions.length > 0 ? (
                                        <Form>
                                          {this.props.radioOptions.map(
                                            function (radioObj, i) {
                                              let checkedStyle = {
                                                color: "white",
                                                backgroundColor:
                                                  "#" + radioObj.color,
                                                border:
                                                  "solid 1px #" +
                                                  radioObj.color,
                                                boxShadow:
                                                  "0 5px 10px 2px rgba(" +
                                                  hexToRgb(radioObj.color).r +
                                                  ", " +
                                                  hexToRgb(radioObj.color).g +
                                                  ", " +
                                                  hexToRgb(radioObj.color).b +
                                                  ", " +
                                                  0.19 +
                                                  ")",
                                              };
                                              let uncheckedStyle = {
                                                color: "#" + radioObj.color,
                                                backgroundColor: "white",
                                                border:
                                                  "solid 1px #" +
                                                  radioObj.color,
                                                boxShadow:
                                                  "0 5px 10px 2px rgba(" +
                                                  hexToRgb(radioObj.color).r +
                                                  ", " +
                                                  hexToRgb(radioObj.color).g +
                                                  ", " +
                                                  hexToRgb(radioObj.color).b +
                                                  ", " +
                                                  0.19 +
                                                  ")",
                                              };
                                              return (
                                                <Form.Field
                                                  key={record.id + ":" + i}
                                                  style={{
                                                    display: "inline-block",
                                                  }}
                                                >
                                                  {column.hasTooltip ? (
                                                    <Radio
                                                      label={radioObj.shortName}
                                                      data-tip
                                                      data-tooltip={
                                                        radioObj.name
                                                      }
                                                      name={
                                                        "radio_" + record.id
                                                      }
                                                      value={
                                                        record.id +
                                                        "_" +
                                                        radioObj.id
                                                      }
                                                      onChange={radioOnChange}
                                                      checked={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                      }
                                                      className="circle-item"
                                                      style={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                          ? checkedStyle
                                                          : uncheckedStyle
                                                      }
                                                    />
                                                  ) : (
                                                    <Radio
                                                      label={radioObj.shortName}
                                                      name={
                                                        "radio_" + record.id
                                                      }
                                                      value={
                                                        record.id +
                                                        "_" +
                                                        radioObj.id
                                                      }
                                                      onChange={radioOnChange}
                                                      checked={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                      }
                                                      className="circle-item"
                                                      style={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                          ? checkedStyle
                                                          : uncheckedStyle
                                                      }
                                                    />
                                                  )}
                                                </Form.Field>
                                              );
                                            }
                                          )}
                                        </Form>
                                      ) : (
                                        record[column.key]
                                      )
                                    ) : column.colType &&
                                      column.colType === "input" ? (
                                      <Input
                                        ref={this.rowInputRef}
                                        data-id={record.id}
                                        placeholder=""
                                        disabled={record.inputDisabled}
                                        onChange={(e) => {
                                          this.props.inputOnChange(
                                            e,
                                            record.id,
                                            this.inputRefs
                                          );
                                        }}
                                        onBlur={(e) => {
                                          this.props.onInputFocusOut(
                                            e,
                                            rowIndex,
                                            record.id,
                                            this.inputRefs
                                          );
                                        }}
                                        value={record.comment}
                                        className={record.inputClassName}
                                        onKeyPress={(event) => {
                                          var code =
                                            event.keyCode || event.which;
                                          if (code === 13) {
                                            this.props.onInputEnterPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                          } else if (
                                            code === 38 ||
                                            code === 40
                                          ) {
                                            this.props.onInputUpDownPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                          }
                                        }}
                                      />
                                    ) : column.colType &&
                                      column.colType === "checkbox" ? (
                                      <Checkbox
                                        label=""
                                        checked={
                                          String(record.isChecked) === "1" ||
                                          !!record.radioTypeId
                                        }
                                        onChange={(e, { checked }) => {
                                          this.props.checkBoxOnChange(
                                            checked,
                                            record.id
                                          );
                                        }}
                                      />
                                    ) : column.colType &&
                                      column.colType === "inlineedit" ? (
                                      <InlineEdit
                                        text={
                                          record.comment !== null
                                            ? record.comment
                                            : ""
                                        }
                                        labelClassName="form-control m-input"
                                        inputClassName="form-control m-input"
                                        onFocusOut={(e) => {
                                          this.props.inlineEditOnChange(
                                            e,
                                            record.id,
                                            this.inlineEditRefs
                                          );
                                        }}
                                        onEnterPress={(e) => {
                                          this.props.inlineEditOnChange(
                                            e,
                                            record.id,
                                            this.inlineEditRefs
                                          );
                                        }}
                                      />
                                    ) : column.colType &&
                                      column.colType === "numericedit" ? (
                                      <Input
                                        ref={this.rowInputRef}
                                        value={
                                          record.takenScore !== null
                                            ? record.takenScore
                                            : ""
                                        }
                                        type="number"
                                        style={{ width: 95 }}
                                        className={record.numericEditClassName}
                                        onChange={(e) => {
                                          this.props.numberInputOnChange(
                                            e,
                                            record.id
                                          );
                                        }}
                                        onBlur={(event) => {
                                          this.props.numberInputFocusOut(
                                            event,
                                            rowIndex,
                                            record.id
                                          );
                                        }}
                                        onKeyDown={(event) => {
                                          var code =
                                            event.keyCode || event.which;
                                          if (code === 13) {
                                            this.props.onInputEnterPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                          } else if (
                                            code === 38 ||
                                            code === 40
                                          ) {
                                            this.props.onInputUpDownPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                            event.preventDefault();
                                          }
                                        }}
                                      />
                                    ) : column.colType &&
                                      column.colType === "html" ? (
                                      column.clickableTd && record.clickable ? (
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: record[column.key],
                                          }}
                                          onClick={() => {
                                            this.props.tdClick(
                                              column.key,
                                              record.id
                                            );
                                          }}
                                        ></div>
                                      ) : (
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: record[column.key],
                                          }}
                                        ></div>
                                      )
                                    ) : column.clickableTd &&
                                      record.clickable ? (
                                      <span
                                        className={column.tdClassName}
                                        onClick={() => {
                                          this.props.tdClick(
                                            column.key,
                                            record.id
                                          );
                                        }}
                                      >
                                        {column.priceFormat
                                          ? priceFormat(record[column.key])
                                          : record[column.key]}
                                      </span>
                                    ) : column.priceFormat ? (
                                      priceFormat(record[column.key])
                                    ) : (
                                      record[column.key]
                                    )}
                                    {hasContextMenu &&
                                    contextMenus &&
                                    contextMenus.length > 0 ? (
                                      <ContextMenu
                                        id={
                                          this.state.contextMenuId +
                                          "_row_" +
                                          column.key +
                                          "_record_" +
                                          record.id
                                        }
                                      >
                                        {contextMenus.map(function (obj, i) {
                                          return (
                                            <MenuItem
                                              key={i}
                                              onClick={() =>
                                                contextItemClick(
                                                  record.id,
                                                  obj.key
                                                )
                                              }
                                            >
                                              <i
                                                className={
                                                  "m-nav__link-icon " +
                                                  obj.iconClassName
                                                }
                                              ></i>
                                              <span className="m-nav__link-text">
                                                {obj.text}
                                              </span>
                                            </MenuItem>
                                          );
                                        })}
                                      </ContextMenu>
                                    ) : null}
                                  </td>
                                );
                              } else {
                                return (
                                  <td
                                    className={
                                      hasContextMenu
                                        ? "has-context-menu " + column.className
                                        : column.className
                                    }
                                    key={column.key ? column.key : column.text}
                                  >
                                    {column.colType &&
                                    column.colType === "radio" ? (
                                      this.props.radioOptions &&
                                      this.props.radioOptions.length > 0 ? (
                                        <Form>
                                          {this.props.radioOptions.map(
                                            function (radioObj, i) {
                                              let checkedStyle = {
                                                color: "white",
                                                backgroundColor:
                                                  "#" + radioObj.color,
                                                border:
                                                  "solid 1px #" +
                                                  radioObj.color,
                                                boxShadow:
                                                  "0 5px 10px 2px rgba(" +
                                                  hexToRgb(radioObj.color).r +
                                                  ", " +
                                                  hexToRgb(radioObj.color).g +
                                                  ", " +
                                                  hexToRgb(radioObj.color).b +
                                                  ", " +
                                                  0.19 +
                                                  ")",
                                              };
                                              let uncheckedStyle = {
                                                color: "#" + radioObj.color,
                                                backgroundColor: "white",
                                                border:
                                                  "solid 1px #" +
                                                  radioObj.color,
                                                boxShadow:
                                                  "0 5px 10px 2px rgba(" +
                                                  hexToRgb(radioObj.color).r +
                                                  ", " +
                                                  hexToRgb(radioObj.color).g +
                                                  ", " +
                                                  hexToRgb(radioObj.color).b +
                                                  ", " +
                                                  0.19 +
                                                  ")",
                                              };
                                              return (
                                                <Form.Field
                                                  key={record.id + ":" + i}
                                                  style={{
                                                    display: "inline-block",
                                                  }}
                                                >
                                                  {column.hasTooltip ? (
                                                    <Radio
                                                      label={radioObj.shortName}
                                                      data-tip
                                                      data-tooltip={
                                                        radioObj.name
                                                      }
                                                      name={
                                                        "radio_" + record.id
                                                      }
                                                      value={
                                                        record.id +
                                                        "_" +
                                                        radioObj.id
                                                      }
                                                      onChange={radioOnChange}
                                                      checked={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                      }
                                                      className="circle-item"
                                                      style={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                          ? checkedStyle
                                                          : uncheckedStyle
                                                      }
                                                    />
                                                  ) : (
                                                    <Radio
                                                      label={radioObj.shortName}
                                                      name={
                                                        "radio_" + record.id
                                                      }
                                                      value={
                                                        record.id +
                                                        "_" +
                                                        radioObj.id
                                                      }
                                                      onChange={radioOnChange}
                                                      checked={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                      }
                                                      className="circle-item"
                                                      style={
                                                        record.radioTypeId ===
                                                        radioObj.id
                                                          ? checkedStyle
                                                          : uncheckedStyle
                                                      }
                                                    />
                                                  )}
                                                </Form.Field>
                                              );
                                            }
                                          )}
                                        </Form>
                                      ) : null
                                    ) : column.colType &&
                                      column.colType === "input" ? (
                                      <Input
                                        ref={this.rowInputRef}
                                        data-id={record.id}
                                        placeholder=""
                                        value={record.comment}
                                        disabled={record.inputDisabled}
                                        className={record.inputClassName}
                                        onChange={(e) => {
                                          this.props.inputOnChange(
                                            e,
                                            record.id,
                                            this.inputRefs
                                          );
                                        }}
                                        onBlur={(e) => {
                                          this.props.onInputFocusOut(
                                            e,
                                            rowIndex,
                                            record.id,
                                            this.inputRefs
                                          );
                                        }}
                                        onKeyPress={(event) => {
                                          var code =
                                            event.keyCode || event.which;
                                          if (code === 13) {
                                            this.props.onInputEnterPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                          } else if (
                                            code === 38 ||
                                            code === 40
                                          ) {
                                            this.props.onInputUpDownPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                          }
                                        }}
                                      />
                                    ) : column.colType &&
                                      column.colType === "checkbox" ? (
                                      <Checkbox
                                        label=""
                                        checked={
                                          String(record.isChecked) === "1" ||
                                          !!record.radioTypeId
                                        }
                                        onChange={(e, { checked }) => {
                                          this.props.checkBoxOnChange(
                                            checked,
                                            record.id
                                          );
                                        }}
                                      />
                                    ) : column.colType &&
                                      column.colType === "inlineedit" ? (
                                      <InlineEdit
                                        text={
                                          record.comment !== null
                                            ? record.comment
                                            : ""
                                        }
                                        labelClassName="form-control m-input"
                                        inputClassName="form-control m-input"
                                        onFocusOut={(e) => {
                                          this.props.inlineEditOnChange(
                                            e,
                                            record.id,
                                            this.inlineEditRefs
                                          );
                                        }}
                                        onEnterPress={(e) => {
                                          this.props.inlineEditOnChange(
                                            e,
                                            record.id,
                                            this.inlineEditRefs
                                          );
                                        }}
                                      />
                                    ) : column.colType &&
                                      column.colType === "html" ? (
                                      column.clickableTd && record.clickable ? (
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: record[column.key],
                                          }}
                                          onClick={() => {
                                            this.props.tdClick(
                                              column.key,
                                              record.id
                                            );
                                          }}
                                        ></div>
                                      ) : (
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: record[column.key],
                                          }}
                                        ></div>
                                      )
                                    ) : column.colType &&
                                      column.colType === "numericedit" ? (
                                      <Input
                                        ref={this.rowInputRef}
                                        value={
                                          record.takenScore !== null
                                            ? record.takenScore
                                            : ""
                                        }
                                        type="number"
                                        style={{ width: 95 }}
                                        className={record.numericEditClassName}
                                        onChange={(e) => {
                                          this.props.numberInputOnChange(
                                            e,
                                            record.id
                                          );
                                        }}
                                        onBlur={(event) => {
                                          this.props.numberInputFocusOut(
                                            event,
                                            rowIndex,
                                            record.id
                                          );
                                        }}
                                        onKeyDown={(event) => {
                                          var code =
                                            event.keyCode || event.which;
                                          if (code === 13) {
                                            this.props.onInputEnterPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                          } else if (
                                            code === 38 ||
                                            code === 40
                                          ) {
                                            this.props.onInputUpDownPress(
                                              event,
                                              rowIndex,
                                              record.id,
                                              this.inputRefs
                                            );
                                            event.preventDefault();
                                          }
                                        }}
                                      />
                                    ) : null}
                                  </td>
                                );
                              }
                            }
                          })}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={this.props.columns.length} align="center">
                        {this.config.no_data_text}
                      </td>
                    </tr>
                  )}
                </tbody>
                {this.config.show_footer ? (
                  <tfoot>
                    <tr>
                      {this.props.columns.map((column, colIndex) => {
                        let align = column.align ? column.align : "";
                        let classText = "";

                        classText += " text-" + align;

                        var total = column.footerText;
                        if (column.calculateTotal) {
                          total = 0;
                          for (var i = 0; i < filterRecords.length; i++) {
                            var record = filterRecords[i];

                            total = total + parseFloat(record[column.key]);
                          }
                        }

                        return (
                          <td
                            className={column.className + classText}
                            key={"tfoot_" + colIndex}
                          >
                            {column.priceFormat ? priceFormat(total) : total}
                          </td>
                        );
                      })}
                    </tr>
                  </tfoot>
                ) : null}
              </table>
            </div>
          </div>
        </div>
        <div
          className="row table-foot asrt-table-foot"
          id={this.props.id ? this.props.id + "-table-foot" : ""}
        >
          <div className="col-md-6">
            {this.config.show_info ? paginationInfo : null}
          </div>
          <div className="col-md-6 pull-right text-right">
            {this.config.show_pagination ? (
              <nav aria-label="Page navigation" className="pull-right">
                <ul className="pagination justify-content-end asrt-pagination">
                  {this.config.show_first ? (
                    <li className={(isFirst ? "disabled " : "") + "page-item"}>
                      <a
                        href="#"
                        className="page-link"
                        tabIndex="-1"
                        onClick={this.firstPage.bind(this)}
                      >
                        <i className="la la-angle-double-left"></i>
                        {/*{this.config.language.pagination.first}*/}
                      </a>
                    </li>
                  ) : null}
                  <li className={(isFirst ? "disabled " : "") + "page-item"}>
                    <a
                      href="#"
                      className="page-link"
                      tabIndex="-1"
                      onClick={this.previousPage.bind(this)}
                    >
                      <i className="la la-angle-left"></i>
                      {/*{this.config.language.pagination.previous}*/}
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">{this.state.page_number}</a>
                  </li>
                  <li className={(isLast ? "disabled " : "") + "page-item"}>
                    <a
                      href="#"
                      className="page-link"
                      onClick={this.nextPage.bind(this)}
                    >
                      <i className="la la-angle-right"></i>
                      {/*{this.config.language.pagination.next}*/}
                    </a>
                  </li>
                  {this.config.show_last ? (
                    <li className={(isLast ? "disabled " : "") + "page-item"}>
                      <a
                        href="#"
                        className="page-link"
                        tabIndex="-1"
                        onClick={this.lastPage.bind(this)}
                      >
                        <i className="la la-angle-double-right"></i>
                        {/*{this.config.language.pagination.last}*/}
                      </a>
                    </li>
                  ) : null}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Define component display name
 */
ReactDatatable.displayName = "ReactDatatable";

/**
 * Define defaultProps for this component
 */
ReactDatatable.defaultProps = {
  id: "as-react-datatable",
  className: "table table-bordered table-striped",
  columns: [],
  config: {
    button: {
      excel: false,
      print: false,
      csv: false,
    },
    filename: "Жагсаалт",
    language: {
      length_menu: "_MENU_",
      filter: "Хайлт хийх...",
      info: "Нийт _TOTAL_ илэрцийн _START_-с _END_-г харуулж байна",
      pagination: {
        first: '<i className="la la-angle-left"></i>',
        previous: '<i className="la la-angle-right"></i>',
        next: "Next",
        last: "Last",
      },
    },
    length_menu: [10, 20, 30, 50, 75, 100],
    no_data_text: "Илэрц олдсонгүй",
    page_size: 10,
    sort: {
      column: "test",
      order: "asc",
    },
    show_length_menu: true,
    show_filter: true,
    show_pagination: true,
    show_info: true,
    show_first: true,
    show_last: true,
    show_all: false,
    show_footer: false,
  },
  dynamic: false,
  paginate: true,
  records: [],
  total_record: 0,
  staticFirstRow: true,
  radioOptions: null,
  onChange: () => {},
  onPageChange: () => {},
  onRowClicked: () => {},
  radioOnChange: () => {},
  onInputFocusOut: () => {},
  onInputEnterPress: () => {},
  onInputUpDownPress: () => {},
  inputOnChange: () => {},
  inlineEditOnChange: () => {},
  numberInputFocusOut: () => {},
  numberInputOnChange: () => {},
  checkBoxOnChange: () => {},
  allRowChange: () => {},
  theadClick: () => {},
  buttonLeftClick: () => {},
  exportToExcelCustomize: () => {},
};

export default ReactDatatable;
