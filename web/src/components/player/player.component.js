import React from 'react';
import ControlsComponent from './controls.component';
import TimelineComponent from './timeline.component';

const PlayerComponent = () => {
    return (
        <div className="player">
            <TimelineComponent />
            <ControlsComponent />
        </div>
    );
};

export default PlayerComponent;
