import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = [];
    this.state.initial = 0;
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/albums`).then((res) => {
      const data = res.data;
      this.setState({ data });
    });
  }

  handleSubmit = () => {
    const { data } = this.state;
    alert(JSON.stringify(data, null, 100));
    console.log(data);
  };

  handleNumber = (e) => {
    let newData = this.state.data.map((data) => {
      return {
        ...data,
        userId: parseInt(e.target.value, 10),
      };
    });
    this.setState({
      data: newData,
    });
  };

  increase = (e) => {
    let newData = this.state.data.map((data) => {
      return {
        ...data,
        userId: e + 1,
      };
    });
    this.setState({
      data: newData,
      initial: e + 1,
    });
  };

  decrease = (e) => {
    let newData = this.state.data.map((data) => {
      return {
        ...data,
        userId: e - 1,
      };
    });
    this.setState({
      data: newData,
      initial: e - 1,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.data.map((obj) => (
            <div className="col-3 my-3">
              <h6 className="d-inline-block">{obj.id}</h6> &nbsp;
              <div className="input-number">
                <button onClick={() => this.increase(this.state.initial)}>
                  +
                </button>
                <div>{obj.userId}</div>
                <button onClick={() => this.decrease(this.state.initial)}>
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
