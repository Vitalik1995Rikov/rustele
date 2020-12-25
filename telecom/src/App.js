import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import SearchPanel from './search-panel';
import PostList from './post-list';
import PostStatusFilter from './post-status-filter';


class App extends Component {
  constructor(props){
    super(props);
      this.state = { todos: [], term: '', filter: 'all'};
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
      this.onFilterSelect = this.onFilterSelect.bind(this);
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


filterPost (items, filter) {
  if (filter === "completed") {
  return items.filter(item => item.completed)
} else {
  return items
  }
}

onFilterSelect (filter) {
  this.setState({filter})
}


  render () {

const {todos, term, filter} = this.state;
const visiblePosts = this.filterPost(this.searchPost(todos, term), filter);

    return (
<div className="all">
<div className="container">
    <div className='header'>
      <div>
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
      </div>
      <div>
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
      </div>
    </div>
    <div>
        <PostList posts={visiblePosts}/>
    </div>
    
</div>
</div>
    );
  } 
}

export default App;
