import React from "react";
import { InsertBar } from "../InsertBar";

export class ToDoRow extends React.Component {
    constructor() {
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
          fromChild: ''
        };
      }
      
      handleData(data) {
        this.setState({
          fromChild: data
        });
      }
      
      render() {
        return (
          <div>
            <InsertBar handlerFromParant={this.handleData} /> 
            <h5>Tarefas</h5>
            <div>{this.state.fromChild}</div>
          </div>
        );
      }
    }
