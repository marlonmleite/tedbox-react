import React, { PureComponent, Component } from 'react'

class SimpleText extends Component {
  total = 0

  render() {
    this.total++;

    return (
      <p style={{ color: 'red' }}>Estou renderizando sem necessidade, total de renderizações: {this.total}</p>
    )
  }
}

class Timer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ fontSize: '1.5rem' }}>
        Segundos: {this.state.seconds}
        <SimpleText />
      </div>
    );
  }
}

export default Timer
