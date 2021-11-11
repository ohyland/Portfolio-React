import photo from '../images/olivia-hyland.jpg';

const HomeSection = () => {
    return (
        <div className="homeSection">
            <h1>Olivia Hyland</h1>
            <p>Front end Web Developer</p>
            <img src={photo} alt={'Olivia Hyland'} />
            <h2>Skills</h2>
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
