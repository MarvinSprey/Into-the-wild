import { useState } from "react"

export function Newsletter({ heading, text }) {
  const [send, setSend] = useState(false)

  function handleClick() {
    setSend(true)
  }

  const thankYou = send ? (
    <div className="subscribe">
      <h4>Vielen Dank für dein Interesse!</h4>
      <span>
        Wäre an diese Seite ein Backend oder etwas anderes, das serverseitig
        arbeiten könnte, angeschlossen, könntest du jetzt regelmäßige Newsletter
        erhalten!
      </span>
    </div>
  ) : (
    <div className="subscribe">
      <h2 className="subscribe__title">{heading}</h2>
      <p className="subscribe__copy">{text}</p>
      <div className="form">
        <input
          type="email"
          className="form__email"
          placeholder="Deine Email Adresse"
        />
        <button onClick={() => handleClick()} className="btn">
          Abschicken
        </button>
      </div>
    </div>
  )

  return thankYou
}
