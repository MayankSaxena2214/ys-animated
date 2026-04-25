"use client"
import React from 'react'
import ContactForm from '../ContactUs/ContactForm'
import Locations from '../ContactUs/Locations'
import { motion } from "framer-motion";


const ContactUs = () => {
  return (
    <div>
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* your form */}
      <ContactForm/>
</motion.div>
      <Locations/>
    </div>
  )
}

export default ContactUs
