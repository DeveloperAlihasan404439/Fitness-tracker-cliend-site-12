import { Link } from "react-router-dom";


const Trainer = () => {
    return (
        <div>
            <div className="flex justify-center my-5">
                <Link to='/tarinerApply' className="btn">
                    <button>Trainer for Apply</button>
                </Link>
            </div>
        </div>
    );
};

export default Trainer;