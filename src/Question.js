import React from 'react';

export default class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answerStatusText: "."
    };
  }

  checkAnswer = (guess) => {
    let correctAnswer = this.props.question.person;
    if (guess === correctAnswer) {
      this.setState({answerStatusText: "That's right! Great job"});
    } else {
      this.setState({answerStatusText: "Wrong!"});
    }

  };

  getPeople = (people) => {
    return people.map((person, idx) => {
      return <span key={idx} style={{padding: "0 20px"}}>
        <button style={{padding: 0}} onClick={() => this.checkAnswer(person)}>
          <img alt="pic1" src={person.image} height="300"></img>
        </button>
      </span>
    });
  }

  render() {
    return <div>
      <h2>{this.props.question.questionText}</h2>
      <h2>{this.state.answerStatusText}</h2>
      {this.getPeople(this.props.question.people)}
    </div>;
  }
}