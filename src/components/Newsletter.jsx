export function Newsletter({ heading, text, darkMode }) {
  return (
    <div className="subscribe">
      <h2 className="subscribe__title">{heading}</h2>
      <p className="subscribe__copy">{text}</p>
      <div className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Deine Email Adresse"
        />
        <button className="btn">Abschicken</button>
      </div>
    </div>
  )
}
