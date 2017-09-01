import React from 'react'
import BookPreview from './BookPreview'
import './App.css'

class MyReads extends React.Component {
  render() {
    return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<BookPreview type={this.props.type} books={this.props.books} updateBookShelf={this.props.updateBookShelf}/>
				</div>
			</div>
    )
  }
}

export default MyReads
