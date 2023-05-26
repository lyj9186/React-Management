import { render } from '@testing-library/react'
import React from 'react'

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} img={this.props.img} name={this.props.name} />
                <CustomerInfo brithday={this.props.brithday} job={this.props.job} />
        </div>
        )

    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src = {this.props.img} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.brithday}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;
