import React from 'react';
import FilterComponent from './filter/filter.component';
import FooterComponent from './footer.component';

const MenuComponent = () => {
    return (
        <div className="menu">
            <FilterComponent />
            <FooterComponent />
        </div>
    );
};

export default MenuComponent;
