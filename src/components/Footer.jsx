export function Footer({ logo }) {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <img src={logo} alt="logo" className="logo" />
          <div className="center-content">
            <ul className="rechtliches">
              <li>
                <b>Rechtliches</b>
              </li>
              <li>
                <a href="#">AGB</a>
              </li>
              <li>
                <a href="#">Datenschutzerklärung</a>
              </li>
            </ul>
          </div>
          <ul className="social-media-icons">
            <li>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-facebook"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-twitter"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fa fa-instagram"></span>
              </a>
            </li>
          </ul>
        </div>
        <span>© 2023 Marvin Sprey</span>
      </div>
    </>
  )
}
