import React from "react"
import { Outlet } from "react-router-dom"
import * as S from "./styles/global"
import Header from "./interfaces/Header"
import Footer from "./interfaces/Footer"

function App() {

  return (
    <S.MainContainer>
      <S.Container>
        <Outlet />
      </S.Container>
      <Footer />
    </S.MainContainer>
  )
}

export default App
