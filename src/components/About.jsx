// About.js
import React, { Suspense, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import preload from '../utils/preload';
import Header from './Header';

const PreloadComponent = preload(() => import('./PreloadComponent'));

function About() {
    const [count, setCount] = useState(1)


    const handleClick = () => {
        setCount(count => count + 1)
    }

    useEffect(() => {
        PreloadComponent.preload();
    }, [])


    return (
        <div>
            <Header />
            <h2>About</h2>
            <p>We are a team of developers...</p>
            <button onClick={handleClick}>Click Me</button>
            <Suspense fallback={'Loading...'}>

                {count > 3 && <PreloadComponent />}
            </Suspense>
        </div>
    );
}

export default About;