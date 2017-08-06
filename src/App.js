import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
          <MyReads />
        )}/>
        <Route path="/search" render={()=>(
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
