import React from 'react'
import photosData from '../../data/photos'
import * as S from './gallery.styled'
import Tag from '../../interfaces/Tag'
import Button from 'src/interfaces/Button'
import { ArrowLeft, Camera, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const days = Object.keys(photosData)

const Gallery = () => {
  const nav = useNavigate()
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState("")

  const handleOpen = (src: string) => {
    setSelected(src)
    setOpen(true)
  }

  const handleClose = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLDivElement) {
      setOpen(false)
    }
  }

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      return
    }
    document.body.style.overflow = "auto"

  }, [open])

  return (
    <S.Container>
      <S.Header>
        <Button.Root variant='secondary' onClick={() => nav(-1)}>
          <Button.Icon>
            <ArrowLeft />
          </Button.Icon>
        </Button.Root>

        <Tag.Root>
          <Tag.Icon>
            <Camera />
          </Tag.Icon>
          <Tag.Text>Galeria</Tag.Text>
        </Tag.Root>
      </S.Header>

      <S.Content>
        {days.map((day, index) => (
          <S.Day key={day + index}>
            <Tag.Root>
              <Tag.Text>Dia {day}/09</Tag.Text>
            </Tag.Root>
            <S.Images>
              {photosData[day as keyof typeof photosData]
                .photos.map(p => <S.Image onClick={() => handleOpen(p)} src={p} />)
              }
            </S.Images>
          </S.Day>
        ))
        }
      </S.Content>

      {open && <S.Modal onClick={handleClose}>
        <S.ModalContent>
          <Button.Root onClick={() => setOpen(false)} style={{ gridArea: "1 / -1", zIndex: 2, width: "fit-content", alignSelf: "start", justifySelf: "end", margin: "0.5rem" }}>
            <Button.Icon><X strokeWidth={3} /></Button.Icon>
          </Button.Root>
          <S.ImageModal src={selected} />
        </S.ModalContent>
      </S.Modal>}
    </S.Container>
  )
}

export default Gallery
