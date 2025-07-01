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
    </>
  )
}

export default Home