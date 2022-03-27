import React from 'react';
import PlayerComponent from '../components/player/player.component';
import { AudioProvider } from '../stores/audio.store';

const HomePage = () => {
    return (
        <div className="homepage">
            <AudioProvider>
                <PlayerComponent />
            </AudioProvider>
        </div>
    );
};

export default HomePage;
