import './Header.css';

import BgDeskTopDark from '../../aseets/images/bg-desktop-dark.jpg'
import BgDeskTopLight from '../../aseets/images/bg-desktop-light.jpg'

const Header = (props) => {
  const {isDarkMode} = props
  return (
    <header className="App-header" style={{
      backgroundImage: `url(${isDarkMode ? BgDeskTopDark : BgDeskTopLight})`,
      backgroundSize: 'cover'
    }}>
    </header>
  );
}

export default Header;