import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="flex flex-col items-center justify-center py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <motion.div
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl font-bold text-white"
        >
          CONTACT
        </motion.h2>
        <motion.div
          variants={underlineVariants}
          className="w-32 h-1 bg-blue-500 mx-auto mt-4 origin-center"
        />
        <motion.p
          variants={titleVariants}
          className="text-gray-400 mt-4 text-lg font-semibold"
        >
          I'd love to hear from you—reach out for any opportunities or
          questions!
        </motion.p>
      </motion.div>

      <motion.div
        variants={formContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-4 w-full max-w-md md:max-w-lg lg:max-w-xl bg-[#0d0d0d] p-6 rounded-lg shadow-lg border border-gray-700 relative perspective-1000"
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-500/10 rounded-lg blur-xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl font-semibold text-white text-center relative z-10"
        >
          Connect With Me
        </motion.h3>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {["user_email", "user_name", "subject", "message"].map(
            (fieldName, index) => {
              const isTextarea = fieldName === "message";
              const placeholders = {
                user_email: "Your Email",
                user_name: "Your Name",
                subject: "Subject",
                message: "Message",
              };

              return (
                <motion.div key={fieldName} variants={fieldVariants}>
                  <motion.div
                    animate={{
                      scale: focusedField === fieldName ? 1.02 : 1,
                      y: focusedField === fieldName ? -2 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {isTextarea ? (
                      <motion.textarea
                        name={fieldName}
                        placeholder={placeholders[fieldName]}
                        rows="4"
                        required
                        onFocus={() => setFocusedField(fieldName)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full p-3 rounded-md bg-[#0d0d0d] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        whileFocus={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                      />
                    ) : (
                      <motion.input
                        type={fieldName === "user_email" ? "email" : "text"}
                        name={fieldName}
                        placeholder={placeholders[fieldName]}
                        required
                        onFocus={() => setFocusedField(fieldName)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full p-3 rounded-md bg-[#0d0d0d] text-white border border-gray-600 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        whileFocus={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            }
          )}

          <motion.div
            variants={fieldVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-white font-semibold rounded-md relative overflow-hidden cursor-pointer"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Send</span>
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;