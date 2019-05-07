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
        <Link to="/goer-valget-groent" className="navbar-item" title="Logo">
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
          <a className="navbar-item" href="https://actionnetwork.org/event_campaigns/valgmodekortet-gor-valget-gront-ved-at-kortlaegge-og-deltage-i-valgmoder" target="_blank">
            Valgdebatkort
          </a>
          </li>
          <li className="menu-item has-children">
            <a href="#">Engagér flere</a>
            <ul className="sub-menu">
              <li>
                <a className="navbar-item" href="https://www.notion.so/goervalgetgroent/S-dan-kan-du-g-re-valget-gr-nt-154987ddec494ece84847a9febc527b8" target="_blank">
                  Sådan kan du gøre valget grønt
                </a>
              </li>
              <li>
                <a className="navbar-item" href="https://www.notion.so/G-r-valgm-derne-gr-nne-94cdb4e31ca64d278b986e1c0f340c96/" target="_blank">
                  Gør valgdebatterne grønne
                </a>
              </li>
              <li>
                <Link className="navbar-item" to="/middag" activeClassName="active">
                  Hold en Grøn Middag
                </Link>
              </li>
              <li>
                <a className="navbar-item" href="https://www.notion.so/goervalgetgroent/Hold-et-gr-nt-v-rksted-67328447f2aa4a57ab17f2983e494101" target="_blank">
                Hold et Grønt Værksted
                </a>
              </li>
              <li>
                <Link to="/events" activeClassName="active">
                  Deltag i en grøn middag eller værksted
                </Link>
              </li>
              <li>
                <a href="https://actionnetwork.org/forms/hjaelp-mig-gore-finansministeriet-gront-nu" target="_blank">
                  Skriv under: Gør finansministeriet grønt
                </a>
              </li>
              <li>
                <a href="https://actionnetwork.org/forms/haab-ikke-had" target="_blank">
                  Skriv under: "Håb, ikke Had"
                </a>
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
                  <Link className="navbar-item" to="/hvem-staar-bag" activeClassName="active">
                  Hvem står bag?
                  </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/vores-maal" activeClassName="active">
                    Om vores tre krav
                  </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/kontakt" activeClassName="active">
                    Kontakt
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
