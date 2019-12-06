import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Services from "./Services";
import Axios from "axios";
import Item from "./Item";
class ServiceResult extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    let cmd = this.props.history.location.pathname.split("/")[2];
    //console.log(cmd)
    let id = localStorage.getItem("id");
    if (cmd === "class") {
      Axios.get("/users").then(result => {
          console.log(result.data)
          let d = [];
          result.data.forEach(element => d.push({ch1:element.name,ch2:element.email}));
          
        this.setState({ data: d });
      });
    }
    if (cmd === "grades") {
        Axios.get("/todos").then(result => {
            console.log(result.data)
            let d = [];
            result.data.forEach(element => d.push({ch1:element.title,ch2:element.completed}));
            
          this.setState({ data: d });
        });
      }
  }

  render() {
    const items = this.state.data.map(item => {
      console.log(item);
      return <Item key={item.id} name={item.ch1} email={item.ch2} />;
    });

    return (
      <div className="flex">
        <Services></Services>
        <div>{items}</div>
      </div>
    );
  }
}

export default withRouter(ServiceResult);
