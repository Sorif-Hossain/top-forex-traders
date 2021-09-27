
function Traders(props) {
   
    const{name, age, img, country,experience,ratings,fee} = props.item;
    const {addToCart, item} =props;
    return (
        <div className= 'card-container text-center'>
            <div className="card h-100">
                <img src={img} className="rounded-circle d-block mx-auto" alt=''/>
                <div className="card-body">
                <h4 className="card-title">Name: {name}</h4>
                <h6>Age: {age}</h6>
                <h6>Country: {country}</h6>
                <h6>Experience: {experience} years</h6>
                <h6>Ratings: {ratings}</h6>
                <h4>Consult Fee: ${fee}</h4>
                <button className="btn btn-add text-light mt-3" onClick={() => addToCart(item)}><i className="bi bi-bag-check bt-icon"></i>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Traders
