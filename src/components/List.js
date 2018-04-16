import React from 'react';

const List = props => (
  <div>
    {
      props.items.map((item, index) => <div key={index}>{item.title}</div>)
    }
  </div>
);

export default List;