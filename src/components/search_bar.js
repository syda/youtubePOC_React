import React from 'react';
import ReactDom from 'react-dom';

class SearchBar extends React.Component {
constructor(props){
super(props);
  this.state={term:''};
}
render(){
  return(
    <div className="search-bar">
    <input onChange={event => this.onInputChange(event.target.value)}/>
    <hr></hr>
  </div>);
}

onInputChange(term){
this.setState({term})
this.props.onSearchTermChange(term)
}
}
export default SearchBar;
