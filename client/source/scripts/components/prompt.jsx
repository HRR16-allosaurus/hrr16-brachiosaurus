import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { grey600 } from 'material-ui/styles/colors';

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

const styleButton = {
  margin: 12,
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
        <Paper className="prompt-background" style={stylePaper} zDepth={3}>
      <div>
        <h2>What is your goal?</h2>
        <Link to="/workout1">
          <RaisedButton
            label="Build Muscle" primary style={styleButton}
          />
        </Link>
        <Link to="/workout2">
          <RaisedButton
            label="Lose Fat" secondary style={styleButton}
          />
        </Link>
      </div>
        </Paper>
    );
  }
}

export default PromptBox;
