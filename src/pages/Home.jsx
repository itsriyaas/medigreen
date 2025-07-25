import React from 'react'
import InfoSection from '../components/InfoSection'
import Slider from '../components/Slider'
import DepartmentSlider from '../components/Departments'
import VisionMissionValues from '../components/VisonMission'
import DoctorsSlider from '../components/Doctors'
import GallerySlider from '../components/Gallery'
import LatestNewsSection from '../components/LatestNews'
import EmergencyCardSection from '../components/EmergencyCard'

function Home() {
  return (
    <>
    <Slider/>
    <EmergencyCardSection/>
    <InfoSection/>
    <VisionMissionValues/>
    <DepartmentSlider/>
    {/* Out Doctors */}
    <DoctorsSlider/>
    <GallerySlider/>
    <LatestNewsSection/>
    </>
  )
}

export default Home