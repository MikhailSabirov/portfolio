import github_icon from './github_icon.png';
import telegram_icon from './telegram_icon.png'
export default function Header(){
    return(
     <div className="header">
        <div className="logo">MS</div>
       <nav className='header_container'>
            <a className="a_header" href="#">Skills</a>
            <a className="a_header" href="#">Projects</a>
            <a className="a_header" href="#">Contacts</a>
          </nav>
     <div className="icons">
    <a href="https://t.me/mikhail_sabirov" target="_blank" rel="noopener noreferrer">
  <img className='header_icon' src={telegram_icon} alt="Telegram"/>
</a>

<a href="https://github.com
MikhailSabirov" target="_blank" rel="noopener noreferrer">
  <img className='header_icon' src={github_icon} alt="GitHub"/>
</a>
     </div>
     </div>
    )
}