import React from 'react';

const Contact = (props) => {
  const email = "josemaria.becerril" + "@" + "ehess.fr";
  
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="https://getform.io/f/13697680-a8c1-482f-80d3-421fa21c424b">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Clear" /></li>
            </ul>
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </section>
          {/* <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>+33 6268 74903</span>
            </div>
          </section> */}
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Professional address</h3>
              <span>Laboratoire d'anthropologie sociale, 52 rue du Cardinal Lemoine<br/>
              Paris<br />
              75005<br />
              France</span>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}

export default Contact;
