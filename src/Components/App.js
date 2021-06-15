import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

import './App.css';
import LoaderScreen from './Loader'
import Footer from './Footer'

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiCount, setApiCount] = useState(0)
  const [apiError, setError] = useState(false)

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kejAhwRat3GkPqI4tLiCaU2AHSzzfwYu')
      .then(response => {
        setBooks(response.data.results.books);
        console.log(JSON.stringify(books))
        setIsLoading(false)
      })
      .catch(error => { console.log("Error" + error); setError(error); setIsLoading(true) });

  }

  return (
    isLoading ? <LoaderScreen error /> :
        <MDBContainer fluid className="g-0">
          <MDBContainer>
          <MDBRow className="pt-5 text-center">
            <h1>NYTimes Best Sellers - Hardcover Fiction</h1>
          </MDBRow>
          {books.map((books, count) => (
            <MDBRow className='mt-5 mb-5' key={count}>
              <MDBCol size='md' className='col-md-2 text-center pb-5'>

                <img src={books.book_image} width="125" height="200" />
              </MDBCol>
              <MDBCol size='lg' className='col-md-10 pb-5'>
                <MDBRow className="d-inline">

                  <h3 className="d-inline">#{books.rank}</h3>
                  <h3 className="d-inline">{books.title}</h3>
                </MDBRow>
                <MDBRow className="pt-2">

                  <h5 className="text-muted">{books.author}</h5>
                </MDBRow>
                <MDBRow className="">

                  <p>{books.description}</p>
                </MDBRow>

                {books.book_review_link.length > 0 ?
                  <a href={books.book_review_link} target="_blank" className='btn btn-dark'>
                    Read Full Review
                  </a>
                  : null}
              </MDBCol>
              <hr />
            </MDBRow>
          ))}
          </MDBContainer>
          <Footer />
        </MDBContainer>
  );
}

export default App;