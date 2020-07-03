import React from "react"
import { device } from "./ComponentStyles/Device"
import styled from "styled-components"
import Section from "./Section"
import "bootstrap/dist/css/bootstrap.min.css"


const KitList = () => {
  const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.desktop} {
      flex-direction: row;
    }
  `

  return (
    <Section title="Equipment">
      <div className="row">
        <div class="col-md-6">
          <h3>Steadicam</h3>
          <ul>
            <li>Steadicam EFP HD Carbon Fibre Rig</li>
            <li>Flowcine X-Arm</li>
            <li>Steadicam Exovest</li>
            <li>Sunbounce Winkiller</li>
            <li>V3 Antlers</li>
            <li>American Stand</li>
            <li>All necessary accessories, Cables, Batts, etc.</li>
          </ul>

          <h3>Camera / Lenses</h3>
          <ul>
            <li>Panasonic AU-EVA1 5.7K Camera</li>
            <li>16-35mm, 24-70mm, 70-200mm Canon Zoom Lenses</li>
            <li>Zacuto Gratical Eye EVF</li>
            <li>Tilta MB-T12 Mattebox plus Accessories</li>
            <li>4 x Angelbird 128GB SD cards</li>
            <li>3 x 96watt CORESWX V-Lok batteries</li>
            <li>IDX Quad Charger</li>
            <li>0.9 Grad Filter</li>
            <li>Rotating Polariser Filter</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3>Monitors / Wireless</h3>
          <ul>
            <li>Atomos Sumo 19 inch Monitor/Recorder</li>
            <li>SmallHD 703 Bolt Director’s Monitor</li>
            <li>Teradek 500LT Wireless Transmitter</li>
            <li>2 x 75watt IDX Batteries</li>
            <li>Blackmagic 5 inch Onboard Recorder / Monitor</li>
            <li>Portkeys BM5II Ultra Bright 5 Inch Onboard Monitor</li>
          </ul>
          <h3>Grip</h3>
          <ul>
            <li>
              Freefly Movi Pro Gimbal with Mimic, 4 x inteligent batteries and
              accessories
            </li>
            <li>Secced Tripod Head and Legs</li>
            <li>Addicam Camera Cart</li>
          </ul>
          <h3>Transport</h3>
          <ul>
            <li>VW T5 SWB Van with integrated shelving</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default KitList
