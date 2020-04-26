import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

class MainPage extends Component {
  constructor() {
    super();

    this.keyframes = this.keyframes.bind(this);
  }


  keyframes() {
    console.log('lol');
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          {/* <a style={{ color: 'black' }} href="/about-me"><FontAwesomeIcon icon={faGhost} size={"3x"} /></a> */}
          {/* <div className='pulse'>Ciera</div> */}
            <Header />
        </div>
        {/* <img src='https://via.placeholder.com/150' className='pulse' /> */}
        {/* <div id="cf3">
          <img className="bottom" src="https://via.placeholder.com/150" />
          <img className="top" src="https://avatarfiles.alphacoders.com/310/thumb-31046.jpg" />
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        <div className='row justify-content-center'>
          <div className="col">
            <div style={{ marginTop: '-2em', textAlign: 'center', marginRight: '8px', marginBottom: '2em' }}>
              <form action="/about-me" style={{ display: 'inline-block' }} >
                <input className='hire' type="submit" value="About me" />
              </form>
              <form action="/" style={{ display: 'inline-block', marginRight: 30, marginLeft: 30 }}>
                <input className='hire pulse' type="submit" value="R L" style={{ fontStyle: 'italic', fontWeight: 'bolder', borderStyle: 'double' }} />
              </form>
              <form action="/projects" style={{ display: 'inline-block' }}>
                <input className='hire' type="submit" value="Projects" />
              </form>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

function mapStoreToProps(store) {
  return {

  }
}

export default connect(mapStoreToProps)(MainPage);
