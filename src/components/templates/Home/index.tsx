import React from "react";
import './index.scss'
import { FirstScreen } from "../../organisms/FirstScreen";
import { Header } from "../../organisms/Header";

function Home() {
    return (
        <div className="home">
            <Header></Header>
            <FirstScreen></FirstScreen>
        </div>
    );
}

export default Home;
