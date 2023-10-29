export function Columns({ content }) {
  return (
    <div className="cc">
      {content &&
        content.map((cont, index) => (
          <div className="column-container" key={index}>
            <img src={`${cont[0]}`} />
            <h5>{cont[1]}</h5>
            <span>{cont[2]}</span>
          </div>
        ))}
    </div>
  )
}
