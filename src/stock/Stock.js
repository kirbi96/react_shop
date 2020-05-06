import React from "react";
import {Offer} from "./Offer";

const stockData = [
    {id: "1", img: "https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1587966789_2c8699d1c4654ac6a5f95678d1f2b865.jpeg?1496738524", name: "Настольная игра в подарок", description: "HASBRO — введите этот промокод при заказе комбо «Все в игру!», и мы подарим к заказу одну из восьми настольных игр Hasbro. Какую? — это будет сюрприз. В комбо — две пиццы 35 см для"},
    {id: "2", img: "https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1587679439_7b97c974cfb8444497bfe3e61100a8f1.jpeg?2000758435", name: "Крутые компьютерные призы", description: "HYPERPC — промокод на бесплатную пиццу «Цыпленок ранч» 25 см и шанс выиграть крутые призы от HYPERPC: игровой компьютер HYPERPC LUMEN"},
    {id: "3", img: "https://dodopizza-a.akamaihd.net/static/Img/BonusActionBanners/Gallery/g_1587328223_34a336b06e7d4dca9ddf0c00faad6cee.jpeg?713303629", name: "Картофель с беконом или цыпленком", description: "Горячая новинка: картофель из печи с сочным беконом, огурчиками и соусом барбекю или с нежным цыпленком и благородным сыром блю чиз."},
]


const Stock = () =>{
    return(
        <div>
            <Offer data={stockData}/>
            <Offer data={stockData}/>
            <Offer data={stockData}/>
        </div>
    )
}

export default Stock