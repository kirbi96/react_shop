import React from "react";
import {Owl} from "../banner/Owl";
import {Product} from "../product/Product";
import {ProductTitle} from "../product/ProductTitle";


const Data = {
    productCombo: [
        { id: 1, img: "https://dodopizza-a.akamaihd.net/static/combotemplates/292/25__snk_drink_sauce.jpg", name: 'Комбо за 599 ₽', description: 'Быстрый заказ: наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус. Выбор пицц ограничен', price: "599" },
        { id: 2, img: "https://dodopizza-a.akamaihd.net/static/combotemplates/292/2_25_drink/combo1_hit.jpg", name: 'Две пиццы и напиток', description: 'В комбо: 2 пиццы 25 см и напиток на выбор. Для компании из 2–4 человек.', price: "719" },
        { id: 3, img: "https://dodopizza-a.akamaihd.net/static/combotemplates/292/2_30/combo5_discount.jpg", name: 'Пока все дома', description: 'Самое популярное комбо: 2 пиццы 30 см. Большой выбор пицц.', price: "899" },
    ],
    productPizza: [
        { id: 4, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/c1d628642bfb45a6be2a6368142a8dd2_292x292.jpeg", name: 'Пицца из половинок', description: 'Соберите свою пиццу 35 см с двумя разными вкусами', price: "520" },
        { id: 5, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/04dff3cf16144112aabdd5f79182f663_292x292.jpeg", name: 'Деревенская', description: 'Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус', price: "375" },
        { id: 6, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/c7dae007-a646-49da-9240-d0d164be662c.jpg", name: 'Чизбургер-пицца', description: 'Мясной соус болоньезе, моцарелла, красный лук, соленые огурчики, томаты, соус бургер', price: "375" },
    ],
    productSnacks: [
        { id: 7, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/d80df42e59ed4f2c912f348145c055e2_292x292.jpeg", name: 'Томатный суп с гренками', description: 'Суп на основе натурального томатного соуса с хрустящими гренками.', price: "99" },
        { id: 8, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/a196c07473324697b38f5d0e47ce5cd3_292x292.jpeg", name: 'Додстер', description: 'Фирменный горячий ролл. Цыпленок, томаты, моцарелла и соус ранч в тонкой пшеничной лепешке', price: "159" },
        { id: 9, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/58b7f4f95db1440aa9dc45ce738964e8_292x292.jpeg", name: 'Ланчбокс с куриными кусочками', description: 'Горячий сытный обед с нежными куриными кусочками, картофелем из печи и сырным соусом', price: "295" },
    ],
    productDessert: [
        { id: 10, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/2019da9ffcfc43148ce3731413b9c042_292x292.jpeg", name: 'Коктейль Шоколадный, 0,39 л', description: 'Напиток из молока и мороженого с шоколадным сиропом', price: "175" },
        { id: 11, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/b4e88ba588644937b30bee18ba51a52e_292x292.jpeg", name: 'Рулетики с ананасом и корицей, 16 шт', description: 'Сладкие рулетики с ананасом и корицей, политые сгущенным молоком, 16 шт.', price: "165" },
        { id: 12, img: "https://dodopizza-a.akamaihd.net/static/Img/Products/8c448aab16474fb8aa79461e3814bf08_292x292.jpeg", name: 'Манго-шейк, 0,35 л', description: 'Напиток из молока с добавлением пюре манго', price: "155" },
    ],
    titleName: [
        {id: "pizza", name: "Пиццы"},
        {id: "snacks", name: "Закуски"},
        {id: "dessert", name: "Десерты"},
        {id: "combo", name: "Комбо"},
    ]

}



const Home = (props) =>{

    return(
        <div className="">
            <Owl/>
            <Product products={Data.productCombo}/>
            <Product products={Data.productCombo}/>

            <ProductTitle title={Data.titleName[0]} />
            <Product products={Data.productPizza}/>

            <ProductTitle title={Data.titleName[1]} />
            <Product products={Data.productSnacks}/>

            <ProductTitle title={Data.titleName[2]} />
            <Product products={Data.productDessert}/>
        </div>
    )
}

export default Home