import React, { useEffect, useState } from 'react';
import { AudioConsumerHook } from '../../stores/audio.store';
import GenreComponent from './genre.component';

const GenresComponent = () => {
    const [audio, dispatch] = AudioConsumerHook();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const tmp = [];
        for (const beat of audio.allBeats) {
            for (const genre of beat.genres) {
                if (!tmp.includes(genre)) {
                    tmp.push(genre);
                }
            }
        }
        setGenres(tmp);
    }, [audio.allBeats]);

    return (
        <div className="genres">
            <h4>Genre</h4>
            <div className="container">
                {genres.map((genre) => (
                    <GenreComponent genre={genre} key={genre} />
                ))}
            </div>
        </div>
    );
};

export default GenresComponent;
