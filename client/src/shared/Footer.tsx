
import './Footer.css';
const Footer = () => {
  // const footerColumns = [
  //   {
  //     title: 'Column 1',
  //     content: ['Link 1', 'Link 2', 'Link 3'],
  //   },
  //   {
  //     title: 'Column 2',
  //     content: ['Link 4', 'Link 5', 'Link 6'],
  //   },
  //   {
  //     title: 'Column 3',
  //     content: ['Link 7', 'Link 8', 'Link 9'],
  //   },
  //   {
  //     title: 'Column 4',
  //     content: ['Link 10', 'Link 11', 'Link 12'],
  //   },
  // ];

  return (
    <footer className="footer_bg">
      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerColumns.map((column, index) => (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
            <ul className="space-y-2">
              {column.content.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="hover:text-gray-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </footer>
  );
};




export default Footer
