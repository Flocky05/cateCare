


const CatDetail = (props) => {
const {img}=props.caty;
    return (
        <div>
            <img src={img} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ducimus consequuntur tempore modi. Odio libero alias fuga quisquam, autem officia molestias a nemo modi. Earum, in? Ad sit nihil fugiat.</p>
        </div>
    );
};

export default CatDetail;