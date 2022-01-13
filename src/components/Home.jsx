import React, { Component } from "react"
import BookList from "./BookList"
import fantasyBooks from "../fantasyBooks.json"

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <BookList books={fantasyBooks} />
        </header>
      </div>
    )
  }
}
