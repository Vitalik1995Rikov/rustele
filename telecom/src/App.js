import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SearchPanel from './search-panel';
import PostList from './post-list';


class App extends Component {
  constructor(props){
    super(props);
      this.state = { todos: [], term: ''};
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
}
  
  
  async componentDidMount() {
    let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    this.setState({todos: result.data})
  }

  onUpdateSearch(term) {
    this.setState({term})
} 

searchPost (items, term) {
  if (term.lenght === 0) {
      return items
  }
  return items.filter((item) => {
      return item.title.indexOf(term) > -1
  });
}

  render () {

const {todos, term} = this.state;
const visiblePosts = this.searchPost(todos, term);

    return (
<div className="container">
<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
      {this.state.todos.length > 0 ? (
      <div><PostList posts={visiblePosts}/></div>) : <div>Не гони, обожди</div>} 
</div>
      );
  } 
}

export default App;
