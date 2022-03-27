import React, { useEffect, useState } from 'react';
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { AudioActions } from '../../common/constant';
import { AudioConsumerHook } from '../../stores/audio.store';

const ControlsComponent = () => {
    const [audio, dispatch] = AudioConsumerHook();
    const [playButton, setPlayButton] = useState(<FaPlay />);

    useEffect(() => {
        if (audio.played) {
            setPlayButton(<FaPause />);
        } else {
            setPlayButton(<FaPlay />);
        }
    }, [audio]);
    return (
        <div className="controls">
            <button className="no-background-button">
                <FaStepBackward />
            </button>
            <button
                onClick={() => {
                    if (audio.played) {
                        dispatch({ type: AudioActions.pause });
                    } else {
                        dispatch({ type: AudioActions.play });
                    }
                }}
                className="round-button"
            >
                {playButton}
            </button>
            <button className="no-background-button">
                <FaStepForward />
            </button>
        </div>
    );
};

export default ControlsComponent;
