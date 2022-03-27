import React, { useEffect, useState } from 'react';
import { AudioConsumerHook } from '../../stores/audio.store';

const TimelineComponent = () => {
    const [audio, dispatch] = AudioConsumerHook();
    const [pourcent, setPourcent] = useState(0);

    useEffect(() => {
        if (audio.played && audio.audio.duration) {
            const intervalId = setInterval(() => {
                if (audio.audio.paused) {
                    clearInterval(intervalId);
                    return;
                }
                setPourcent(Math.round((audio.audio.currentTime / audio.audio.duration) * 100));
            }, 1000);
        }
    }, [audio.played]);

    return (
        <div className="timeline">
            <div style={{ width: pourcent }} className="current-time"></div>
        </div>
    );
};

export default TimelineComponent;
