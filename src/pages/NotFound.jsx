import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3"> صفحه مورد نظر پیدا نشد
        </p>
              <p className="lead">The page you’re looking for doesn’t exist.</p>
              <Button variant='outline-warning' as={Link} to="/">
                  برو به خانه
              </Button>        
      </div>
    </div>
  );
}

export default NotFound