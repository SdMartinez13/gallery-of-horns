import React from 'react';
import { Button } from 'react-bootstrap';
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: 0
    };
  };

handleFaves = () => {
  this.setState({

      faves: this.state.faves + 1,
      
  });
};

  render() {
    return (
      <article>
        <>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>❤️ {this.state.faves} Favorites</p>
        {/* <p onClick={this.handleFaves}>Click here to make your favorite</p> */}
          
        <img 
          src={this.props.imageUrl} 
          alt={this.props.description} 
          title={this.props.title}/>
        
          <Button variant="outline-primary" onClick={this.handleFaves}>Click Here!</Button>

        
      </>
      </article>
    );
  }
}

export default HornedBeast;