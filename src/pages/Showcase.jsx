import React from 'react';
import { useParams } from 'react-router';
import ShowcaseComponent from '../components/showcase/ShowcaseComponent';


const Showcase = () => {
    const { id } = useParams();
    return (
        <React.Fragment>
            <ShowcaseComponent  id={id} />
        </React.Fragment>
    );
};

export default Showcase;