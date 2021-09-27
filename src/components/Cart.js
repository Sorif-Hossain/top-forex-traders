
function Cart(props) {
    const {cart} = props
    let total = 0;
    
    cart.forEach(item =>{
        total+= item.fee 
    })
    return (
        <div className='main-cart text-center position-fixed ms-2'>
            <h2 className='mt-3'><i className="bi bi-person-circle"></i> Traders Selected: {cart.length}</h2>
            <h3>Total Cost: ${total}</h3>
            <h4>Selected Names:</h4>
            {
               cart.map(item=> <h5 className='fst-italic text-muted' key ={item.id}>{item.name}</h5>)
            }
            <button className='btn btn-outline-success fw-bold my-3'>Book Now</button>
           
        </div>
    )
}

export default Cart
