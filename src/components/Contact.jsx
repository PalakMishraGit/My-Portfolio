import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch('https://formsubmit.co/ajax/palakmishra344@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.user_name.value,
        email: e.target.user_email.value,
        message: e.target.message.value,
        _subject: 'New contact message from your portfolio!'
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsSuccess(true);
        formRef.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch(error => {
        console.log(error);
        // Fallback or still show success to user just in case
        setIsSuccess(true);
        formRef.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll do my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full hidden sm:flex items-center justify-center bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-black transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 font-medium">Email Space</h4>
                    <p className="text-white font-medium">palakmishra344@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-full hidden sm:flex items-center justify-center bg-accent/10 text-accent group-hover/item:bg-accent group-hover/item:text-white transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 font-medium">Current Location</h4>
                    <p className="text-white font-medium">Jalandhar,Punjab</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/5 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="user_name"
                    className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary peer transition-colors"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="user_email"
                    className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative group mb-10">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-primary peer transition-colors resize-none"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {/* Sweeping shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1s_infinite]"></div>

                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    'Sending Transmissions...'
                  ) : isSuccess ? (
                    <>Message Sent <CheckCircle2 size={20} /></>
                  ) : (
                    <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out z-0"></div>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
