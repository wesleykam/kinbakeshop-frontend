import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <div className='cafe-menu'>
            <h2>Cafe</h2>
            <h3>ESPRESSO</h3>
            <ul className='espresso'>
                <li>Einspanner</li>
                <li>Black Sesame Cream Top</li>
                <li>Cream Top</li>
                <li>Vietnamese Coffee</li>
                <li>Jasmine Oat Latte</li>
            </ul>
            <h3>TEA</h3>
            <ul className='tea'>
                <li>Matcha Einspanner</li>
                <li>Hojicha Einspanner</li>
                <li>Matcha Black Sesame Cream Top</li>
                <li>Hojicha Black Sesame Cream Top</li>
                <li>Ssuk (Mugwort)*</li>
                <li>Matcha Latte</li>
                <li>Hojicha Latte</li>
            </ul>
        </div>


        <div className='current-menu'>
            <div className='info'>
                <h2>Current Menu</h2>
                <div className='description'>
                    <p>Our menu changes weekly. Check instagram stories for the latest updates and current selections!</p>
                    <br/>
                    <p>Cafe specials and mochi muffin flavors change daily. Hokkaido Brioche donut flavors and mochi donut flavors change weekly</p>
                </div>
                <button className='instagram-button'>Our Instagram</button>
            </div>
        </div>

        <div className='cafe-specials'>
            <div className='info'>
                <p className='disclaimer'>at least one is featured each weekend</p>
                <h2>Cafe Specials</h2>
                <ul className='thai-tea'>
                    <li>Thai Tea Cream Top</li>
                </ul>
                <ul className='banana'>
                    <li>Banana Milk Cream Top</li>
                </ul>
                <ul className='strawberry'>
                    <li>Strawberry Milk</li>
                    <li>Strawberry Matcha Latte</li>
                    <li>Strawberry Hojicha Latte</li>
                    <li>Strawberry Yakult Mint Tonic</li>
                </ul>
                <ul className='mango'>
                    <li>Mango Milk</li>
                    <li>Mango Matcha Latte</li>
                </ul>
                <ul className='raspberry'>
                    <li>Raspberry Lychee Spritz</li>
                </ul>
                <ul className='yuzu'>
                    <li>Yuzu Lemon Tonic</li>
                </ul>
                <ul className='peach'>
                    <li>Matcha White Peach Tonic</li>
                    <li>Matcha Yellow Peach Tonic</li>
                </ul>
                <ul className='blueberry'>
                    <li>Blueberry Milk</li>
                    <li>Blueberry Matcha Latte</li>
                    <li>Wild Blueberry Spritz</li>
                </ul>
                <ul className='horchata'>
                    <li>Horchata Hojicha</li>
                    <li>Horchata Espresso</li>
                </ul>
                <ul className='chocolate'>
                    <li>Hot Chocolate</li>
                </ul>
            </div>
        </div>

        <div className='mochi-donuts'>
            <div className='info'>
                <p className='disclaimer'>check instagram stories for the latest menu</p>
                <h2>Mochi Donuts</h2>
                <p>4 flavors are featured each week, along with cinnamon sugar</p>
            </div>
        </div>
    </div>
  )
}

export default Menu
