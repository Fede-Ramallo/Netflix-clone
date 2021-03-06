import React from 'react';
import './Modal.css';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5}
    }
}

const Modal = ({ showModal, setShowModal, movieTitle, movieOverview, movieImg }) => {

    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieImg})`,
      }

  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowModal(false)}
        >
        <motion.div className='modal-container show' variants={modal} style={backgroundStyle}>
         <div className='modal'>
             <h1>{movieTitle}</h1>
             <p>{movieOverview}</p>
             <button className='modalBtn'>
                <svg className="modalBtn-icon" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 41.999 41.999">
                    <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40
	                        c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20
	                        c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z"></path><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> 
                     Play Again
            </button>
             <button className='modalBtn-list'>
                        <svg className="modalBtn-icon" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 491.86 491.86"><g><g><path d="M465.167,211.614H280.245V26.691c0-8.424-11.439-26.69-34.316-26.69s-34.316,18.267-34.316,26.69v184.924H26.69
                        C18.267,211.614,0,223.053,0,245.929s18.267,34.316,26.69,34.316h184.924v184.924c0,8.422,11.438,26.69,34.316,26.69
                        s34.316-18.268,34.316-26.69V280.245H465.17c8.422,0,26.69-11.438,26.69-34.316S473.59,211.614,465.167,211.614z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                 My List</button>
         </div>
         </motion.div>
        </motion.div>
        
      )}
    </AnimatePresence>
  )
}

export default Modal;