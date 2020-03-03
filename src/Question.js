import React from 'react';
import styled from 'styled-components'

export default class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  checkAnswer = (guess) => {
    let correctAnswer = this.props.question.person;
    if (guess === correctAnswer) {
      this.props.right();
    } else {
      this.props.wrong();
    }

  };
 

  getPeople = (people) => {
    return people.map((person, idx) => {
      return <span key={idx} style={{padding: "0 20px"}}>
        <Button onClick={() => this.checkAnswer(person)}>
          <Picture alt={'photo of ' + person.firstName + ' ' + person.lastName}
            src={person.image}></Picture>
        </Button>
      </span>
    });
  }

  render() {
    return <div>
      <h2>{this.props.question.questionText}</h2>
      {this.getPeople(this.props.question.people)}
    </div>;
  }
}

const Button = styled.button`
  cursor: pointer;
  padding: 0;
`;

const Picture = styled.img`
  height: 250px;
`;