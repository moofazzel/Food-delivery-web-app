import '../Navbar.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MobileNavItem = ({ detailNav, openDetailNav }) => {
    return (
        <div className={`detailNav block lg:hidden shadow-lg shadow-gray-300 ${detailNav == true ? 'open_detail' : ''}`}>
            <button
                className="close_btn_2 "
                onClick={openDetailNav}
            >
                <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
            </button>
            <ul className="mega_item">
                <h3 className="text-white text-lg font-semibold border-b border-[111] mb-4">North Italian</h3>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
            </ul>
            <ul className="mega_item">
                <h3 className="text-white text-lg font-semibold border-b border-[111] mb-4">North Italian</h3>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
            </ul>
            <ul className="mega_item">
                <h3 className="text-white text-lg font-semibold border-b border-[111] mb-4">North Italian</h3>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
                <li><a href="">Chinese Popcorn</a></li>
                <li><a href="">English Breakfast</a></li>
            </ul>

        </div>
    )
}

export default MobileNavItem