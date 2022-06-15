import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json'
// import App from './App.js';

class Main extends React.Component {
  render() {
    let beasts = data.map((beast, index) => {
      
       return <HornedBeast
        title={beast.title}
        imageUrl={beast.image_url}
        description={beast.description}
        key={index}
        />
      
  })
    
    return (
      
      <main>

        {beasts}
        
      </main>
      
    );
  }
}

export default Main;