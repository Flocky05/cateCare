

const Cat = (props) => {
    const {img,cat_name,cat_age,price}=props.cat;
    return (
        <div>
            <img src={img} alt="" />
            <h2>Cat Name : {cat_name}</h2>
            <h2>Cat Age :{cat_age} </h2>
            <h3>Price:{price} </h3>
        </div>
    );
};

export default Cat;