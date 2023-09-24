import Tag from "src/interfaces/Tag"
import theme from "src/styles/theme"
import styled from "styled-components"

export const Container = styled.div`
  position: relative;
`

export const Image = styled.img`
width: 100%;
height: 20rem;
object-fit: cover;
object-position: center;
border-radius: 4px;

@media (max-width: 768px) {
  height: 15rem;
}
`

export const TagRoot = styled(Tag.Root)`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 95%;
  left: 50%;
  top: 20rem;

  @media (max-width: 768px) {
    top: 15rem;
}

`

export const Content = styled.div`
  margin-top: 5rem;
  padding: 0 1rem;
  display: grid;
  /* gap: 1rem; */
`

export const CardWrapper = styled.div`
display: flex;
gap: 1rem;
overflow-x: auto;
padding-bottom: 1rem;
margin-top: 1rem;
`

export const Card = styled.div`
flex: 1;
display: grid;
justify-items: center;
background-color: ${theme.color.grayLight};
padding: 1rem;
  min-width: 11rem;
height: 10rem;
align-items: center;
align-content: center;
border-radius: 4px;
  cursor: pointer;
border: 2px solid ${theme.color.gray};

&:hover {
  background-color: ${theme.color.gray};
}

&[data-active="true"] {
  background-color: ${theme.color.red};
border: 2px solid ${theme.color.red};
}
`

export const CardDay = styled.span`
font-size: 2rem;
font-weight: 600;
color: ${theme.color.red};

&[data-active="true"] {
  color: #fff;
}
`

export const CardTime = styled.span`
  color: ${theme.color.darkGrey};

&[data-active="true"] {
  color: #fff;
}

`

export const EventContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
`

export const Event = styled.div`
background-color: ${theme.color.grayLight};
border-radius: 4px;
  padding: 1rem;
border: 2px solid ${theme.color.gray};
  display: grid;
gap: 1rem;
`

export const EventLoc = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  color: ${theme.color.darkGrey};
`

export const EventLocText = styled.p``

export const EventProgram = styled.ul`
  display: grid;
  gap: 1rem;
`

export const EventItem = styled.li`
  list-style: none;
  border: 2px solid ${theme.color.gray};
  padding: 0.5rem;
  border-radius: 4px;
  display: grid;
  gap: 0.5rem;
`

export const EventItemTitle = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
`

export const EventItemGuests = styled.div`
  display: grid;
  gap: 0.25rem;
`
