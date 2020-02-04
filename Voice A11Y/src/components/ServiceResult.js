import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Services from "./Services";
import Axios from "axios";
import Item from "./Item";
class ServiceResult extends Component {
  state = {
    data: [],
    cmd: ""
  };
  componentDidMount() {
    let cmd = this.props.history.location.pathname.split("/")[2];
    //console.log(cmd)
    let id = localStorage.getItem("id");
    if (cmd === "class") {
      Axios.get("/amis/2").then(result => {
        console.log(result.data);
        let d = [];
        result.data.forEach(element =>
          d.push({ ch1: element.name, ch2: element.email })
        );

        this.setState({ data: d, cmd: cmd });
      });
    }
    if (cmd === "grades") {
      Axios.get("/api/notes", { headers: { Accept: "application/json" } }).then(
        result => {
          console.log(result.data);
          let d = [];
          result.data.forEach(element =>
            d.push({ ch1: element.subject, ch2: element.value + "/20" })
          );

          this.setState({ data: d, cmd: cmd });
        }
      );
    }

    if (cmd === "events") {
      Axios.get("/api/events", {
        headers: { Accept: "application/json" }
      }).then(result => {
        console.log(result.data);
        let d = [];
        result.data.forEach(element =>
          d.push({ ch1: element.place, ch2: element.date })
        );

        this.setState({ data: d, cmd: cmd });
      });
    }
  }

  render() {
    const items = this.state.data.map(item => {
      console.log(item);
      return <Item key={item.id} name={item.ch1} email={item.ch2} />;
    });

    return (
      <div className="flex h-screen">
        <Services></Services>
        <div className='text-white pl-10 '>
          <h4>Your {this.state.cmd}</h4>
          
        </div>
        
        <div  className='text-white pt-10'>{items}</div>
      </div>
    );
  }
}

export default withRouter(ServiceResult);
