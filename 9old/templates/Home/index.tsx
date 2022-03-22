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
           <div className="header">
               <div>
                   <Header></Header>
               </div>
           </div>
        </div>
    );
}

export default Home;
