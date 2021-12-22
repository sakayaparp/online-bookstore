// type tHead = any;
// type tBody = any;
import React from "react";

const TableCustome = (props) => {
  const { thead, tbody } = props;

  return (
    <table border="1">
      <thead data-testid="table-header">
        <tr>
          {Object.keys(thead).map((item, index) => {
            return <th key={index}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody data-testid="table-body">
        {tbody.map((row, index) => {
          return (
            <tr key={index}>
              {Object.keys(row).map((item, index) => {
                return <td key={index}>{row[item]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableCustome;
