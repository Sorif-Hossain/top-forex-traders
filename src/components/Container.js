import { useEffect, useState } from 'react'
import Cart from './Cart'
import Traders from './Traders'


function Container() {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('https://imbillah.github.io/my-json-db/data/mydata.json')
        .then(res => res.json())
        .then(data=> setItems(data))
    },[])
    const addToCart = item =>{
        const newCart = [...cart, item]
        setCart(newCart)
    }
    return (
        <div className='main-container'>
            <div className='item'>
            {
                items.map(item => <Traders
                key= {item.id}
                item = {item}
                addToCart ={addToCart}
                /> )
            }
            </div>
            <div>
                <Cart cart ={cart}/>
            </div>
            
        </div>
    )
}

export default Container
