import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SciFi from '../images/sci-fi-icon.svg'
import HarryPotter from '../images/harry-poter-icon.svg'
import Crime from '../images/crime-icon.svg'
import Fantsay from '../images/fantasy-icon.svg'
import Exam from '../images/exams-icon.svg'
import '../Css/SectionTop.css'
function SectionTop() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
            <div className='box'>
                <img src={SciFi} alt="" />
                <Typography className='text'>Sci-Fi</Typography>

            </div>
            <div className='box'>
                <img src={HarryPotter} alt="" />
                <Typography className='text' >Harry Potter</Typography>
            </div>
            <div className='box'>
                <img src={Crime} alt="" />
                <Typography className='text' >Crime</Typography>

            </div>
            <div className='box'>
                <img src={Fantsay} alt="" />
                <Typography className='text' >Fantasy</Typography>

            </div>
            <div className='box'>
                <img src={Exam} alt="" />
                <Typography className='text' >Exams</Typography>

            </div>
        </Box>
    )
}

export default SectionTop