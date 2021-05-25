import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {gameName: 'APEX', rank: 'Platinum', sfx: 'PEW PEW PEW PEW PEW'};

    this.handleGameNameChange = this.handleGameNameChange.bind(this);
    this.handleRankChange = this.handleRankChange.bind(this);
    this.handleSFXChange = this.handleSFXChange.bind(this);
  }

  handleGameNameChange(event) {
    this.setState({gameName: event.target.value});
  }

  handleRankChange(event) {
    this.setState({rank: event.target.value});
  }

  handleSFXChange(event) {
    this.setState({sfx: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <h1 class="text-center">Kureiji Ollie APEX Generator</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formGameName">
                  <Form.Label>Game Name:</Form.Label>
                  <Form.Control type="text" value={this.state.gameName} onChange={this.handleGameNameChange}/>
                </Form.Group>
                <Form.Group controlId="formRank">
                  <Form.Label>Rank:</Form.Label>
                  <Form.Control type="text" value={this.state.rank} onChange={this.handleRankChange} />
                </Form.Group>
                <Form.Group controlId="formSFX">
                  <Form.Label>SFX:</Form.Label>
                  <Form.Control type="text" value={this.state.sfx} onChange={this.handleSFXChange}  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
                Ok, so allow me to explain a little about {this.state.gameName}. So {this.state.gameName} is a serotonin as stimulus a pleasure of joy and magical keeper of continent. 
                So, it's always has a mysterious powers that keeps adrenaline rush that we all need in our lives. 
                It's a sanctuary for everyone to recollect and enjoy the bliss of gun chests and armor cracks. 
                It's also what unites us into one and breaks loneliness with teamwork. 
                It's the most reassuring thing in the world ever and just having a dangling in your desktop without playing it, giving streams and comfort. 
                If you don't have any friends, it will give you two. If you want some alone time you can go to firing range. 
                There is nothing more enjoyable than a game of {this.state.gameName}. 
                So if anything, please download {this.state.gameName} and come to the {this.state.rank} WITH ME RIGHT NOW LET'S GO {this.state.sfx}!!!
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
