// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class ThemedDecorations extends React.Component{
  render(){
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

  return (
    <div>
      {childrenWithExtraProp}
    </div>
  );
  }
}

export default ThemedDecorations;
