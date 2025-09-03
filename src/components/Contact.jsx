import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// import {
//   instagram,
//   youtube,
//   call,
// } from "./canvas";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          
          <label className='flex flex-col'>  
          <span className='text-white font-medium mb-4'>Connect With Us On</span>

            {/* <img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" alt="Instagram "  className='mb-4 rounded-lg w-8 h-8 mr-2 inline-block align-middle' />
            <img src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" alt="YouTube "  className='mb-4 rounded-lg w-8 h-8 mr-2 inline-block align-middle' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpedKMuZn7Jrf2AKiTyOoLOcQl1IUoWzdcfw&s" alt="Call "  className='mb-4 rounded-lg w-8 h-8 mr-2 inline-block align-middle' /> */}
            
            <div className='flex items-center'>
            <a href="https://www.instagram.com/aurora_ai.tech/" target="_blank" rel="noopener noreferrer">
    <img 
        src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" 
        alt="Instagram"  
        className='mb-4 rounded-lg w-16 h-16 mr-14 inline-block align-middle' 
    />
    </a>
    <a href="http://www.youtube.com/@AuroraAI_tech" target="_blank" rel="noopener noreferrer">
    <img 
        src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png" 
        alt="YouTube"  
        className='mb-4 rounded-lg w-16 h-16 mr-14 inline-block align-middle' 
    />
    </a>
    <a href="tel:+919560564502" target="_blank" rel="noopener noreferrer">
    <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6SzY_K8iYMuSG_IsmATXd_PvyFM-woA7Xw&s"
        alt="Call"  
        className='mb-4 rounded-lg w-14 h-14 mr-14 inline-block align-middle' 
    />
    </a>
    <a href="mailto:aurora.ai.tech@gmail.com" target="_blank" rel="noopener noreferrer">
    <img 
        src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" 
        alt="Gmail"  
        className='mb-4 rounded-lg w-12 h-10 mr-2 inline-block align-middle' 
    />
    </a>
</div>

            

            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What can we do for you?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div> 
  );  
};

export default SectionWrapper(Contact, "contact");