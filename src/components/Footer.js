import React from 'react'
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div>
      <div className="container mt-4">
      <div className="row">     
        <div className="col-lg-4">
          Links 
          <ul><br/>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          Our Address<br/><br/>
          121. Clear Water Bay Road<br/>
          Clear Water Bay, Kowloon<br/>
          HONG KONG <br/>
          Tel:+852 1234 5678<br/>
          Fax:+852 8765 4321<br/>
          Email:
          confusion@food.net
          </div>
          <div className="col-lg-4">
          <ul><br/>
            <a href="https://www.google.com">Google &nbsp;</a>
            <a href="https://www.facebook.com">Facebook</a><br/>
            <a href="https://www.Linkedin.com">Linkden &nbsp;</a>
            <a href="https://www.Twitter.com">Twitter</a><br/>
            <a href="https://www.Youtube.com">Youtube &nbsp;</a>
            <a href="https://www.gmail.com">Mail</a>

          </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
export default Footer
