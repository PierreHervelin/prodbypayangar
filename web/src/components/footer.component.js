import React from 'react';

const FooterComponent = () => {
    return (
        <div className="footer">
            <h3>ABOUT PAYANGAR</h3>
            <hr></hr>
            <div className="container">
                <a href="#">Conditions</a>
                <div className="container">
                    <h6>Location</h6>
                    <p>Paris, France</p>
                </div>
                <div className="container">
                    <h6>Mail</h6>
                    <p>payangar.music@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
