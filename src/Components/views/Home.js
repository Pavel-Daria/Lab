import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return <>
        <h3>Home</h3>
        <ul>

            <li>
                <Link to="/task/1">Open Task 1 </Link>
            </li>
            <li>
                <Link to="/task/2">Open Task 2 </Link>
            </li>
            <li>
                <Link to="/task/3">Open Task 3 </Link>
            </li>
        </ul>
        </>;
}

export default Home;