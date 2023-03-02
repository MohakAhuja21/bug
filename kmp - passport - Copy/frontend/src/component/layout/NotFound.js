import React from 'react'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notFound'>
<ErrorOutlineRoundedIcon/>
<h1>Error</h1>
<p>We couldn't find the page you
were looking for.</p>
<Link to="/">Back to Homepage</Link>
    </div>
  )
}

export default NotFound