import { Component } from "react";

class myBtn extends Component {
  render() {
    return (
      <button>
        Ciao, {this.props.myName}. Io sono il tuo primo bottone creato con React
      </button>
    );
  }
}
export default myBtn;
