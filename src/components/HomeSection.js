import photo from '../images/olivia-hyland.jpg';
import { Typography } from '@mui/material';

const HomeSection = () => {
    return (
        <div className="homeSection">
            <Typography component="h1">Olivia Hyland</Typography>
            <Typography component="h2">Front end Web Developer</Typography>
            <img src={photo} alt={'Olivia Hyland'} />
            <Typography component="h2">Skills</Typography>
            <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>Material Ui</li>
                <li>Git</li>
            </ul>
        </div>
    );
};

export default HomeSection;
