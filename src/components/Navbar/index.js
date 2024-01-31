import {Link} from 'react-router-dom'
import {Navbarcontainer, Logo} from './styledComponents'

const Navbar = () => (
  <Navbarcontainer>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Navbarcontainer>
)
export default Navbar
