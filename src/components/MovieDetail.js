import React, {useEffect, useState} from 'react';
import MainImage from "./sections/MainImage";
import MovieInfo from "./sections/MovieInfo";
import GridCards from "./sections/GridCards";
import {Row} from "antd";

function MovieDetail(props) {

    let movieId = props.match.params.movieId;

    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '88e01a302b069ec698057310c5786ac8';
    const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [ActorToggle, setActorToggle] = useState(false)

    useEffect(() => {

        let endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`

        let endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`

        fetch(endPointInfo)
            .then(response => response.json())
            .then(response => {
                setMovie(response)
            })

        fetch(endPointCrew)
            .then(response => response.json())
            .then(response => {
                setCasts(response.cast)
            })

    }, [])

    const toggleActorView = () =>{
        setActorToggle(!ActorToggle)
    }

    return (
        <div>

            <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                       title={Movie.title}
                       text={Movie.overview}
            />

            <div style={{ width: '85%' , margin: '1rem auto'}}>

                <MovieInfo
                    movie={Movie}
                />

                <br />

                <div style={{ display: 'flex', justifyContent: 'center' , margin: '2rem'}}>
                    <button onClick={toggleActorView}> Toggle Actor View</button>
                </div>

                {ActorToggle &&
                <Row gutter={[16,16]}>
                    {Casts && Casts.map((cast,index) =>(
                        <React.Fragment key={index}>
                            <GridCards
                                image={cast.profile_path ? `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                castName={cast.name}
                            />
                        </React.Fragment>
                    ))}
                </Row>
                }



            </div>

        </div>
    )
}

export default MovieDetail;