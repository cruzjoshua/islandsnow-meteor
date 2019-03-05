import React from 'react';
import { Container, Grid, List, Input, Label } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Container>
            <Grid columns={3}>
              <Grid.Column>
                <br/>
                NAVIGATION
                <hr/>
                <List>
                  <List.Item>About us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <br/>
                MAIN MENU
                <hr/>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <br/>
                CONNECT
                <hr/>
                <List>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <Input placeholder='Enter Email Address'/>
                  <Label color='black'>Join</Label>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
