import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return(
      
      <main>
        <HornedBeast name="Beast1"/>
        <HornedBeast name="Beast2"/>
        <HornedBeast name="Beast3"/>
      </main>
      
    );
  }
}

export default Main;