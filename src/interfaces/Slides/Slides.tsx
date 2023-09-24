import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import * as S from "./slides.styled"
import imgCrono from "../../assets/img-crono.jpeg"
import img26 from "../../assets/img-26.jpeg"
import img27 from "../../assets/img-27.jpeg"
import img272 from "../../assets/img-27-2.jpeg"
import img28 from "../../assets/img-28.jpeg"
import img29 from "../../assets/img-29.jpeg"
import { ArrowRight } from 'lucide-react'

const ArrowNext = () => (
  <S.ArrowNext>
    <ArrowRight />
  </S.ArrowNext>
)

interface Props {
  day: "25" | "26" | "27" | "28" | "29" | "all"
}

const images = {
  "25": [img26],
  "26": [img26],
  "27": [img27, img272],
  "28": [img28],
  "29": [img29],
  "crono": [imgCrono],
  "all": [imgCrono, img26, img27, img272, img28, img29]
}

const Slides = ({ day }: Props) => {
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
        {images[day].map((img, index) => (
          <S.Image src={img} key={index} />
        ))}
      </Carousel>
    </S.Container>
  )
}

export default Slides
