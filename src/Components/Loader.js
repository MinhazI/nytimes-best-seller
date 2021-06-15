import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBSpinner } from 'mdb-react-ui-kit';

import './App.css';

function LoaderScreen(props) {
  console.log("Props from loading screen: " + JSON.stringify(props))
  return (
    <MDBContainer className='fullHeight'>
      <MDBRow>
        <MDBCol size='md' className='fullHeight d-flex align-items-center justify-content-center'>
          <MDBSpinner grow style={{ width: '4rem', height: '4rem' }}>
            <span className='visually-hidden'>Loading...</span>
          </MDBSpinner>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoaderScreen;
