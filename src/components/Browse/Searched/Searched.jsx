import React, {useEffect} from 'react';
import { useViewport } from '../../../utils/useViewport'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import "swiper/css/effect-flip";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const Searched = ({setShowModal,setMovieTitle,setMovieOverview,setMovieImg, movies, searchTerm, setMovies }) => {
    const [windowDimensions] = useViewport()
    const { width } = windowDimensions
    const apiKey = 'cc5a9d7cf4bac59dc6eb63d3cba779b3'
    useEffect(() => {
        const fetchSearch = () =>{
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
            .then(resp => resp.json())
            .then(({results}) => setMovies(results))
        };
        fetchSearch();
    }, [searchTerm, setMovies])

    let srcimg = 'https://image.tmdb.org/t/p/original/'
    return(
        <div className='Rows'>
            <h1 className='listTitle'>Resultados buscados</h1>
            <Swiper 
            className='wrapper'
            pagination={{clickable: true}}
            navigation={true}
            grabCursor={false}
            draggable={false}
            slidesPerView={5}
            loopAdditionalSlides={
              width >= 1378 ? 4 : width >= 998 ? 3 : width >= 625 ? 2 : 2
            }
            breakpoints={{
              1378: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              998: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              625: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            slidesPerGroup={5}
            preventClicksPropagation={true}
            preventClicks={true}
            scrollbar={{ draggable: false, hide: true }}
            slideToClickedSlide={false}
            loop={true}
            >
                <div className='listContainer' >
                    {movies.map(
                        (mov, i) => mov.backdrop_path && 
                          <SwiperSlide
                          className="listItem"
                          key={i}
                          onClick={() => {
                            setShowModal(true)
                            setMovieImg(mov.backdrop_path)
                            setMovieTitle((mov.original_name || mov.original_title))
                            setMovieOverview(mov.overview)
                          }}
                          >
                            <img
                            src={`${srcimg}${mov.backdrop_path}`}
                            alt={mov.original_title}
                            className={'row_poster'}
                            key={mov.id}
                          />
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    )
}

export default Searched;