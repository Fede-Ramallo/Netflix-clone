import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useState ,useRef, useEffect } from 'react';
import './List.css';
import { motion } from 'framer-motion'
import axios from '../../utils/axios';

const listVariant = {
    hover: {
      scale: 1.2,
      transition:{
        duration: 0.4,
      }
    }
  }

const List = ({ title, fetchURL, isLargeRow = false}) => {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
          const request = await axios.get(fetchURL);
          setMovies(request.data.results)
          return request;
        };
    
        fetchData()
      }, [fetchURL]);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -140
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    let srcimg = 'https://image.tmdb.org/t/p/original/'
    return(
        <div className='list'>
            <div className='listTitle'>{title}</div>
            <div className='wrapper'>
                <ArrowBackIosOutlined className='sliderArrow left'onClick={() => handleClick('left')} style={{display: !isMoved && 'none'}}/>
                <div className='listContainer' ref={listRef} >
                    {movies.map((mov) => (
                            <motion.div
                            className="listItem"
                            variants={listVariant}
                            whileHover='hover'>
                              <img
                              src={`${srcimg}${isLargeRow ? mov.poster_path : mov.backdrop_path}`}
                              alt={mov.original_title}
                              className={`row_poster ${isLargeRow && 'row_poster-large'}`}
                              key={mov.id}
                            />
                          </motion.div>
                    ))}
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List;