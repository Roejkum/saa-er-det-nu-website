import React from 'react'
import { Link } from 'gatsby'


export default class Navbar extends React.Component {
  state = {
    menuOpened: false
  }
  
  menuToggleHandler = () => {
    const menuOpenedState = this.state.menuOpened;
    this.setState({
      menuOpened: !menuOpenedState
    });
  }

  render() {
 return (

  <header id="masthead" className="site-header">
    <div className="wrap container-fluid">
      <div className="site-branding">
        <Link to="/" className="navbar-item" title="Logo">
          Så er det nu!
        </Link>
      </div>
      <nav id="site-navigation" className={this.state.menuOpened ? 'main-navigation toggled' : 'main-navigation'}>
        <button onClick={this.menuToggleHandler} className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
        <div className="menu-main-container"><ul id="primary-menu" className="menu">
          <li>
            <a href="http://valg.saaerdet.nu">Prik en politiker</a>
          </li>
          <li>
          <Link className="navbar-item" to="/events" activeClassName="active">
            Valgdebatkort
          </Link>
          </li>
          <li className="menu-item has-children">
            <a href="#">Engagér flere</a>
            <ul className="sub-menu">
              <li>
                <Link className="navbar-item" to="/middag" activeClassName="active">
                  hold grøn middag
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/middag" activeClassName="active">
                  hold et grønt værksted
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/middag" activeClassName="active">
                  “underskriftsindsamling 1”
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/middag" activeClassName="active">
                  “underskriftsindsamling 2”
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children"><a href="#">Om så er det nu</a>
            <ul className="sub-menu">
              <li>
                  <Link className="navbar-item" to="/om-os" activeClassName="active">
                    Om Så Er Det Nu
                  </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/om-os" activeClassName="active">
                    Hvem står bag “så er det nu”
                  </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/middag" activeClassName="active">
                    om vores tre krav
                  </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/kontakt" activeClassName="active">
                    kontakt
                  </Link>
              </li>
            </ul>
          </li>
         
        </ul>
        </div>            
      </nav>
    </div>
  </header>


  // <nav className="main-menu closed" id="navbar">
	// <div className="container">
	// 	<div className="row between-xs middle-xs">
	// 		<div className="col col-auto-lg navbar-mobile">
	// 			<div className="brand">
  //         <Link to="/" className="navbar-item" title="Logo">
  //           Så er det nu!
  //         </Link>
	// 			</div>
	// 			<button className="menu-toggle btn" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
	// 				<span className="icon-bar top-bar"></span>
	// 				<span className="icon-bar middle-bar"></span>
	// 				<span className="icon-bar bottom-bar"></span>
	// 			</button>
	// 		</div>
	// 					<div className="col col-auto-lg main-menu-inner">
	// 						<ul className="list-inline">
  //               <li>
  //                 <Link className="navbar-item" to="/" activeClassName="active">
  //                   Side 1
  //                 </Link>
  //                 <Link className="navbar-item" to="/" activeClassName="active">
  //                   Side 1
  //                 </Link>
  //               </li>
  //             </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
 )}
}
