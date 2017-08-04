import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BookPreview extends React.Component {
	constructor(props) {
    super(props);
    this.moveToAnotherShelf = this.moveToAnotherShelf.bind(this);
    this.state = {
			shelf: this.props.type,
		};
  }
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    shelf: '',
	}
	
	moveToAnotherShelf(event) {
		console.log(event.target.value)
		// console.log(event.target.)
	}

  render() {
		const type = this.props.type
		const booksPreview = this.props.books.map((book, index) => {
			if (book.shelf === type){
				return (
					<li key={index}>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
								<div className="book-shelf-changer">
									<select defaultValue={type} onChange={this.moveToAnotherShelf} value={this.state.shelf}>
										<option value="none" disabled>Move to...</option>
										<option value="currentlyReading">Currently Reading</option>
										<option value="wantToRead">Want to Read</option>
										<option value="read">Read</option>
										<option value="none">None</option>
									</select>
								</div>
							</div>
							<div className="book-title">{book.title}</div>
							{
								book.authors.length > 0 ? book.authors.map((author, index) => {
									return <div className="book-authors" key={index}>{author}</div>
								}) : ''
							}
						</div>
					</li>
				);
			}
			return false;
		})
		return (
			<ol className="books-grid">
				{booksPreview}
			</ol>
		)
	}
}

export default BookPreview
