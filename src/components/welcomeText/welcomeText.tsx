// Navbar.js
import './aboutMe.css'; // Import the CSS file
import { Text, Center } from '@mantine/core';

const WelcomeText = () => {
    return (
    <div className='gradientClass' style={{ textShadow: '3px 3px 60px grey' }} >
    <Center maw={1920} mah={1080} pt={"md"} pb={"xl"}>
        <Text pr={"30px"} pl={"40px"} fz={40} fw={700}>About Me</Text>
            <div className="Text" style={{ borderLeft: '4px solid gray', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '30px' }}>
            <Text fz={23} pl={'25px'}>YouTube to MP4</Text> 
            <Text fz={23} pl={'25px'}>By Meiscool125</Text> 
            </div>
    </Center> 
    </div>
    );
};
export default WelcomeText;