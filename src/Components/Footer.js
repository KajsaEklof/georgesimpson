import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer container">
      <p>© George Simpson {year}</p>
      <p className="creator">
        Website by{" "}
        <a
          href="www.kajsaeklof.com"
          className="link"
          title="Kajsa Eklöf's website."
        >
          Kajsa Eklöf
        </a>
      </p>
    </footer>
  )
}

export default Footer
