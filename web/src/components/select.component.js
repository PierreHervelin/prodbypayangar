import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';

const SelectComponent = ({ content, header }) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(header);

    const handleClick = (e) => {
        if (e.target.parentNode.classList.contains('content')) setSelected(e.target.innerText);
        setActive(!active);
    };

    return (
        <div onClick={handleClick} className={`select ${active ? 'active' : ''}`}>
            <span className="selected">{selected}</span>
            <FaChevronDown />
            {content}
        </div>
    );
};

SelectComponent.propTypes = {
    content: PropTypes.element,
    header: PropTypes.string,
};

export default SelectComponent;
