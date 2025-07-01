import React from 'react'
import InfoSection from '../components/InfoSection'
import Slider from '../components/Slider'
import DepartmentSlider from '../components/Departments'
import VisionMissionValues from '../components/VisonMission'
import DoctorsSlider from '../components/Doctors'
import GallerySlider from '../components/Gallery'

function Home() {
  return (
    <>
    <Slider/>
    <InfoSection/>
    <DepartmentSlider/>
    <VisionMissionValues/>
    {/* Out Doctors */}
    <DoctorsSlider/>
    <GallerySlider/>
  {/* Whatsapp */}
  <a href="https://api.whatsapp.com/send?phone=911234567890&text=Hello%20Medigreen%20Hospital" className='whatsapp-button' target='_blank'>
    <img src="assets/icons/whatsapp.png" alt="Whatsapp-icon" />
  </a>
    </>
  )
}

export default Home