import React, { Component } from 'react'

const Book = ({book}) =>  {





 	const {class1="search-books-results"} = this.props
 	
 	return (
 		<div className={class1}>
 		
 			<ol className="books-grid">
 		
 				<li key={book.id} >
					<div className="book">
                          <div className="book-top">
                          {book.imageLinks  &&
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>}
                            <div className="book-shelf-changer">
                              <select onClick={ (e) => this.props.updateBook(book, e.target.value) } defaultValue = {book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          {book.authors &&
                          <div className="book-authors">{book.authors[0]}</div>}
                    </div> 										
                </li>)}
 			</ol>
 }		</div>
 		)
 	



}

export default Shelf