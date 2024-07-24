// Navbar.js
import './welcomeText.css'; // Import the CSS file
import { Text, Center } from '@mantine/core';

export function WelcomeText (){
    return (
    <div className='gradientClass'>
    <Center maw={1920} mah={1080} pt={"md"} pb={"xl"}>
        <Text pr={"30px"} pl={"40px"} fz={40} fw={700}>YouTube to MP4</Text>
            <div className="Text" style={{ borderLeft: '4px solid gray', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px', borderRadius: '0px' }}> 
            <Text fz={23} pl={'25px'}>By Meiscool125</Text> 
            </div>
    </Center> 
    </div>
    );
}