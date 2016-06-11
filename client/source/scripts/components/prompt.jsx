import React from 'react';
import Paper from 'material-ui/Paper';
import { grey600 } from 'material-ui/styles/colors';
import QuestionGender from './QuestionGender.jsx';
import QuestionAge from './QuestionAge.jsx';
import QuestionGoal from './QuestionGoal.jsx';

const stylePaper = {
  height: '80%',
  width: '40%',
  padding: '30',
  margin: 'auto',
  marginTop: '20',
  textAlign: 'center',
  display: 'block',
  color: grey600,
};

const answer = {
  gender: '',
  age: '',
  goal: '',
};


class PromptBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer };
  }

  render() {
    return (
      <div>
        <Paper className="prompt-background" style={stylePaper} zDepth={3}>
          <div>
            <QuestionGoal answer={this.state.answer} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default PromptBox;
