import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SciFi from '../images/sci-fi-icon.svg'
import HarryPotter from '../images/harry-poter-icon.svg'
import Crime from '../images/crime-icon.svg'
import Fantsay from '../images/fantasy-icon.svg'
import Exam from '../images/exams-icon.svg'
import '../Css/SectionTop.css'
import { useNavigate } from 'react-router-dom';
function SectionTop() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
            <div className='box'>
                <img src={SciFi} alt="" onClick={() => navigate("/search/Sci-Fi")} />
                <Typography className='text'>Sci-Fi</Typography>

            </div>
            <div className='box' onClick={() => { navigate("/search/:harrypotter") }}>
                <img src={HarryPotter} alt="" />
                <Typography className='text' >Harry Potter</Typography>
            </div>
            <div className='box'>
                <img src={Crime} alt="" onClick={() => navigate("/search/Crime")} />
                <Typography className='text' >Crime</Typography>

            </div>
            <div className='box'>
                <img src={Fantsay} alt="" onClick={() => navigate("/search/Fantsay")} />
                <Typography className='text' >Fantasy</Typography>

            </div>
            <div className='box'>
                <img src={Exam} alt="" onClick={() => navigate("/search/Exam")} />
                <Typography className='text' >Exams</Typography>

            </div>
        </Box>
    )
}

export default SectionTop