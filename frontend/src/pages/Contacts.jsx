import React from 'react'
import Footer from '../components/footer/Footer'
import ContactForm1 from '../components/forms/ContactForm1'
import ContactForm2 from '../components/forms/ContactForm2'
import ContactForm3 from '../components/forms/ContactForm3'
import ContactForm4 from '../components/forms/ContactForm4'

const ContactsMainContent = () => {
  return (
    <div className="main-content">
        <div className="row g-4">
            <ContactForm1/>
            <ContactForm2/>
            <ContactForm3/>
            <ContactForm4/>
        </div>

        <Footer/>
    </div>
  )
}

export default ContactsMainContent