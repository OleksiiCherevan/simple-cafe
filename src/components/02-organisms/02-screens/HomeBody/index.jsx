import "./index.scss";

import Header1 from "../../../00-atoms/01-headers/Header1";
import BarChunks from "../../../01-molecules/01-bars/BarChunks";
import HotMenu from "../../01-scenes/HotMenu";
import Categories from "../../../01-molecules/01-bars/BarCategories";
import Maker from "../../01-scenes/PizzaMaker";
import Calendar from "../../01-scenes/Calendar";
import BestWorkers from "../../01-scenes/BestWorkers";
import PopularDishes from "../../01-scenes/PopularDishes";
import Reviews from "../../01-scenes/Reviews";
import Contact from "../../01-scenes/Contact";
import Header2Underline from "../../../00-atoms/01-headers/Header2Underline";

const HOT_MENU = {
    text: "Бізнес-ланч",
    orderBy: "замовлення до 15:00",
    list: [
        {
            title: "Перша страва:",
            description: "Cуп-лапша, борщ, солянка, сирний крем-суп з грибами",
        },
        {
            title: "Друга страва:",
            description:
                "Свинина  відбивна, паста з баклажанами,  стейк з мраморної телятини, куриця по-тайски, запечений картофель, ризотто",
        },
        {
            title: "Салати:",
            description: "Фунцоза, цезарь, весняний, ананасовий",
        },
        {
            title: "Напої:",
            description: "Кофе, чай фруктовий, морс, компот яблучно-вишньовий",
        },
    ],
};

const HomeBody = () => {
    return (
        <>
            <div className="home-body">
                <div className="home-body__header">
                    <Header1></Header1>
                </div>
                <div className="home-body__chunks">
                    <BarChunks></BarChunks>
                </div>
                <div className="home-body__hot-menu">
                    <HotMenu {...HOT_MENU}></HotMenu>
                </div>
                <div className="home-body__categories">
                    <Categories></Categories>
                </div>
            </div>
            <div className="pizza-maker">
                <Maker></Maker>
            </div>
            <div className="home-body">
                <div className="home-body__best-workers">
                    <Header2Underline text="Кращі кухарі цього місяця"></Header2Underline>
                    <BestWorkers></BestWorkers>
                </div>
                <div className="home-body__popular-dishes">
                    <Header2Underline text="Популярні десерти"></Header2Underline>
                    <PopularDishes></PopularDishes>
                </div>
                <div className="home-body__reviews">
                    <Header2Underline text="Відгуки"></Header2Underline>

                    <Reviews></Reviews>
                </div>
                <div className="home-body__contact">
                    <Header2Underline text="Зворотній зв'язок"></Header2Underline>

                    <Contact></Contact>
                </div>
            </div>
        </>
    );
};

export default HomeBody;
