import React from "react"
import Layout from "../Components/Layout"
import { Link } from "gatsby"
import Section from "../Components/Section"
import CountUp from "react-countup"
import BehindStyles from "../Components/behindthescenes.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

const BHTSPage = () => {
  return (
    <Layout>
      <h1>Behind the Scenes</h1>
      <Section title="Used in 2020" />
      <div className="row">
        <div className="col-md-4 text-center">
          <CountUp
            className={BehindStyles.counter}
            delay={0.5}
            duration={3}
            separator=" "
            useEasing={true}
            end={136}
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          />
          <h4 className={BehindStyles.label}>Cups of coffee</h4>
        </div>
        <div className="col-md-4 text-center">
          <CountUp
            className={BehindStyles.counter}
            delay={0.5}
            duration={2.8}
            separator=" "
            useEasing={true}
            end={243}
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          />
          <h4>Zip ties</h4>
        </div>
        <div className="col-md-4 text-center">
          <CountUp
            className={BehindStyles.counter}
            delay={0.5}
            duration={2.75}
            separator=" "
            useEasing={true}
            end={129}
            onEnd={() => console.log("Ended! 👏")}
            onStart={() => console.log("Started! 💨")}
          />
          <h4>Meters of tape</h4>
        </div>
      </div>

      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export default BHTSPage
