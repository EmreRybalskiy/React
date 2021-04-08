import React, { Component } from "react";

import "./table.css";
const arr = [
    { id: 1, name: "Vasya", lastName: "Test1" },
    { id: 2, name: "Vova", lastName: "Test2" },
    { id: 3, name: "Petya", lastName: "Test3" },
];
class Table extends Component {
    render() {
        return (
            <div className="holderTable">
                <table>
                    <tbody>
                        {arr.map((el, i) => {
                            return (
                                <tr key={i}>
                                    <td>{el.name}</td>
                                    <td>{el.lastName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
