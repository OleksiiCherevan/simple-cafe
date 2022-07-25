import React from "react";
import "./index.scss";

import Header from "../../02-organisms/01-scenes/Header";
import HomeBody from "../../02-organisms/02-screens/HomeBody";
import Footer from "../../02-organisms/01-scenes/Footer";

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
                    <div className="home-footer">
                        <Footer></Footer>
                    </div>
                {/* </div>   */}
            </div>
            
        </div>
    );
}

export default Home;
