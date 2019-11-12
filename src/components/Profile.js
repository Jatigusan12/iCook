import React, { Component } from 'react'
import {  Form, Input} from 'semantic-ui-react'
import '../App.css'

export default class Profile extends Component {
    constructor(props){
        super(props)
            this.state={
                Input:''
            }
        
    }
    state= {Input:''}


    render() {
        // const { value } = this.state
    return (
      <Form>
          <Form.Field label="What's My Dish?"/>
        <Form.Group widths='equal'>

          <Form.Input fluid placeholder='Dish Name' />
          <Input type='file' fluid id='ImageUpload'/>
          <Form.Input fluid placeholder='Description'/>
        </Form.Group>
        <Form.Group inline>

        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
    }
}