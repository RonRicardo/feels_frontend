import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom';

const SignUpForm = () => (
  <div className='signup-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.signup-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='pink' textAlign='center'>
          Create a new account!
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='heart' iconPosition='left' placeholder='Username' />
            <Form.Input
              fluid
              icon='key'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='pink' fluid size='large'>
              Create
            </Button>
          </Segment>
        </Form>
        <Link to="/login">Log In</Link>
      </Grid.Column>
    </Grid>
  </div>
)

export default SignUpForm
