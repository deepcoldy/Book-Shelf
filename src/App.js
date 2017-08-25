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
    book.shelf = shelf;
    const test = this.state.allBoooks.filter(item => !!(item.id !== book.id))
    test.push(book)
    this.setState({
      allBoooks: test
    })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <MyReads allBoooks={this.state.allBoooks} updateBookShelf={this.updateBookShelf}/>
        )}/>
        <Route path="/search" render={()=>(
          <SearchBooks boooksInShelf={
            this.state.allBoooks.reduce((accumulator, book) => {
              accumulator[book.id] = book.shelf
              return accumulator
            }, {})
          } updateBookShelf={this.updateBookShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
