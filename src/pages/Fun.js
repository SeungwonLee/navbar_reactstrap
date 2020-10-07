import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

class Fun extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-6">
            <Card>
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1563725911583-7d108f720483" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div class="col-6">
            <Card>
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1563725911583-7d108f720483" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
        <hr></hr>
        <div class="row">
          <div class="col-6">
            <Card>
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1563725911583-7d108f720483" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div class="col-6">
            <Card>
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1563725911583-7d108f720483" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Fun;
