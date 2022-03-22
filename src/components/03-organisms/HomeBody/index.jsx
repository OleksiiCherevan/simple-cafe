import "./index.scss";

import Header1 from "../../01-atoms/Header1";
import Chunks from "../../02-molecules/Chunks";
import HotMenu from "../../02-molecules/HotMenu";
import Categories from "../../02-molecules/Categories";

const HomeBody = () => {
    return (
        <div className="home-body">
            <div className="home-body__header">
                <Header1></Header1>
            </div>
            <div className="home-body__chunks">
                <Chunks></Chunks>
            </div>
            <div className="home-body__hot-menu">
                <HotMenu></HotMenu>
            </div>
            <div className="home-body__categories">
                <Categories></Categories>
            </div>
        </div>
    );
};

export default HomeBody;
