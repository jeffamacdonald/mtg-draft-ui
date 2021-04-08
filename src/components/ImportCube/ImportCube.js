import React, { Component } from "react";
import CubeService from "../../services/cube.service";

export default class ImportCube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: undefined,
      cubeName: undefined,
      progress: 0,
      message: "",
    };

    this.selectFile = this.selectFile.bind(this);
    this.setName = this.setName.bind(this);
    this.import = this.import.bind(this);
  }

  selectFile(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  setName(event) {
    this.setState({
      cubeName: event.target.value
    });
  }

  import() {
    this.setState({
      progress: 0,
    });

    CubeService.import(this.state.selectedFile, this.state.cubeName, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
    .then((response) => {
      this.setState({
        message: response.data.message,
      });
      return response;
    })
    .catch(() => {
      this.setState({
        progress: 0,
        message: "Could not upload the file!",
        selectedFile: undefined,
        cubeName: undefined,
      });
    });
  }

  render() {
    const {
      selectedFile,
      cubeName,
      progress,
      message,
    } = this.state;

    return (
      <div>
        {selectedFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <label style={{ margin: "10px" }}>Cube Name</label>
        <input type="cubename" onChange={this.setName} />
        <label className="btn btn-default">
          <input type="file" onChange={this.selectFile} />
        </label>
        <button className="btn btn-success"
          disabled={!this.state.cubeName}
          onClick={this.import}
        >
          Import
        </button>

        <div className="alert alert-light" role="alert">
          {message}
        </div>
      </div>
    );
  }
}
