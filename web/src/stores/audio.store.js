import React, { createContext, useContext, useReducer } from 'react';
import { AudioActions } from '../common/constant';

const initialState = {
    played: false,
    audio: new Audio(),
    playlist: [],
    beatId: 0,
    muted: false,
    volume: 50,
};

const reducer = (state, action) => {
    let beatId;
    switch (action.type) {
        case AudioActions.play:
            if (state.playlist.length > 0 && state.beatId) {
                state.audio.play();
                return {
                    ...state,
                    played: true,
                };
            }
            return state;
        case AudioActions.pause:
            state.audio.pause();
            return {
                ...state,
                played: false,
            };
        case AudioActions.bwdSkip:
            if (state.playlist.length > 0) {
                beatId = state.beatId - 1 >= 0 ? state.beatId - 1 : 0;
                state.audio.src = state.playlist[beatId];
                state.audio.play();
                return {
                    ...state,
                    played: true,
                    beatId,
                };
            }
            return state;
        case AudioActions.fwdSkip:
            if (state.playlist.length > 0) {
                beatId = state.beatId + 1 < state.playlist.length ? state.beatId + 1 : 0;
                state.audio.src = state.playlist[beatId];
                state.audio.play();
                return {
                    ...state,
                    played: true,
                    beatId,
                };
            }
            return state;
        case AudioActions.changeBeat:
            state.audio.src = action.src;
            state.audio.play();
            return {
                ...state,
                played: true,
                beatId: playlist.indexOf(action.src),
            };
        case AudioActions.mute:
            state.audio.volume = 0;
            return {
                ...state,
                muted: true,
            };
        case AudioActions.demute:
            state.audio.volume = state.volume;
            return {
                ...state,
                muted: false,
            };
        case AudioActions.volume:
            state.audio.volume = action.volume;
            return {
                ...state,
                muted: false,
                volume: action.volume,
            };
        default:
            return state;
    }
};

const AudioContext = createContext();

export const AudioConsumerHook = () => useContext(AudioContext);
// eslint-disable-next-line react/prop-types
export const AudioProvider = ({ children }) => <AudioContext.Provider value={useReducer(reducer, initialState)}>{children}</AudioContext.Provider>;
