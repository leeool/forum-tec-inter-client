import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import * as S from "./slides.styled"
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/img2.jpeg"
import { ArrowRight } from 'lucide-react'

const ArrowNext = () => (
  <S.ArrowNext>
    <ArrowRight />
  </S.ArrowNext>
)

const Slides = () => {
  return (
    <S.Container>
      <Carousel
        autoPlay
        swipeable
        showStatus={false}
        infiniteLoop
        emulateTouch
        interval={8000}
      >
        <S.Image src={img1} />
        <S.Image src={img2} />
      </Carousel>
    </S.Container>
  )
}

export default Slides
