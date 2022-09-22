import React from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">Want To Get In Touch?</section>
        <article className={"contact-info"}>
        <p >
          Foor get these are the only outside yard stick bikjsbey mummy dam yes onlyfans gotcha nope noise necromanter forever in my heart is a tale of dishes
        </p>

        <p>
          Foor get these are the only outside yard stick bikjsbey mummy dam yes onlyfans gotcha 
        </p>

        <p>
          Foor get these are the only outside yard stick bikjsbey mummy dam yes onlyfans gotcha nope noise necromanter forever in my heart is a tale of dishes
        </p>
        </article>
       <article>
        <form className="form contact-form">
          <div className='form-row'>
            <label htmlFor="name">your name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className='form-row'>
            <label htmlFor="email">your email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-row">
            <label htmlFor='message'>message</label>
            <textareab name="message" id="message"></textareab>
          </div>
          <button type="submit" className='btn block'>submit</button>
        </form>
       </article>
      </main>
    </Layout>
  )
}

export default Contact