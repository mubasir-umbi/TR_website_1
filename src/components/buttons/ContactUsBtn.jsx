import React from 'react'
import { Link } from 'react-router-dom'

function ContactUsBtn() {
  return (
    <>
      <Link to={'/contact_us'} className="flex items-center justify-center px-6 py-3 bg-deep_purple-800 text-white-A700 font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200 font-montserrat">
        CONTACT US
      </Link>
    </>
  )
}

export default ContactUsBtn