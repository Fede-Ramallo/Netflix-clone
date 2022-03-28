import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import React, { useState ,useRef, useEffect } from 'react';
import './List.css';
import ListItem from './ListItem';
import axios from '../../utils/axios';

const List = ({ title, fetchURL}) => {

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
        let distance = listRef.current.getBoundingClientRect().x -50
        if(direction === 'left' && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return(
        <div className='list'>
            <div className='listTitle'>{title}</div>
            <div className='wrapper'>
                <ArrowBackIosOutlined className='sliderArrow left'onClick={() => handleClick('left')} style={{display: !isMoved && 'none'}}/>
                <div className='listContainer' ref={listRef} >
                    {movies.map((mov) => (
                        <ListItem key={mov.id} {...mov} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List;