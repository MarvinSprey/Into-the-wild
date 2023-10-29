import { CTA } from "./CTA"

export function Image_with_text({ image, heading, subheading, cta }) {
  return (
    <div
      className="image-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container bg image">
        <h3>{heading}</h3>
        <h4>{subheading}</h4>
        <CTA cta={cta} />
      </div>
    </div>
  )
}
