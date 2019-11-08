import React, { Component } from 'react';
import { Picture } from './picture';
import { Details } from './details';
import { Registration } from './registration';

export class Course extends Component{
  render() {
    return (
      <div style={{float: 'left', border: '1px solid blue', borderRadius: '10px', padding: '10px', margin: '10px'}}>
        <Picture/>
        <Details/>
        <Registration/>
       </div>
    );
  }
}
