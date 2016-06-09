import React from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
}
  from 'material-ui/Table';

// const styles = {
//   propContainer: {
//     width: 200,
//     overflow: 'hidden',
//     margin: '20px',
//   },
//   propToggleHeader: {
//     margin: '20px auto 10px',
//   },
// };

export default class WorkoutTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '400px',
      tableData: [
        {
          name: 'John Smith',
          status: 'Employed',
          selected: true,
        },
        {
          name: 'Randal White',
          status: 'Unemployed',
        },
        {
          name: 'Stephanie Sanders',
          status: 'Employed',
          selected: true,
        },
        {
          name: 'Steve Brown',
          status: 'Employed',
        },
        {
          name: 'Joyce Whitten',
          status: 'Employed',
        },
        {
          name: 'Samuel Roberts',
          status: 'Employed',
        },
        {
          name: 'Adam Moore',
          status: 'Employed',
        },
      ],
    };
  }

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange(event) {
    this.setState({ height: event.target.value });
  }

  //   // fetch quotes before component is rendered
  componentWillMount() {
    // axios.get('/api/workouts')
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (response) {
      //   console.log(response);
      // });
  }

  // grabs the resulting quotes from state, iterates over all of them and
  // creates a new quote instance for each one
  // _renderQuotes() {
  //   console.log(this.state.quotes);
  //   return this.state.quotes.map(quote =>
  //     <Quote
  //       author={quote.author} body={quote.body} key={quote.id}
  //     />
  //   );
  // }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan="7" tooltip="Super Header"
                style={{ textAlign: 'center' }}
              >
                Weekly Workout Routine
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Day">Day</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 1</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 2</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 3</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 4</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 5</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 6</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.tableData.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}



// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//
//     // set initial state of component
//     this.state = {
//       quotes: [
//         {
//           id: 1,
//           author: 'Oscar Wilde',
//           body: 'Always forgive your enemies; nothing annoys them so much.',
//           tags: ['advice', 'annoyance', 'forgiveness', 'people'],
//           words: 9,
//           published: '05/23/2014',
//           pictures: [
//             'http://img.quotery.com/pictures/2013/11/forgive-your-enemies.jpg',
//           ],
//         },
//       ],
//     };
//   }
//
//
//   render() {
//     const quotes = this._renderQuotes() || [];
//     return (
//       <main className="o-container">
//         {quotes}
//       </main>
//     );
//   }
// }
//
// export default Main;
