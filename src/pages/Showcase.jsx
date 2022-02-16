import React from 'react';
import { useParams } from 'react-router';


const Showcase = () => {
    const { id } = useParams();
    return (
        <div style={{ height: '100%', width: '100%', display:'grid', placeItems: 'center', color: 'white' }} >
            <h1>This page is coming soon {id}</h1>
        </div>
    );
};

export default Showcase;