import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

export default class DraftInfoTable extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <Table borderless>
          <tr>
            <th>Draft Name</th>
            <th>Active Player</th>
          </tr>
          {
            this.props.tableBody.map((row, i) =>
              <tr key={i}>
                <td>{row['name']}</td>
                <td>{row['active_participant']['display_name'] || "--"}</td>
              </tr>
            )
          }
        </Table>
      </div>
    )
  }
}
