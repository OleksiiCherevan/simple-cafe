import React from "react";
import "./index.scss";

import Header from "../../03-organisms/Header";
import HomeBody from "../../03-organisms/HomeBody";

function Home() {
    return (
        <div className="home">
            
            {/* <div className="test"></div> */}
            <div className="home-enter">
                {/* <div className="home-enter__shadow"> */}
                    <div className="home-header">
                        <Header></Header>
                    </div>
                    <div className="home-body">
                        <HomeBody></HomeBody>
                    </div>
                {/* </div>   */}
            </div>
            
        </div>
    );
}

export default Home;
