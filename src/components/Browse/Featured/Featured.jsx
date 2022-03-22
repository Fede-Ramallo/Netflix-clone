import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./Featured.css";
import snk from '../../../assets/images/snk.png';

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <div>{type === "movie" ? "Movies" : "Series"}</div>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src={snk}
        alt=""
      />
      <div className="infoFeatured">
        <img
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYNPOTJQboU9mnFBSj9rg2HzIaC4OlN3pnkUY15mWvqucBUPR2z7bFatEH6AZ9MyB8l4eHorHSBNbHEniW0HnMfWHDWxS7etdPYs.png?r=35f"
          alt=""
        />
        <div className="descFeatured">
            <p>
            Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.
            </p>
        </div>
        <div className="buttonsFeatured">
          <button className="playbtn">
            <PlayArrowIcon />
            <div>Play</div>
          </button>
          <button className="infoBtn">
            <InfoOutlinedIcon />
            <div>Info</div>
          </button>
        </div>
      </div>
    </div>
  );
}