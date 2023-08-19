import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import '../Navbar.css';

const MobileNavItem2 = ({ detailNav2, openDetailNav2 }) => {
    return (
        <div className={`detailNav shadow-lg shadow-gray-300 block lg:hidden ${detailNav2 == true ? 'open_detail' : ''}`}>
            <button
                className="close_btn_2 "
                onClick={openDetailNav2}
            >
                <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
            </button>
            <ul className="mega_item">
                <h3 className="text-white text-lg font-semibold border-b border-[111] mb-4">North Italian</h3>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
            </ul>
            <ul className="mega_item">
                <h3 className="text-white text-lg font-semibold border-b border-[111] mb-4">North Italian</h3>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
            </ul>
            <ul className="mega_item">
                <h3 className="text-white text-lg font-semibold border-b border-[111] mb-4">North Italian</h3>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Indian Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
            </ul>

        </div>
    )
}

export default MobileNavItem2