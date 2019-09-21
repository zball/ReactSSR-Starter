import React from 'react';

const Home = () => {
    return(
        <div>
            <div>I'm the BEST Home component</div>
            <button onClick={() => console.log("Hi there!")}>Click me!</button>
        </div>
    );
}

export default {
    component: Home
};