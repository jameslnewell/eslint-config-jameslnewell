import React from 'react';

/**
 * The app
 */
export default class App extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>
          Hello World!
        </h1>
        <input type="checkbox" checked/>
      </div>
    );
  }

}
