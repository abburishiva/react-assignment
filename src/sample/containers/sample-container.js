import React, { Component } from 'react';
import { SampleComponent } from '../components/sample-component';
export class SampleContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedContainer: 1,
            adultCount: 1,
            childCount: 0,
            eventContainerid: 1
        }
    }

    selectedContainerStatus = (id, value) => {
        if (value) {
            this.setState({ selectedContainer: parseInt(id, 10) })
        } else {
            this.setState({ selectedContainer: 1 })
        }
    }

    adultCountChange = (event, id) => {
        this.setState({ adultCount: parseInt(event.target.value, 10), eventContainerid: id });
    }

    childrenCountChange = (event, id) => {
        this.setState({ childCount: parseInt(event.target.value, 10), eventContainerid: id });
    }



    render() {
        return (
            <div className="container">
                <div className="container row">
                    <SampleComponent
                        compId={1}
                        adultsValue={[1, 2]}
                        childrensValue={[0, 1, 2]}
                        seletedContainerStatus={this.selectedContainerStatus}
                        selected={this.state.selectedContainer > 1 ? true : false}
                        adultCountChange={this.adultCountChange}
                        childrenCountChange={this.childrenCountChange}
                    />
                    <SampleComponent
                        compId={2}
                        adultsValue={[1, 2]}
                        childrensValue={[0, 1, 2]}
                        seletedContainerStatus={this.selectedContainerStatus}
                        selected={this.state.selectedContainer >= 2 ? true : false}
                        adultCountChange={this.adultCountChange}
                        childrenCountChange={this.childrenCountChange}
                    />
                    <SampleComponent
                        compId={3}
                        adultsValue={[1, 2]}
                        childrensValue={[0, 1, 2]}
                        seletedContainerStatus={this.selectedContainerStatus}
                        selected={this.state.selectedContainer >= 3 ? true : false}
                        adultCountChange={this.adultCountChange}
                        childrenCountChange={this.childrenCountChange}
                    />
                    <SampleComponent
                        compId={4}
                        adultsValue={[1, 2]}
                        childrensValue={[0, 1, 2]}
                        seletedContainerStatus={this.selectedContainerStatus}
                        selected={this.state.selectedContainer >= 4 ? true : false}
                        adultCountChange={this.adultCountChange}
                        childrenCountChange={this.childrenCountChange}
                    />
                </div>
                <input type="submit" className="btn btn-success" />
            </div>
        )
    }
}