import "./ListItem.css";
import { useState } from "react";
import { PlayArrow } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import videoPrueba from '../../assets/videoPrueba.mp4';

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = videoPrueba;
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://i.ytimg.com/vi/sMEm2t1bH8k/maxresdefault.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <AddIcon className="icon" />
              <ThumbUpAltOutlinedIcon className="icon" />
              <ThumbDownAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <div>6 seasons</div>
              <div className="limit">+16</div>
              <div>2017</div>
            </div>
            <div className="descItem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genreItem">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;