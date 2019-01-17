import React, {Component} from 'react';
import Map from './Map';
import './App.css';
import './Responsive.css';

/* Main page that renders the map, header and footer */

class MainPage extends Component {
  render() {
    return(
      <div id = 'App'>
        <header>Udacity Neighborhood Map Project</header>
        <div id = 'main'>
          <Map />
        </div>
        <footer>Student: Jamie Martinez</footer>
      </div>
    );
  }
}

 export default MainPage
