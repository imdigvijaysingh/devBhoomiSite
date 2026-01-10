import React from 'react'

const Newsletter = ({ subscribed, handleNewsletterSubmit }) => {
  return (
    <div className="footer-column">
      <h3>Newsletter</h3>
      <p>Subscribe to our newsletter for the latest updates and events.</p>
      {subscribed ? (
        <div className="subscription-success">Thank you for subscribing!</div>
      ) : (
        <form onSubmit={handleNewsletterSubmit}>
          <input type="email" name="email" placeholder="digvijaypundir915@gmail.com" required />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      )}
    </div>
  )
}

export default NewsLetter
