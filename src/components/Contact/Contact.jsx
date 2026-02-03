import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSignal, SiHashnode } from "react-icons/si";

const Contact = () => {
  const sectionRef = useRef(null);
  

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <section
        ref={sectionRef}
        id="contact"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] font-sans"
        aria-labelledby="contact-heading"
      >
        <ToastContainer />

        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
            >
              Get In Touch
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-4 rounded-full mx-auto"
            />
            <p className="text-gray-400 mt-6 text-sm sm:text-base max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat
            </p>
          </motion.div>

          {/* Contact Form - Commented Out */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden p-6 sm:p-8"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    onFocus={() => setFocusedField("user_email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    onFocus={() => setFocusedField("user_name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows="5"
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 text-white border border-gray-800 focus:outline-none focus:border-blue-500/50 transition-all duration-300 text-sm sm:text-base placeholder:text-gray-600 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 py-3 sm:py-3.5 text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div> */}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <motion.a
                href="mailto:officialdslc1552005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-800/50 hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-all duration-300">
                  <FaEnvelope className="text-red-400 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    Reach out via email. I usually reply within 24–48 hours.
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-500">Email:</span>{" "}
                    <span className="text-red-400">
                      officialdslc1552005@gmail.com
                    </span>
                  </p>
                </div>
              </motion.a>

              {/* Signal */}
              <motion.a
                href="https://signal.me/#eu/OWYHsUzKDcLLXcoxG1iQ4aP2bF9NkznUMVfrSsV9d9L-EuU06F9IoLiZ2jLYw1J5"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-800/50 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                  <SiSignal className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Signal</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    For quicker communication, message me on Signal.
                  </p>
                  <p className="text-blue-400 text-sm">
                    <span className="text-gray-500">Username:</span>{" "}
                    divyansh1552005.15
                  </p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Divyansh1552005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-800/50 hover:border-gray-400/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-gray-400/10 rounded-lg group-hover:bg-gray-400/20 transition-all duration-300">
                  <FaGithub className="text-gray-300 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">GitHub</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    Check out my repositories and open source contributions.
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-500">Username:</span>{" "}
                    <span className="text-gray-300">Divyansh1552005</span>
                  </p>
                </div>
              </motion.a>

              {/* Blogs */}
              <motion.a
                href="https://divyanshblogs.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-800/50 hover:border-blue-400/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-400/10 rounded-lg group-hover:bg-blue-400/20 transition-all duration-300">
                  <SiHashnode className="text-blue-400 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Blogs</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    I write technical blogs and share what I learn here.
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-500">Blog:</span>{" "}
                    <span className="text-blue-400">
                      divyanshblogs.hashnode.dev
                    </span>
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/divyansh-sharma-b05897286/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-800/50 hover:border-blue-600/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-600/10 rounded-lg group-hover:bg-blue-600/20 transition-all duration-300">
                  <FaLinkedin className="text-blue-500 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    Connect with me professionally on LinkedIn.
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-500">Profile:</span>{" "}
                    <span className="text-blue-500">
                      /in/divyansh-sharma-b05897286
                    </span>
                  </p>
                </div>
              </motion.a>

              {/* X (Twitter) */}
              <motion.a
                href="https://x.com/divyansh1552005"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl border border-gray-800/50 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="p-3 bg-black rounded-lg group-hover:bg-black/90 transition-all duration-300">
                  <FaXTwitter className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">X (Twitter)</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-2">
                    I share thoughts and updates on tech, follow me on X.
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-500">Username:</span>{" "}
                    <span className="text-white">@divyansh1552005</span>
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
