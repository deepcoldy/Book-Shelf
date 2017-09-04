import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookPreview from './BookPreview'
import './App.css'

class Search extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
		// showSearchPage: true
		searchResult: [],
	}
	
	searchBooks = (event) => {
		BooksAPI.search(event.target.value)
		.then((resp) => {
			const searchResult = resp.map(book => {
				book.shelf = this.props.booksInShelf[book.id] ? this.props.booksInShelf[book.id] : 'none'
				return book
			})
			this.setState({
				searchResult
			})
		})
	}

  render() {
    return (
			<div className="search-books">
				<div className="search-books-bar">
					 {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>  */}
					<Link className="close-search" to={{
							pathname: "/",
					}}/>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={this.searchBooks}/>
					</div>
				</div>
				<div className="search-books-results">
					<BookPreview type={"search"} books={this.state.searchResult} updateBookShelf={this.props.updateBookShelf}/>
				</div>
			</div>
    )
  }
}

export default Search
