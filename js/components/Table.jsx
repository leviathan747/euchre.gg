import React from 'react';

const style = {
  position: 'fixed',
  padding: '0',
  margin: '0',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundImage: 'url(\'/static/images/table.jpg\')',
  backgroundColor: 'green'
};

export default function Table(props) {
  return (
    <div style={style}>
      {props.children}
    </div>
  );
}
