import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FiltersConsumerHook } from '../../stores/filters.store';
import { FiltersActions } from '../../common/constant';

const GenreComponent = ({ genre }) => {
    const [filters, dispatch] = FiltersConsumerHook();
    const [active, setActive] = useState(false);

    useEffect(() => {
        const genres = [...filters.genres];
        if (active) {
            genres.push(genre);
        } else {
            genres.splice(genres.indexOf(genre), 1);
        }
        dispatch({ type: FiltersActions.setGenre, genres });
    }, [active]);

    return (
        <span onClick={() => setActive(!active)} className={`genre ${active ? 'active' : ''}`}>
            {genre}
        </span>
    );
};

GenreComponent.propTypes = {
    genre: PropTypes.string,
};

export default GenreComponent;
