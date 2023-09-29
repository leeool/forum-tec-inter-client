import theme from "src/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
margin-top: 2rem;
padding: 0 1rem;
position: relative;
`

export const Header = styled.div`
display: grid;
grid-template-columns: auto 1fr;
gap: 0.5rem;
margin-bottom: 3rem;
`

export const Content = styled.div`
  display: grid;
  gap: 2rem;
`

export const Day = styled.div`
  display: grid;
  gap: 1rem;
`

export const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  }
`

export const Image = styled.img`
width: 100%;
border-radius: 4px;
height: 12rem;
object-fit: contain;
background-color: ${theme.color.grayLight};
border: 2px solid ${theme.color.red};
cursor: pointer;

&:hover {
  filter: brightness(0.8);
}
`

export const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
background-color: rgb(0 0 0 / 0.8);
backdrop-filter: blur(4px);
width: 100vw;
height: 100vh;
`

export const ImageModal = styled.img`
grid-area: 1 / -1;
width: calc(100vw - 2rem);
max-width: 50rem;
max-height: calc(100vh - 2rem);
height: calc(100%);
object-fit: contain;
border-radius: 4px;
`

export const ModalContent = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  display: grid;
  background-color: ${theme.color.black};
`
