import { Intro } from "./sections.tsx";
import { Consulting } from "./sections.tsx";
import { Production } from "./sections.tsx";
import { Case } from "./sections.tsx";
import { Coruma } from "./sections.tsx";

import '../scss/bloc/_main.scss';

const Main = function() {
    return (
        <main className="main">
            <Intro />
            <Consulting />
            <Production />
            <Case />
            <Coruma />
        </main>        
    )
}

export default Main;