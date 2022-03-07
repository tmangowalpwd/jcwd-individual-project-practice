import React from "react";

class HomeClass extends React.Component {
  state = {
    username: "",
    fullName: "",
  };

  componentDidMount() {
    alert("component did mount");
  }

  componentDidUpdate() {
    alert("Terjadi perubahan state");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ username: "seto" })}>
          change username
        </button>
        <br />
        <button onClick={() => this.setState({ fullName: "mark" })}>
          change full name
        </button>
        <h1>Home Class!</h1>
        <h1>{this.state.username}</h1>
      </div>
    );
  }
}

export default HomeClass;
