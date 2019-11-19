import React, { Component } from 'react'
import { Header, Container, Image ,Form, Input} from 'semantic-ui-react'
import '../App.css';



class Profile extends Component {

  render() {

    return (
      <div className="Cover">
        <Header as='h2' icon textAlign='left' style={{ height: 200 }}>
          <Image circular src={require('../photos/logo.png')} />
        </Header>
        <Container style={{ height: 200 , width:1600}}>
          <Form>
            
            <Form.Group widths='equal'>
              <Form.Field label="What's my Dish?" style={{  width:400 }}/>
              <Form.Input fluid placeholder='Name of your Dishes..' />
              <Input type='file' fluid/>
              <Form.Input fluid placeholder='Description' />
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Profile