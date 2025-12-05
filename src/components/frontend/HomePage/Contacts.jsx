import React, { useState } from 'react'

const Contacts = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id={id}
      className="py-12 container md:w-[1000px] bg-lightGray dark:bg-matteBlack/20  dark:text-white transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Message Me</h2>
      <div className="  flex flex-col md:flex-row gap-8">
        <div
          className="md:w-1/2 bg-white/20 dark:bg-gray-200/10 rounded-lg shadow-md p-6"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded border border-gray-300 dark:border-white bg-white/10 dark:bg-gray-300/10 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded border border-gray-300 dark:border-gray-500 bg-white/10 dark:bg-gray-300/10 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-3 rounded border border-gray-300 dark:border-gray-500 bg-white/10 dark:bg-gray-300/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
            <button
              type="submit"
              className="bg-black/40 dark:bg-gray-500/40 text-white font-semibold p-3 rounded hover:bg-gray-700 dark:hover:bg-gray-300/40 transition"
            >
              Send Message
            </button>
          </form>
        </div>

       
        <div
          className="md:w-1/2 rounded-lg overflow-hidden shadow-md"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.066374496284!2d121.03089031531235!3d14.579639889764337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b92b2f0fdb03%3A0x6b2b63f2f5f2d29a!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
            width="100%"
            height="100%"
            className="md:min-h-[400px] sm:min-h-[200px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contacts
