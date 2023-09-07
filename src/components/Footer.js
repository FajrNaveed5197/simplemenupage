import React from 'react'
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">     
          <div className="col-lg-4 col-md-6">
            <h5>Links</h5>
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Menu">Menu</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Our Address</h5>
            <p>
              121. Clear Water Bay Road<br/>
              Clear Water Bay, Kowloon<br/>
              HONG KONG <br/>
              Tel: +852 1234 5678<br/>
              Fax: +852 8765 4321<br/>
              Email: confusion@food.net
            </p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="https://www.google.com">Google</a></li>
              <li><a href="https://www.facebook.com">Facebook</a></li>
              <li><a href="https://www.Linkedin.com">LinkedIn</a></li>
              <li><a href="https://www.Twitter.com">Twitter</a></li>
              <li><a href="https://www.Youtube.com">Youtube</a></li>
              <li><a href="https://www.gmail.com">Mail</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
