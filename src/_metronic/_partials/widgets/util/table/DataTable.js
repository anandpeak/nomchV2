import React, { Component } from "react";

import _ from "lodash";
import { ContextMenu, ContextMenuTrigger, MenuItem } from "react-contextmenu";
import {
  Checkbox,
  Dropdown,
  Form,
  Portal,
  Radio,
  Input,
} from "semantic-ui-react";
import InlineEdit from "../inline_edit/InlineEdit";
import $ from 'jquery';

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { translations } from "../../../../util/translations";

import upArrow from "./up_sort.png";
import downArrow from "./down_sort.png";
import noArrow from "./no_sort.png";
import { priceFormat, numberReverseFormat } from "../../../../util/Util";

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

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: props.className,
      locale: props.locale,
      filter_value: "",
      page_size:
        props.config.show_all && props.records.length > 0
          ? props.records.length
          : props.config.page_size
          ? props.config.page_size
          : 10,
      page_number: 1,
      selectedRow: null,
      sort:
        props.config && props.config.sort
          ? props.config.sort
          : {
              column: props.columns[0].key,
              order: "asc",
            },
    };

    this.config = {
      button: {
        filterColumns:
          props.config &&
          props.config.button &&
          props.config.button.filterColumns
            ? props.config.button.filterColumns
            : false,
        excel:
          props.config && props.config.button && props.config.button.excel
            ? props.config.button.excel
            : false,
        print:
          props.config && props.config.button && props.config.button.print
            ? props.config.button.print
            : false,
      },
      filename:
        props.config && props.config.filename ? props.config.filename : "table",
      language: {
        length_menu:
          props.language && props.language.length_menu
            ? props.language.length_menu
            : "_MENU_",
        filter:
          props.language && props.language.filter
            ? props.language.filter
            : translations(props.locale).search || "",
        info:
          props.language && props.language.info
            ? props.language.info
            : "Нийт _TOTAL_ илэрцийн _START_-с _END_-г харуулж байна",
        pagination: {
          first:
            props.language &&
            props.language.pagination &&
            props.language.pagination.first
              ? props.language.pagination.first
              : '<i className="la la-angle-left"></i>',
          previous:
            props.language &&
            props.language.pagination &&
            props.language.pagination.previous
              ? props.language.pagination.previous
              : '<i className="la la-angle-left"></i>',
          next:
            props.language &&
            props.language.pagination &&
            props.language.pagination.next
              ? props.language.pagination.next
              : '<i className="la la-angle-right"></i>',
          last:
            props.language &&
            props.language.pagination &&
            props.language.pagination.last
              ? props.language.pagination.last
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
      excel_path: props.config.excel_path || null,
    };

    this.sortColumn = this.sortColumn.bind(this);
    this.numPages = this.numPages.bind(this);
    this.exportToPDF = this.exportToPDF.bind(this);
    this.onChange = this.onChange.bind(this);
    this.searchRecords = this.searchRecords.bind(this);
    this.filterData = this.filterData.bind(this);
    this.hexToRgb = this.hexToRgb.bind(this);
    this._onColChange = this._onColChange.bind(this);
    this.exportToExcel = this.exportToExcel.bind(this);
    this._onContextMenuShow = this._onContextMenuShow.bind(this);

    this.inputRefs = [];
  }

  componentDidMount() {
    this.updateConfigText();
  }

  componentDidUpdate() {
    if (this.state.locale !== this.props.locale) {
      this.setState({
        locale: this.state.locale,
      });

      this.updateConfigText();
    }
  }

  render() {
    let filterRecords, totalRecords, pages, isFirst, isLast;
    let nonFilterAllRecords;

    var collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: "base",
    });

    filterRecords = this.props.records;

    if (this.state.sort && !this.props.hasCustomSort) {
      if (this.state.sort.order === "asc") {
        filterRecords.sort((a, b) =>
          collator.compare(a[this.state.sort.column], b[this.state.sort.column])
        );
      } else {
        filterRecords.sort((b, a) =>
          collator.compare(a[this.state.sort.column], b[this.state.sort.column])
        );
      }
    }

    let filterValue = this.state.filter_value;

    if (filterValue) {
      filterRecords = this.filterData(filterRecords);
    }

    nonFilterAllRecords = filterRecords;

    totalRecords = this.props.records.length;

    pages = this.pages = this.numPages(totalRecords);

    isFirst = this.isFirst();
    isLast = this.isLast();
    filterRecords = this.paginate(filterRecords);

    let startRecords =
      this.state.page_number * this.state.page_size -
      (this.state.page_size - 1);
    let endRecords = this.state.page_size * this.state.page_number;
    endRecords = endRecords > totalRecords ? totalRecords : endRecords;

    let lengthMenuText =
      this.config && this.config.language
        ? this.config.language.length_menu
        : "";
    lengthMenuText = lengthMenuText.split("_MENU_");
    let paginationInfo = this.props.language.info;
    paginationInfo = paginationInfo.replace(
      "_START_",
      this.state.page_number == 1 ? 1 : startRecords
    );
    paginationInfo = paginationInfo.replace("_END_", endRecords);
    paginationInfo = paginationInfo.replace("_TOTAL_", totalRecords);

    let defaultRowIndex = 0;
    this.inputRefs = [];
    let that = this;

    let columnList = [];
    for (let c = 0; c < this.props.columns.length; c++) {
      let columnObj = this.props.columns[c];
      columnList.push({
        key: columnObj.key,
        text: columnObj.text,
        value: columnObj.key,
      });
    }

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
                {this.config.language &&
                _.includes(this.config.language.length_menu, "_MENU_") ? (
                  <select
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
            {this.config.show_filter && (
              <div className="table_filter" style={style.table_filter}>
                <input
                  type="search"
                  className="form-control m-input--pill"
                  placeholder={this.config.language.filter}
                  onChange={this.searchRecords}
                />
              </div>
            )}
            <div className="table_tools" style={style.table_tool}>
              {this.config.button.filterColumns && (
                <select
                  className="form-control"
                  style={style.table_size_dropdown}
                  value={""}
                  onChange={this._onColChange}
                >
                  <option value={""}>
                    {translations(this.state.locale).datatable.columns}
                  </option>
                  {columnList.map(function(columnObj, c) {
                    return (
                      <option key={"col_" + c} value={columnObj.value}>
                        {columnObj.text}
                      </option>
                    );
                  })}
                </select>
              )}
              {this.config.button.excel && (
                <button
                  className="btn btn-primary buttons-excel"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to Excel"
                  style={style.table_tool_btn}
                  onClick={this.props.onExcelExport || this.exportToExcel}
                >
                  <span>
                    <i className="la la-file-excel-o" aria-hidden="true"></i>
                  </span>
                </button>
              )}
              {this.config.button.print && (
                <button
                  className="btn btn-primary buttons-csv"
                  tabIndex="0"
                  aria-controls="configuration_tbl"
                  title="Export to PDF"
                  style={style.table_tool_btn}
                  onClick={this.exportToPDF}
                >
                  <span>
                    <i className="la 	la-file-text-o" aria-hidden="true"></i>
                  </span>
                </button>
              )}
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

                      let hasContextMenu = that.props.contextMenuId;
                      let contextMenuId = record.contextMenuId;
                      let contextMenus = that.props.contextMenus;

                      if (contextMenuId && contextMenuId in contextMenus) {
                        contextMenus = contextMenus[contextMenuId];
                      }

                      this.rowInputRef = React.createRef();
                      this.inputRefs.push(this.rowInputRef);

                      if (Array.isArray(contextMenus)) {
                        hasContextMenu = true;
                      } else {
                        hasContextMenu = false;
                      }
                      defaultRowIndex++;

                      return (
                        <tr
                          key={rowIndex}
                          data-index={rowIndex}
                          className={
                            that.state.selectedRow === rowIndex
                              ? "selected"
                              : ""
                          }
                          onClick={() => this._onSelectRow(rowIndex)}
                        >
                          {this.props.columns.map((column, colIndex) => {
                            return that._renderTd(
                              this.props.staticFirstRow
                                ? defaultRowIndex
                                : rowIndex,
                              colIndex,
                              column,
                              record,
                              hasContextMenu,
                              contextMenus
                            );
                          })}
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={this.props.columns.length} align="center">
                        <div className={"trigger-inner-container"}>
                          {this.config.no_data_text}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
                {this.config.show_footer && nonFilterAllRecords.length > 0 && (
                  <tfoot>
                    <tr className={"selected"}>
                      {this.props.columns.map((column, colIndex) => {
                        if (column.footerSum) {
                          let total = null;
                          try {
                            total = 0;
                            for (
                              let f = 0;
                              f < nonFilterAllRecords.length;
                              f++
                            ) {
                              let filterRecord = nonFilterAllRecords[f];
                              if (filterRecord[column.key].includes(",")) {
                                total =
                                  total +
                                  Number.parseInt(
                                    numberReverseFormat(
                                      filterRecord[column.key],
                                      ",",
                                      ""
                                    )
                                  );
                              } else {
                                total =
                                  total +
                                  Number.parseInt(filterRecord[column.key]);
                              }
                            }
                          } catch (e) {
                            total = null;
                          }

                          return (
                            <td key={"footer_" + column.key}>
                              <div className={"trigger-inner-container"}>
                                {priceFormat(total)}
                              </div>
                            </td>
                          );
                        } else {
                          return (
                            <td key={"footer_" + column.key}>
                              <div className={"trigger-inner-container"}></div>
                            </td>
                          );
                        }
                      })}
                    </tr>
                  </tfoot>
                )}
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

  _renderTd(rowIndex, colIndex, column, rowData, hasContextMenu, contextMenus) {
    let that = this;
    return (
      <td key={"row_" + rowIndex + "_col_" + colIndex + "_key_" + column.key}>
        {hasContextMenu ? (
          <ContextMenuTrigger
            id={
              "cm_" +
              "_row_" +
              rowIndex +
              "_col_" +
              colIndex +
              "_key_" +
              column.key
            }
            attributes={{ test: "zzz" }}
          >
            <div className={"trigger-inner-container"}>
              {this.props.staticFirstRow && colIndex === 0
                ? (this.state.page_number - 1) * this.state.page_size + rowIndex
                : this._renderColCell(column.colType, rowData, column)}
            </div>
          </ContextMenuTrigger>
        ) : (
          <div className={"trigger-inner-container"}>
            {this.props.staticFirstRow && colIndex === 0
              ? (this.state.page_number - 1) * this.state.page_size + rowIndex
              : this._renderColCell(column.colType, rowData, column)}
          </div>
        )}
        {hasContextMenu && contextMenus && contextMenus.length > 0 ? (
          <ContextMenu
            id={
              "cm_" +
              "_row_" +
              rowIndex +
              "_col_" +
              colIndex +
              "_key_" +
              column.key
            }
            onShow={this._onContextMenuShow}
          >
            {contextMenus.map(function(obj, i) {
              return (
                <MenuItem
                  key={i}
                  onClick={() =>
                    that.props.contextMenuItemClick(rowData.id, obj.key)
                  }
                >
                  <i className={"m-nav__link-icon " + obj.iconClassName}></i>
                  <span className="m-nav__link-text">{obj.text}</span>
                </MenuItem>
              );
            })}
          </ContextMenu>
        ) : null}
      </td>
    );
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

  _renderColCell(colType, record, column, rowIndex) {
    switch (colType) {
      case "image":
        return record[column.key] ? (
          <img
            src={record[column.key]}
            className={"circle " + column.className}
          />
        ) : (
          <img
            src={"/images/image_placeholder.jpg"}
            className={"circle " + column.className}
          />
        );
      case "radio":
        return this.props.radioOptions && this.props.radioOptions.length > 0 ? (
          <Form>
            {this.props.radioOptions.map(function(radioObj, i) {
              let checkedStyle = {
                color: "white",
                backgroundColor: "#" + radioObj.color,
                border: "solid 1px #" + radioObj.color,
                boxShadow:
                  "0 5px 10px 2px rgba(" +
                  this.hexToRgb(radioObj.color).r +
                  ", " +
                  this.hexToRgb(radioObj.color).g +
                  ", " +
                  this.hexToRgb(radioObj.color).b +
                  ", " +
                  0.19 +
                  ")",
              };
              let uncheckedStyle = {
                color: "#" + radioObj.color,
                backgroundColor: "white",
                border: "solid 1px #" + radioObj.color,
                boxShadow:
                  "0 5px 10px 2px rgba(" +
                  this.hexToRgb(radioObj.color).r +
                  ", " +
                  this.hexToRgb(radioObj.color).g +
                  ", " +
                  this.hexToRgb(radioObj.color).b +
                  ", " +
                  0.19 +
                  ")",
              };
              return (
                <Form.Field
                  key={record.id + ":" + i}
                  style={{ display: "inline-block" }}
                >
                  {column.hasTooltip ? (
                    <Radio
                      label={radioObj.shortName}
                      data-tip
                      data-tooltip={record.name}
                      name={"radio_" + record.id}
                      value={record.id + "_" + radioObj.id}
                      onChange={this.props.radioOnChange}
                      checked={record.radioTypeId === radioObj.id}
                      className="circle-item"
                      style={
                        record.radioTypeId === radioObj.id
                          ? checkedStyle
                          : uncheckedStyle
                      }
                    />
                  ) : (
                    <Radio
                      label={radioObj.shortName}
                      data-tip
                      name={"radio_" + record.id}
                      value={record.id + "_" + radioObj.id}
                      onChange={this.props.radioOnChange}
                      checked={record.radioTypeId === radioObj.id}
                      className="circle-item"
                      style={
                        record.radioTypeId === radioObj.id
                          ? checkedStyle
                          : uncheckedStyle
                      }
                    />
                  )}
                </Form.Field>
              );
            })}
          </Form>
        ) : (
          <span>&nbsp;</span>
        );
      case "input":
        return (
          <Input
            ref={this.rowInputRef}
            data-id={record.id}
            placeholder=""
            className={record.inputClassName}
            value={record.comment}
            disabled={record.inputDisabled}
            onChange={(e) => {
              this.props.inputOnChange(e, record.id, this.inputRefs);
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
              var code = event.keyCode || event.which;
              if (code === 13) {
                this.props.onInputEnterPress(
                  event,
                  rowIndex,
                  record.id,
                  this.inputRefs
                );
              } else if (code === 38 || code === 40) {
                this.props.onInputUpDownPress(
                  event,
                  rowIndex,
                  record.id,
                  this.inputRefs
                );
              }
            }}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            label=""
            checked={String(record.isChecked) === "1" || !!record.radioTypeId}
            onChange={(e, { checked }) => {
              this.props.checkBoxOnChange(checked, record.id);
            }}
          />
        );
      case "inlineedit":
        return (
          <InlineEdit
            text={record.comment !== null ? record.comment : ""}
            labelClassName="form-control m-input"
            inputClassName="form-control m-input"
            onFocusOut={(e) => {
              this.props.inlineEditOnChange(e, record.id, this.inlineEditRefs);
            }}
            onEnterPress={(e) => {
              this.props.inlineEditOnChange(e, record.id, this.inlineEditRefs);
            }}
          />
        );
      case "html":
        if (column.clickableTd && record.clickable) {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: record[column.key] }}
              onClick={() => {
                this.props.tdClick(column.key, record.id);
              }}
            ></div>
          );
        } else {
          return (
            <div dangerouslySetInnerHTML={{ __html: record[column.key] }}></div>
          );
        }
      default:
        if (column.clickableTd && record.clickable) {
          return (
            <span
              className={column.tdClassName}
              onClick={() => {
                this.props.tdClick(column.key, record.id);
              }}
            >
              {column.priceFormat
                ? priceFormat(record[column.key])
                : record[column.key]}
            </span>
          );
        } else {
          return column.priceFormat ? (
            priceFormat(record[column.key])
          ) : record[column.key] ? (
            record[column.key]
          ) : (
            <span>&nbsp;</span>
          );
        }
    }
  }

  _onContextMenuShow(e) {
    let row = $(e.detail.target).closest("tr");
    if (row) {
      let rowIndex = $(row).data("index");
      this.setState({
        selectedRow: rowIndex,
      });
    }
  }

  _onColChange(e) {
    e.preventDefault();
  }

  exportToExcel() {
    let filterRecords = this.props.records;

    if (this.state.filter_value) {
      filterRecords = this.filterData(filterRecords);
    }

    let rowIndex = 1;
    let records = [];

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
    let filterRecords = this.props.records;

    if (this.state.filter_value) {
      filterRecords = this.filterData(filterRecords);
    }

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
    for (let i in filterRecords) {
      let record = filterRecords[i];
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

  _onSelectRow(rowIndex) {
    this.setState({
      selectedRow: rowIndex,
    });
  }

  updateConfigText() {
    this.config.filename =
      this.config.filename || translations(this.state.locale).list;
    this.config.language = this.props.language;
    this.config.length_menu = this.props.length_menu;
    this.config.language.filter = translations(this.state.locale).action.search;
    this.config.language.info = translations(
      this.state.locale
    ).action.datatable_info;
    this.config.no_data_text = translations(this.state.locale).empty;
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

  searchRecords(e) {
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
}

DataTable.displayName = "NomchDatatable";
DataTable.defaultProps = {
  id: "nomch-react-datatable",
  className: "table table-bordered table-striped",
  locale: "mn",
  columns: [],
  config: {
    button: {
      filterColumns: false,
      excel: false,
      print: false,
    },
    filename: null,
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
    excel_path: null,
  },
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
  records: [],
  contextMenus: [],
  staticFirstRow: true,
  hasCustomSort: false,
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
  tdClick: () => {},
  buttonLeftClick: () => {},
  onExcelExport: null,
};

export default DataTable;
