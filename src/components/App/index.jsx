import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserItem from 'UserItem'

const dataFieldName = 'usersData';

const testData = [
  {
    id: 1,
    fio: 'Harry Potter',
    birthDate: '31-07-1980',
    city: 'London',
    address: 'address',
    phone: 'phone'
  }
]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: testData
    }
  }
  getData() {
    const jsonData = localStorage.getItem(dataFieldName);
    return jsonData ? JSON.parse(jsonData) : testData
  }

  render() {
    return (
      <div className="data">
        <div className="data-list">
          {this.state.data.map(dataItem => {
            return <UserItem
              key={dataItem.id}
              {...dataItem}
            />
          })}
        </div>

      </div>
    );
  }
}

App.propTypes = {

};

export default App;
