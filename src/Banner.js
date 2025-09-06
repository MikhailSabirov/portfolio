import myphoto from './myphoto.png'
export default function Banner(){
    return(
        <div className="banner">
          <div><span style={{color: '#E0E0E0', fontSize: '28px'}}>Hi, my name is</span><br/><span style={{color: '#E0E0E0', fontSize: '42px'}}>Mikhail Sabirov</span><br/><span style={{fontSize: '38px'}} className='gradient-text'>I am a Software Engineer,
          </span><br/><span style={{color: '#E0E0E0', fontSize: '28px'}}>studying information systems and<br/> technologies at ITMO University</span>
          </div>
          <img className="banner_img" src={myphoto}/>
        </div>
    )
}