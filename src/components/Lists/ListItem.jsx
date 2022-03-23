import "./ListItem.css";
import React, { useState } from "react";
import { PlayArrow } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { motion } from 'framer-motion';

const listVariant = {
  hover: {
    scale: 1.8,
    transition:{
      duration: 0.5,
      delay: 0.2
    }
  }
}

const ListItem = ({ original_title, overview, backdrop_path }) => {
  const [isHovered, setIsHovered] = useState(false);
  let srcimg = 'https://image.tmdb.org/t/p/original/' + backdrop_path
  return (
    <motion.div
      className="listItem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={listVariant}
      whileHover='hover'>
        <img
        src={srcimg}
        alt=""
      />
      {isHovered && (
        <>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <AddIcon className="icon" />
              <ThumbUpAltOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <div>{original_title}</div>
              <div className="limit">+16</div>
              <div>2017</div>
            </div>
            <div className="descItem">
              {overview}
            </div>
            <div className="genreItem">Action</div>
          </div>
        </>
      )}
    </motion.div>
  )
}

export default ListItem;