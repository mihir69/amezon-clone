import React ,{useEffect}from 'react'
import header_css from './Header.module.css';
import logo from './img/amazon_logo.png';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user },dispatch] = useStateValue();
    const handleAuthentication = () => {
        
        if (user)
        { 
        
            auth.signOut();
        }
           
    }
    useEffect(() => { 
        auth.onAuthStateChanged(authUser => {
          console.log("this is the use===>"+authUser)
          if (authUser) {
           dispatch({
              type: 'SET_USER',
              user: authUser
            })
          } else {
           dispatch({
              type: 'SET_USER',
              user: null
            })
          }
        }
        )
      },[])
    return (
        <div className={header_css.header}>
            <Link to='/'>
                <img className={header_css.header__logo}
                    src={logo} alt='SOCET' />


            </Link>
            <div className={header_css.header__search}>
                <input
                    className={header_css.header__searchInput}
                    type='text'
                />
                {/* logo */}
                <div className={header_css.header_searchIcon}>

                    <i class="fa fa-search" aria-hidden="true"></i>

                </div>
            </div>
            <div className={header_css.header__nav}>
                <Link to={!user &&  '/login'}>
                    <div onClick={handleAuthentication} className={header_css.header__option}>
                        <span
                            className={header_css.header__optionLineOn}
                        >Hello {user ? user.email : 'guest'}
                        </span>
                        <span
                            className={header_css.header__optionLineTw}
                        >
                            {user ? 'Sign Out' : 'Sign in'}
                        </span>
                    </div>
                </Link>

                <div className={header_css.header__option}>
                    <span
                        className={header_css.header__optionLineOn}
                    >Return
                    </span>
                    <sapn
                        className={header_css.header__optionLineTw}
                    >
                        Orders
                  </sapn>
                </div>

                <div className={header_css.header__option}>
                    <span
                        className={header_css.header__optionLineOn}
                    >Your
                    </span>
                    <sapn
                        className={header_css.header__optionLineTw}
                    >
                        Prime
                  </sapn>

                </div>
                <Link to='/checkout'>
                    <div className={header_css.header__optionBasket}>
                        <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                        <span className={[header_css.header__basketCount, header_css.header__optionLineTw]}>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div >
        </div >
    )
}

export default Header
