import { useState, useEffect } from "react"
import { Columns } from "./components/Columns"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"
import { Front } from "./components/Front"
import { Image_with_text } from "./components/Image_with_text"
import { Newsletter } from "./components/Newsletter"
import hiking from "./assets/hiking.png"
import camera from "./assets/camera.png"
import canoe from "./assets/canoe.png"
import raft from "./assets/life-raft.png"
import meal from "./assets/outdoor-meal.png"
import paw from "./assets/paw.png"
import stars from "./assets/stars.png"
import "./index.css"

const query = `{
  landingpageCollection {
    items {
      logo {
        url
      }
      heading
      subheading
      catching
      cta
      backgroundImage1 {
        url
      }
      heading2
      subheading2
      catching2
      column11 {
        json
      }
      column12 {
        json
      }
      column13 {
        json
      }
      heading3
      column21 {
        json
      }
      column22 {
        json
      }
      column23 {
        json
      }
      column24 {
        json
      }
      catching3 {
        json
      }
      backgroundImage2 {
        url
      }
      logo2 {
        url
      }
    }
  }
}`

function App() {
  const [page, setPage] = useState(null)
  const [column1, setColumn1] = useState()
  const [column2, setColumn2] = useState()
  const [darkMode, setDarkMode] = useState(true)

  function toggle() {
    setDarkMode((prevDarkMode) => !prevDarkMode)
    const root = document.documentElement

    if (darkMode) {
      root.style.setProperty("--dark", "#fff")
      root.style.setProperty("--light", "#333")
    } else {
      root.style.setProperty("--dark", "#333")
      root.style.setProperty("--light", "#fff")
    }
  }

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/usrs53n713zy/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer PRCZkKZ5zCmhuZDliBitmQnLBjPfdCfBjIfNv8OynU0",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.log(errors)
        }
        setPage(data.landingpageCollection.items[0])
      })
  }, [])

  useEffect(() => {
    if (page) {
      const column11Content = page.column11.json.content
      const column12Content = page.column12.json.content
      const column13Content = page.column13.json.content
      const column21Content = page.column21.json.content
      const column22Content = page.column22.json.content
      const column23Content = page.column23.json.content
      const column24Content = page.column24.json.content
      const heading11 = column11Content[0].content[0].value
      const heading12 = column12Content[0].content[0].value
      const heading13 = column13Content[0].content[0].value
      const heading21 = column21Content[0].content[0].value
      const heading22 = column22Content[0].content[0].value
      const heading23 = column23Content[0].content[0].value
      const heading24 = column24Content[0].content[0].value
      const text11 = column11Content[1].content[0].value
      const text12 = column12Content[1].content[0].value
      const text13 = column13Content[1].content[0].value
      const text21 = column21Content[1].content[0].value
      const text22 = column22Content[1].content[0].value
      const text23 = column23Content[1].content[0].value
      const text24 = column24Content[1].content[0].value
      const url11 = hiking
      const url12 = stars
      const url13 = raft
      const url21 = canoe
      const url22 = meal
      const url23 = camera
      const url24 = paw
      setColumn1([
        [url11, heading11, text11],
        [url12, heading12, text12],
        [url13, heading13, text13],
      ])
      setColumn2([
        [url21, heading21, text21],
        [url22, heading22, text22],
        [url23, heading23, text23],
        [url24, heading24, text24],
      ])
    }
  }, [page])

  document.title = "Into the Wild - Landingpage"

  if (!page) {
    return <h1>"Loading..."</h1>
  }

  const logo = darkMode ? page.logo2.url : page.logo.url

  return (
    <>
      <Front
        logo={logo}
        heading={page.heading}
        subheading={page.subheading}
        catching={page.catching}
        backgroundImage1={page.backgroundImage1.url}
        cta={page.cta}
        darkMode={darkMode}
        toggle={toggle}
      />
      <div className="middle">
        <h3>{page.heading2}</h3>
        <h4>{page.subheading2}</h4>
        <span>{page.catching2}</span>
      </div>
      <Columns content={column1} />
      <div className="column-bg">
        <h3>Starte dein Abenteuer. Noch heute.</h3>
        <Columns content={column2} />
        <CTA cta={page.cta} />
      </div>
      <Image_with_text
        image={page.backgroundImage2.url}
        heading={page.heading2}
        subheading={page.subheading2}
        cta={page.cta}
      />
      <Newsletter
        heading={page.catching3.json.content[0].content[0].value}
        text={page.catching3.json.content[1].content[0].value}
      />
      <Footer logo={logo} />
    </>
  )
}

export default App
