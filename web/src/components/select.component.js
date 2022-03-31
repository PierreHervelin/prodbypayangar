import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';

const SelectComponent = ({ content, header }) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(header);

    const selectRef = useRef();

    const useOutside = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
            setActive(false);
        }
    };

    const handleClick = (e) => {
        if (e.target.parentNode.classList.contains('content')) setSelected(e.target.innerText);
        setActive(!active);
    };

    useEffect(() => {
        document.addEventListener('click', useOutside);
        return () => {
            document.removeEventListener('click', useOutside);
        };
    }, [selectRef]);

    return (
        <div ref={selectRef} onClick={handleClick} className={`select ${active ? 'active' : ''}`}>
            <span className="selected">{selected}</span>
            <FaChevronDown />
            <div className={`content ${content.length > 8 ? 'scroll' : ''}`}>
                {content.map((val, i) => (
                    <span key={i}>{val}</span>
                ))}
            </div>
        </div>
    );
};

SelectComponent.propTypes = {
    content: PropTypes.array,
    header: PropTypes.string,
};

export default SelectComponent;
