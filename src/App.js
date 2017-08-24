import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'
import './App.css'

class BooksApp extends React.Component {
  state = {
		allBoooks: [],
	}
	
	componentDidMount() {
		this.getMyReadingList()		
	}
	
  getMyReadingList() {
		BooksAPI.getAll()
		.then((resp) => {
			this.setState({
				allBoooks: resp,
			})
		})
	}

	updateBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
		.then(() => {
      book.shelf = shelf;
      console.log(this.setState(state => (state.allBoooks.filter(item => !!(item.id !== book.id)))))
      this.setState(state => (state.allBoooks.filter(item => !!(item.id !== book.id))).concat([book]))
      console.log(this.state.allBoooks)
		})
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <MyReads allBoooks={this.state.allBoooks} updateBookShelf={this.updateBookShelf}/>
        )}/>
        <Route path="/search" render={()=>(
          <SearchBooks updateBookShelf={this.updateBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
