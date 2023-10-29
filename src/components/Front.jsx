import { CTA } from "./CTA"

export function Front({
  logo,
  heading,
  subheading,
  catching,
  backgroundImage1,
  cta,
  darkMode,
  toggle,
}) {
  return (
    <div className="front-container">
      <div className="left-section">
        <div className="container">
          <label className="dark-mode-toggle" htmlFor="dark-mode-checkbox">
            Dark Mode
            <input
              type="checkbox"
              id="dark-mode-checkbox"
              checked={darkMode}
              onChange={toggle}
              className="toggle-checkbox"
            />
            <span className="toggle-label"></span>
          </label>

          <img src={logo} alt="logo" />
          <h1 className="light">{heading}</h1>
          <h2 className="light">{subheading}</h2>
          <span className="light">{catching}</span>
          <CTA cta={cta} />
        </div>
      </div>
      <div className="right-section">
        <img src={backgroundImage1} alt="Hintergrund" />
      </div>
    </div>
  )
}
