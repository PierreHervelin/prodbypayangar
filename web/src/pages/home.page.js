import React from 'react';
import MenuComponent from '../components/menu.component';
import PlayerComponent from '../components/player/player.component';
import { AudioProvider } from '../stores/audio.store';

const HomePage = () => {
    return (
        <div className="homepage">
            <AudioProvider>
                <PlayerComponent />
                <MenuComponent />
            </AudioProvider>
        </div>
    );
};

export default HomePage;
