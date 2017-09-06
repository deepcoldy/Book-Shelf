import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
import './App.css'

class MyReads extends React.Component {
  render() {
    return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf title={'Currently Reading'} type={"currentlyReading"} books={this.props.allBooks} updateBookShelf={this.props.updateBookShelf}/>
						<BookShelf title={'Want to Read'} type={"wantToRead"} books={this.props.allBooks} updateBookShelf={this.props.updateBookShelf}/>
						<BookShelf title={'Read'} type={"read"} books={this.props.allBooks} updateBookShelf={this.props.updateBookShelf}/>
					</div>
				</div>
				<div className="open-search">
					<Link to="/search" />
					{/* better than <Link to={{
							pathname: "/search",
					}}/> */}
				</div>
			</div>
    )
  }
}

export default MyReads
