import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import rot13 from './code'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phrase: "",
    };
  }

// sets phrase string to the string entered in textarea
updatePhrase (phrase) {
  this.setState( {phrase});
}

  render() {

    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    var outputStyle = {
      width: "400px",
      height: "60vh",
      backgroundColor: "#ffe",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
      overflow: "auto"
    };
    return (
      <div className='App'>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col text-center'>
              <h1>
                Caesar's Cipher
              </h1>
              <p>
                This program takes a string of letters and outputs the encrypted string. The encryption involves substituting each letter with the letter 13 positions down from the alphabet, looping back if necessary.
              </p>
            </div>
          </div>

          <div className='row mt-4'>
            <div className='col-md-6'>
              <div className='col text-center'>
                <h4>
                  Input string here:
                </h4>
              </div>
              <div className='input' style={inputStyle}>
                <textarea
                className='input'
                style={inputStyle} 
                value={this.state.phrase}
                placeholder="Enter phrase to be encrypted"
                onChange = {(e) => {
                  this.updatePhrase(e.target.value)
                }}
                >
                  {console.log(this.state.phrase)}
                </textarea>
              </div>
            </div>


            <div className='col-md-6'>
              <div className='col text-center'>
                <h4>
                  Encrypted string:
                </h4>
              </div>
              <div style={outputStyle}>
                {rot13 (this.state.phrase)}
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default App;
