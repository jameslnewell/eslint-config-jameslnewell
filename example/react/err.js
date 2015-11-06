import React from 'react';

export default class extends React.Component {

  constructor(props, context) {
    this.props.foo = 'bar';
    super(props, context);
  }

  render() {
    return <div>
      <h1>
        Hello World!
      </h1>
      <input type="checkbox" checked={true}/>
    </div>;
  }

}
