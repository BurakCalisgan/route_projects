import React, { Component } from 'react'

 class Footer extends Component {
     constructor(props){
         super(props);
     }
  render() {
      const {title} = this.props;
    return (
      <div>
        <hr/>
          <h3>
          {title}
          </h3>
        <hr/>
      </div>
    )
  }
}
export default Footer;