import React from 'react'
import './App.css'

class BookPreview extends React.Component {
  render() {
		const shelfType = this.props.type
		const booksPreview = Object.prototype.toString.call(this.props.books) === '[object Array]' && this.props.books.length > 0 ?
			this.props.books.map((book, index) => {
				if (book.shelf === shelfType || shelfType === 'search'){
					return (
						<li key={index}>
							<div className="book">
								<div className="book-top">
									<div className="book-cover"
										onClick={() => {
											location.href = book.previewLink
										}}
										style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
									<div className="book-shelf-changer">
										<select defaultValue={book.shelf} onChange={(e)=>{
												this.props.updateBookShelf(book, e.target.value)
											}}>
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
									book.authors && book.authors.length > 0 ? book.authors.map((author, index) => {
										return <div className="book-authors" key={index}>{author}</div>
									}) : ''
								}
							</div>
						</li>
					);
				}
			return false;
		}):
		shelfType === 'search' ? 'there is no result for now' : ''

		return (
			<ol className="books-grid">
				{booksPreview}
			</ol>
		)
	}
}

export default BookPreview
