import React, { useState } from 'react';
import SelectComponent from '../select.component';

const FilterComponent = () => {
    const [bpm, setBpm] = useState(undefined);

    return (
        <div className="filters">
            <h3>ADD FILTER</h3>
            <hr></hr>
            <div className="container">
                <SelectComponent
                    content={
                        <div className="content">
                            <span>Date asc</span>
                            <span>Date desc</span>
                            <span>Time asc</span>
                            <span>Time desc</span>
                        </div>
                    }
                    header="ORDER BY"
                />
                <div className="genre"></div>
                <div className="key-bpm">
                    <SelectComponent
                        content={
                            <div className="content">
                                <span>Cmaj</span>
                                <span>Cmin</span>
                                <span>C#maj</span>
                                <span>C#min</span>
                                <span>Dmaj</span>
                                <span>D#min</span>
                            </div>
                        }
                        header="KEY"
                    />
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
