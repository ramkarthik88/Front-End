import React, { Component } from 'react';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          title: 'Welcome to the Pack!',
          description: 'Welcome to Pack Health! Your personal Health Advisor is here to guide, support, and encourage you on this journey. They will call you soon to say hello and find out a bit more about you. For now, why not watch a short video that explains more about the program?',
        },
        {
          title: '7 strategies to Stop Stress Eating',
          description: 'Do you eat when you are stressed? See our tips to prevent this.',
        },
        {
          title: 'Better sleep means better health!',
          description: 'Do you know about what sleep does for your health?',
        },
        {
          title: 'Overcoming Obstacles to Exercise',
          description: 'Do you know how to overcome the obstacles that are keeping you from exercising? ',
        },
        {
          title: 'How To Start a Symptom Journal',
          description: 'It might feel like an extra to-do on your list, but a symptom journal is important both to your own personal understanding of your health patterns, and for sharing with others like doctors and disability reviewers to help them get what you\'re dealing with',
        },
        {
          title: 'How sleep affects blood sugars (and vice versa)',
          description: 'Do you know how your sleep habits affect your blood sugar numbers?',
        },
        {
          title: 'Top Tips for a Less Painful Prick',
          description: 'Do you know about these tips to make taking your blood sugar less daunting?',
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
