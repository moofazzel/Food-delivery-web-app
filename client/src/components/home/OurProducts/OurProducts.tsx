import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../../../styles/CommonStyle.css';
import Breakfast from './Breakfast';
import Launch from './Launch';
import Dinner from './Dinner';

import paper from '../../../assets/Common/paper-design.webp';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const OurProducts = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const commonStyle = {
    color: '#ffffff',
    backgroundColor: '#f4b618',
    marginRight: '6px',
    '&.Mui-selected': {
      backgroundColor: '#c00a27',
      color: '#ffffff',
      transitionDuration: '0.7s',
    },
  };

  return (
    <div className="relative py-20">
      <img
        src={paper}
        alt="Paper Design"
        className=" w-full z-50 absolute -top-[100px] hidden md:block"
      />

      <div className="container px-4 mt-6 md:mt-0">
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl lg:text-5xl text-black mb-6">Our Products</h2>
          <p className="text-sm lg:text-xl leading-9 text-black">
            Quam pellentesque nec nam aliquam sem et tortor consequat. Ut
            placerat orci
            <br className="hidden md:block" />
            nulla pellentesque dignissim enim sit amet venenatis.
          </p>
        </div>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              margin: 'auto',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Breakfast" {...a11yProps(0)} sx={commonStyle} />
              <Tab label="Launch" {...a11yProps(1)} sx={commonStyle} />
              <Tab label="Dinner" {...a11yProps(2)} sx={commonStyle} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Breakfast />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Launch />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Dinner />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default OurProducts;
