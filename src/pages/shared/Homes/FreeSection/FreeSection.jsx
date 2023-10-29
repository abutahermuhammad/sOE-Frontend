import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const FreeSection = () => {

  return (
    <div className="container mx-auto text-[40px] text-center font-bold">
      <h1 className='text-white p-10'>নিজেকে যাচাই করুন</h1>
      <Tabs className="p-10 rounded-lg bg-gradient-to-t from-[#020957]  to-[#050936]" >
        <div>
          <TabList>
            <Tab className="tab tab-bordered text-[#38BDF8] text-[20px] border-none focus:outline-none ">
              ফ্রি ক্লাস
            </Tab>
            <Tab className="tab tab-bordered text-[#38BDF8] text-[20px] border-none focus:outline-none">
              ফ্রি ম্যাটেরিয়ালস
            </Tab>
            <Tab className="tab tab-bordered text-[#38BDF8] text-[20px] border-none focus:outline-none ">
              ফ্রি কুইজ
            </Tab>
          </TabList>
        </div>

        <TabPanel className="text-white">
          <div>
            <h2>Our Free Class is here</h2>
          </div>
        </TabPanel>
        <TabPanel className="text-white">
          <h2>Our Free Materials is here</h2>
        </TabPanel>
        <TabPanel className="text-white">
          <h2>Our Free Exam is here</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default FreeSection;