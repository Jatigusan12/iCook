import React, { Component } from 'react'
import { Header, Form, Button } from 'semantic-ui-react'
import '../App.css'
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

export default class Profile extends Component {
    constructor(props){
        super(props)
            this.state={
                Input:''
            }
        
    }
    state= {Input:''}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <div>
                <div className="header">
                    <Header>
                        <img className="logo" alt="icon" src={require('../photos/logo.png')} />
                    </Header>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={this.state.Input}
                                label='First name'
                                placeholder='First name'
                            />
                            <Form.Field
                                control={Input}
                                label='Last name'
                                placeholder='Last name'
                            />
                            <Form.Field
                                control={Select}
                                label='Gender'
                                options={options}
                                placeholder='Gender'
                            />
                        </Form.Group>
                        <Form.Group inline>
                            <label>Quantity</label>
                            <Form.Field
                                control={Radio}
                                label='One'
                                value='1'
                                checked={value === '1'}
                                onChange={this.handleChange}
                            />
                            <Form.Field
                                control={Radio}
                                label='Two'
                                value='2'
                                checked={value === '2'}
                                onChange={this.handleChange}
                            />
                            <Form.Field
                                control={Radio}
                                label='Three'
                                value='3'
                                checked={value === '3'}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label='About'
                            placeholder='Tell us more about you...'
                        />
                        <Form.Field
                            control={Checkbox}
                            label='I agree to the Terms and Conditions'
                        />
                        <Form.Field control={Button}>Submit</Form.Field>
                    </Form>
                </div>
            </div>
        );
    }
}