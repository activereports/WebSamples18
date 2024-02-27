import React, {Component} from "react";

export default class ReportList extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar-header"> Select report</div>
                <div className="horizontal-separator"></div>
                <ul className="navbar" id="reportsList">
                    {this.props.items.map(name => (
                        <li className={"navbar-item" + (name === this.props.selectedReport ? " active" : "")}
                            key={name} onClick={() => {
                            this.props.selectReport(name)
                        }}>
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}