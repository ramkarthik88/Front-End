import React, {Component} from 'react';
import ListItem from './ListItem';
import listStyles from '../styles/List.css';

export default class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.items.map((item, index) => 
              <ul key={index}>
                <ListItem title={item.title} 
                  description={item.description} 
                  onClick={this.onClick}
                  listStyles={listStyles}/>
              </ul>
            )
        }
      </div>
    )
  }

}