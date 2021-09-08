import React from 'react';
import { InsertBar } from '../InsertBar';
import { ToDoRow } from '../ToDoRow';

export class ToDoTable extends React.Component {
    render() {

        return(
            <div className="TodoTable">
            <ToDoRow />
        </div>
        );
     
    }
}