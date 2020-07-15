import React, {useEffect, useState} from "react";
import MainImage from "./sections/MainImage";
import GridCards from "./sections/GridCards";
import { Row } from "antd";

function LandingPage() {

    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '88e01a302b069ec698057310c5786ac8';
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [CurrentPage, setCurrentPage] = useState()

    useEffect(() => {
        const endpoit = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

        fetchMovies(endpoit);

    }, [])

    const fetchMovies = (endPoint) => {
        fetch(endPoint, {headers:{'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(response => {
                console.log(response.results)
                setMovies([...Movies, ...response.results])
                setMainMovieImage(response.results[0])
                setCurrentPage(response.page)
            })
    }

    const loadMoreItems = () => {

        const endpoit = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage + 1}`;
        fetchMovies(endpoit);

    }

    return (
        <div style={{width: '100%', margin:'0'}}>
            {MainMovieImage &&
            <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                       title={MainMovieImage.title}
                       text={MainMovieImage.overview}
            />
            }
            <div style={{width:'85%' , margin:'1rem auto'}}>
                <h2>Movies by latest</h2>
                <hr />
                <Row gutter={[16,16]}>
                    {Movies && Movies.map((movie,index) =>(
                        <React.Fragment key={index}>
                            <GridCards
                                landingPage
                                image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.title}
                            />
                        </React.Fragment>
                    ))}

                </Row>
            </div>

            <div style={{display: 'flex', justifyContent:'center'}}>
                <button onClick={loadMoreItems}>Load More</button>
            </div>
        </div>
    );
}

export default LandingPage;