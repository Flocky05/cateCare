import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between text-white bg-blue-950 p-4 px-10">
                <Link to="/" className="text-3xl font-semibold">Cate</Link>
                <div className="grid grid-cols-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;