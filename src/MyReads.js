import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookPreview from './BookPreview'
import { Link } from 'react-router-dom'
import './App.css'

class MyReads extends React.Component {
	constructor() {
		super()
		this.getMyReadingList()
	}

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
		// showSearchPage: true
		allBoooks: [],
  }
	
  getMyReadingList() {
		BooksAPI.getAll()
		.then((resp) => {
			this.setState({
				allBoooks: resp,
			})
		})
	}

	updateBookShelf = (book, shelf, index) => {
		BooksAPI.update(book, shelf)
		// .then((resp) => {
		// 	alert('move success!')
		// })
		let allBoooks = this.state.allBoooks
		allBoooks[index].shelf = shelf
		allBoooks.push(allBoooks[index])
		allBoooks.splice(index, 1)
		this.setState({
			allBoooks,
		})
	}

  render() {
    return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<BookPreview type={"currentlyReading"} books={this.state.allBoooks} updateBookShelf={this.updateBookShelf}/>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<BookPreview type={"wantToRead"} books={this.state.allBoooks} updateBookShelf={this.updateBookShelf}/>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<BookPreview type={"read"} books={this.state.allBoooks} updateBookShelf={this.updateBookShelf}/>
							</div>
						</div>
					</div>
				</div>
				<div className="open-search">
					<Link to={{
							pathname: "/search",
					}}/>
				</div>
			</div>
    )
  }
}

export default MyReads
