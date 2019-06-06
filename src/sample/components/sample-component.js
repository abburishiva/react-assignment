import React, { Component } from 'react';
import { SelectComponent } from './select-component';
import PropTypes from 'prop-types';
export class SampleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.selected
        }
    }
    handleChange = () => {
        const value = !this.state.isChecked;
        this.setState({ isChecked: value });
        this.props.seletedContainerStatus && this.props.seletedContainerStatus(this.props.compId, value)
    }
    render() {
        const selectedContainer = this.props.selected ? "selected" : "";
        return (
            <div className="row main-div">
                <div className="col-md-12 div-header">
                    {this.props.compId === 1 ? null : <input type="checkbox"
                        checked={this.props.selected}
                        onChange={this.handleChange} />}
                    Room {this.props.compId}
                </div>
                <div className={"col-md-12 row div-body " + selectedContainer}>
                    <div className="col-md-6">
                        <span>Adults</span><br />
                        <span>(18+)</span><br />
                        <SelectComponent
                            values={this.props.adultsValue && this.props.adultsValue.length ? this.props.adultsValue : []}
                            selectEvent={(event) => this.props.adultCountChange(event, this.props.compId)}
                            isEnabled={this.props.compId === 1 ? this.props.selected : !this.props.selected} />
                    </div>
                    <div className="col-md-6">
                        <span>Childrens</span><br />
                        <span>(0-17)</span><br />
                        <SelectComponent
                            values={this.props.childrensValue && this.props.childrensValue.length ? this.props.childrensValue : []}
                            selectEvent={(event) => this.props.childrenCountChange(event, this.props.compId)}
                            isEnabled={this.props.compId === 1 ? this.props.selected : !this.props.selected} />
                    </div>
                </div>
            </div>
        )
    }
}


SampleComponent.propTypes = {
    compId: PropTypes.number,
    selected: PropTypes.bool,
    seletedContainerStatus: PropTypes.func,
    adultsValue: PropTypes.array,
    childrensValue: PropTypes.array,
    childrenSelectedValue: PropTypes.number,
    adultSelectedValue: PropTypes.number
};