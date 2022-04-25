import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Authors from "../Authors/authors"
import Countries from "../Countries/countries";
import Books from "../Books/BookList/books"
import LibraryService from "../../repository/libraryService";
import libraryService from "../../repository/libraryService";
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";
import Header from "../Header/header";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            countries: [],
            books: [],
            selectedBook: {}
        }
    }

  render () {
    return(
        <Router>
            <Header/>
            <main>
                <div className="container">
                    <Route path={"/authors"} exact render={() =>
                        <Authors authors={this.state.authors}/>}/>
                    <Route path={"/countries"} exact render={() =>
                        <Countries countries={this.state.countries}/>}/>
                    <Route path={"/books"} exact render={() =>
                        <Books books={this.state.books}
                               onDelete={this.deleteBook}
                               onEdit={this.getBook}/>}/>
                    <Route path={"/books/add"} exact render={() =>
                        <BookAdd authors={this.state.authors}
                                 onAddBook={this.addBook}/>}/>
                    <Route path={"/books/edit/:id"} exact render={() =>
                        <BookEdit authors={this.state.authors}
                                  onEditBook={this.editBook}
                                  book={this.state.selectedBook}/>}/>
                    <Redirect to={"/books"}/>
                </div>
             </main>
        </Router>
    );
  }

  componentDidMount() {
        this.loadAuthors();
        this.loadCountries();
        this.loadBooks();
  }

  loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
  }

  loadCountries = () => {
        LibraryService.fetchCountries()
            .then((data) => {
            this.setState({
                countries: data.data
            })
        });

  }

  loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
            this.setState({
                books: data.data
            })
        });
   }

   deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
   }

   getBook = (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
   }

   addBook = (name, category, author, availableCopies) => {
        libraryService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
   }

   editBook = (id, name, category, author, availableCopies) => {
        libraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.countries);
   }
}

export default App;
