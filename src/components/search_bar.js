import React from 'react';
import ReactDom from 'react-dom';
//johnsaida 
class SearchBar extends React.Component {
constructor(props){
super(props);
  this.state={term:''};
}
render(){
  return(
    <div className="search-bar new class name">
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
