
import './Pagination.css'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = () => {
    return (
    <>
        <div>
            <ul className="pagination">
                <li><a href="#"><BiChevronLeft /></a></li>
                <li className="active-li"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li>......</li>
                <li><a href="#">10</a></li>
                <li><a href="#"><BiChevronRight /></a></li>
            </ul>
        </div>
    </>
);
}

export default Pagination;
