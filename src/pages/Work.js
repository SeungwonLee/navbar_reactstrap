import React, { Component } from 'react'
import '../css/work.css'
import { Badge } from 'reactstrap';
import api from '../api'

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      experiences: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllExperiences().then(experiences => {
      this.setState({
        experiences: experiences.data.data,
        isLoading: false,
      })
      console.log('Connected to experiences!' + experiences);
    })
  }

  render() {
    const { experiences, isLoading } = this.state
    return (
      <div class="container">
        {
          experiences.map((item, index) => (
            <div>
              <br /><br /><br />
              <p><h5>{item.title}</h5></p>
              <p><div class="title">{item.sub_title}</div> </p>
              <div class="since title-margin">{item.start_time}~{item.end_time}</div>
              <div class="description_title font-weight-bold">Description</div>
              <div class="description description-margin">{item.description}</div>

              <div class="tech font-weight-bold">Used :{' '}
                <Badge color="secondary">Kotlin</Badge>{' '}
                <Badge color="secondary">OpenGL ES</Badge>
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default Work;
