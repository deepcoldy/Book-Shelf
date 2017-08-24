import React from 'react'
import BookPreview from './BookPreview'
import { Link } from 'react-router-dom'
import './App.css'

class MyReads extends React.Component {
	state = {
		num: 0,
	}
	
	clickTitle() {
		this.setState({
			num: this.state.num + 1
		})
		console.log(this.state.num)
	}

  render() {
    return (
			<div className="list-books">
				<div className="list-books-title">
					<h1 onClick={() => {
							this.clickTitle()
						}}>MyReads{this.state.num}</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<BookPreview type={"currentlyReading"} books={this.props.allBoooks} updateBookShelf={this.props.updateBookShelf}/>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<BookPreview type={"wantToRead"} books={this.props.allBoooks} updateBookShelf={this.props.updateBookShelf}/>
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<BookPreview type={"read"} books={this.props.allBoooks} updateBookShelf={this.props.updateBookShelf}/>
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
