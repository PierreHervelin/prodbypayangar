import React, { useState } from 'react';
import { Keys, Orders } from '../../common/constant';
import SelectComponent from '../select.component';
import GenresComponent from './genres.component';

const FilterComponent = () => {
    const [bpm, setBpm] = useState(undefined);

    return (
        <div className="filters">
            <h3>ADD FILTER</h3>
            <hr></hr>
            <div className="container">
                <SelectComponent content={Orders} header="ORDER BY" />
                <GenresComponent />
                <div className="key-bpm">
                    <SelectComponent content={Keys} header="KEY" />
                    <div className="bpm-input">
                        <input type="text" onChange={(e) => setBpm(Number.isInteger(Number(e.target.value)) ? e.target.value : 0)} value={bpm} />
                        <span>BPM</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterComponent;
