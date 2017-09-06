import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    booksInShelf: {},
	}
	
	componentDidMount() {
		this.getMyReadingList()		
  }
  
  updateBooksInShelf() {
    const booksInShelf = this.state.allBooks.reduce((accumulator, book) => {
      accumulator[book.id] = book.shelf
      return accumulator
    }, {})
    this.setState({
      booksInShelf,
    })
  }
	
  getMyReadingList() {
		BooksAPI.getAll()
		.then((resp) => {
			this.setState({
				allBooks: resp,
      })
      this.updateBooksInShelf()
		})
  }

	updateBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
    book.shelf = shelf
    this.setState(state => ({
      allBooks: state.allBooks.filter(item => item.id !== book.id).concat([ book ])
    }))
    this.updateBooksInShelf()
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <MyReads allBooks={this.state.allBooks} updateBookShelf={this.updateBookShelf}/>
        )}/>
        <Route path="/search" render={()=>(
          <SearchBooks booksInShelf={this.state.booksInShelf} updateBookShelf={this.updateBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
