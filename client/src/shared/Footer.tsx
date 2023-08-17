
import './Footer.css';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
  const footerCols = [
    {
      id: 1,
      title: 'Help',
      content: [{ id: 1, item: "Search" },
      { id: 2, item: "Help" },
      { id: 3, item: "Information" },
      { id: 4, item: "Privacy Policy" },
      { id: 5, item: "Shipping Details" },
      ],
    },
    {
      id: 2,
      title: 'Support',
      content: [{ id: 1, item: "Contact" },
      { id: 2, item: "About" },
      { id: 3, item: "Refund" },
      { id: 4, item: "Delivery" },

      ],

    },
    {
      id: 3,
      title: 'Information',
      content: [{ id: 1, item: "Search Term" },
      { id: 2, item: "Advanced Search" },
      { id: 3, item: "Faqs and Help" },
      { id: 4, item: "Store Location" },

      ],

    },
    {
      id: 4,
      title: 'Contact Us',

      content: [
        { id: 1, item: " 58 A, East Madison Street, Baltimore, MD, USA 4508", icon: HomeIcon },
        { id: 2, item: " 0000 - 123456789", icon: PhoneIcon },
        { id: 3, item: " mail@example.com, MD, USA 4508", icon: EmailIcon },
        { id: 4, item: " 9.30AM - 7.30PM", icon: AccessTimeIcon },
      ],
    },
  ];

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


      <div className="flex items-center justify-center gap-6">
        {
          footerCols.map((col) => (
            <div className="w-full md:w-6/12 lg:w-4/12 mt-2" key={col.id}>
              <h2 className="mb-4 text-sm font-semibold text-[#f7f7f7] capitalize dark:text-white">
                {col.title}
              </h2>
              {
                col.content.map((mItem) => (
                  <ul key={mItem.id} className="text-lightTextColor flex flex-col gap-y-2 text-sm font-normal capitalize mb-6">
                    <li>

                      <a className="hover:underline">
                        {mItem.item}
                      </a>
                    </li>


                  </ul>
                ))
              }

            </div>
          ))
        }

      </div>
    </footer>
  );
};




export default Footer
