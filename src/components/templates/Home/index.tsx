import React from "react";
import "./index.scss";
// import { FirstScreen } from "../../organisms/FirstScreen";
import { Header } from "../../organisms/Header";
import { Title } from "../../atoms/Title";
import { Chunks } from "../../organisms/Chunks";
import { HotMenu } from "../../organisms/HotMenu";
import { Categories } from "../../molucules/Categories";

function Home() {
    return (
        <div className="home">
            <div className="home-background"></div>
            <div className="part1">
                <div className="part1-header">
                    <Header></Header>
                </div>
                <div className="home-body">
                    <div className="home-title">
                        <Title></Title>
                    </div>
                    <div className="home-chunks">
                        <Chunks></Chunks>
                    </div>
                    <div className="home-hot-menu">
                        <HotMenu></HotMenu>
                    </div>
                </div>
                <div className="home-categories">
                    <Categories></Categories>
                </div>
            </div>
        </div>
    );
}

export default Home;
