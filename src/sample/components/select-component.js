import React, { Component } from 'react';

export class SelectComponent extends Component {
    render() {
        const options = this.props.values && this.props.values.map((v, k) => {
            return (
                <option key={k} value={v} >{v}</option>
            )
        })
        return (
            <select value={this.props.selectedValue} onChange={this.props.selectEvent} disabled={this.props.isEnabled}>
                {options}
            </select>
        )
    }
}