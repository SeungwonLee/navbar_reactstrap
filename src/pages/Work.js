import React from 'react'
import '../css/work.css'
import { Badge } from 'reactstrap';

const Work = () => {
  return (
    <div class="container">
      <p><h5>LINE Android developer</h5></p>
      <p><div class="title">Overlay stickers</div> </p>
      <div class="since title-margin">2019</div>
      <div class="description_title font-weight-bold">Description</div>
      <div class="description description-margin">Overlay video with stickers</div>

      <div class="tech font-weight-bold">Used :{' '}
        <Badge color="secondary">Kotlin</Badge>{' '}
        <Badge color="secondary">OpenGL ES</Badge>
      </div>

    </div>
  );
}

export default Work;