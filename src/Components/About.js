import React from "react";
import Styled from "styled-components";
import { device } from "./ComponentStyles/Device";

const About = () => {

    const Container = Styled.div`
    line-height: 1.4;    
    margin: 0 auto;
            
    @media ${device.desktop} {
        width: 60%;
      }
    `
  return (
    <Container>
      <h2>About me</h2>
      <p>
        I am a professionally trained, freelance Steadicam Operator/ Owner and
        Camera Operator based in south London. After graduating from
        Ravensbourne University with a degree in Broadcast Operations I went on
        to work at one of London’s largest and busiest broadcast hire
        facilities. There I learnt the equipment inside and out and honed my
        operating and assisting skills when out crewing on such shows as Peep
        Show and Made in Chelsea. After 2 and a half years working at the
        facilities company I went on to follow my true passion of Steadicam. I
        have now been operating for over 4 years working on multiple short
        films, music promos and corporate events. As well as Steadicam, I often
        operate for many talented DOPs, working across corporate, documentary,
        music promos, entertainment and TV drama. I strive to impress in any
        professional environment I work in, whether that is in a team or working
        solely. You can guarantee my hard working and adaptable nature will be
        present throughout production.
      </p>
    </Container>
  )
}

export default About
