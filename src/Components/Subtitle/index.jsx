import React from 'react';

const Subtitle = (props) => {
    return (
        <div className="container">
            <h1 className="container__subtitle">{props.subtitle}</h1>
        </div>
    );
}

export default Subtitle;