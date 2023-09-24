import React from 'react'
import * as S from './home.styled'
import Button from 'src/interfaces/Button'
import { MapPin, Clock, User, ArrowRightCircle, Calendar, Map, School } from "lucide-react"
import Tag from 'src/interfaces/Tag'
import { Paragraph } from 'src/interfaces/Text'
import introImage from "../../assets/introducao.jpeg"
import event from 'src/data/event'
import { useNavigate } from 'react-router-dom'
import Slides from 'src/interfaces/Slides/Slides'
import logoEvento from "../../assets/logo-evento.jpeg"

const days = [
  {
    day: "25",
    time: "19h20h às 22h40"
  },
  {
    day: "26",
    time: "19h às 22h40"
  },
  {
    day: "27",
    time: "19h às 22h40"
  },
  {
    day: "28",
    time: "19h às 22h40"
  },
  {
    day: "29",
    time: "19h às 22h40"
  },

]

type Days = "25" | "26" | "27" | "28" | "29"

const Home = () => {
  const [selectedDay, setSelectedDay] = React.useState<Days>("25")
  const nav = useNavigate()

  const dayEvent = React.useMemo(() => {
    const dayEvent = event.filter(e => e.day === selectedDay)
    return dayEvent
  }, [selectedDay])

  return (
    <S.Container>
      <S.Image src={introImage} />
      <S.LogoContainer>
        <S.Logo src={logoEvento} />
      </S.LogoContainer>
      <S.Content>
        <Paragraph>
          Faça agora sua inscrição para o 2° Fórum Tecnológico Interdisciplinar da ETEC Adolpho Berezin. Confira a programação abaixo!
        </Paragraph>

        <Tag.Root type='title' size='lg' style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
          <Tag.Icon>
            <Calendar />
          </Tag.Icon>
          <Tag.Text>Programação</Tag.Text>
        </Tag.Root>
        <Paragraph>Selecione o dia de sua preferência e confira a programação</Paragraph>

        <S.CardWrapper>
          {days.map((d) => (
            <S.Card
              key={d.day}
              onClick={() => setSelectedDay(d.day as Days)}
              data-active={selectedDay === d.day}
            >
              <S.CardDay
                data-active={selectedDay === d.day}
              >
                {d.day}/09
              </S.CardDay>
              <S.CardTime
                data-active={selectedDay === d.day}
              >{d.time}</S.CardTime>
            </S.Card>
          ))}
        </S.CardWrapper>
        <Tag.Root size='sm' type='tag' style={{ justifySelf: "end" }}>
          <Tag.Text>Deslize para ver mais</Tag.Text>
          <Tag.Icon>
            <ArrowRightCircle />
          </Tag.Icon>
        </Tag.Root>

        <S.EventContainer>
          {dayEvent.map(e => (
            <S.Event key={e.thematic}>
              <Tag.Root type='title' size='lg'>
                <Tag.Text>{e.thematic}</Tag.Text>
              </Tag.Root>
              <S.EventLoc>
                <MapPin />
                <S.EventLocText>
                  {e.local}
                </S.EventLocText>
              </S.EventLoc>
              <S.EventProgram>
                {e.activities.map(a => (
                  <S.EventItem key={a.title}>
                    {a.time && <Tag.Root size='sm'>
                      <Tag.Icon>
                        <Clock size={16} />
                      </Tag.Icon>
                      <Tag.Text>
                        {a.time}
                      </Tag.Text>
                    </Tag.Root>}
                    <S.EventItemTitle>
                      {a.title}
                    </S.EventItemTitle>
                    {a.speaker && <Tag.Root size='sm'>
                      <Tag.Icon>
                        <User size={16} />
                      </Tag.Icon>
                      <Tag.Text>
                        Palestrantes
                      </Tag.Text>
                    </Tag.Root>}
                    {a.speaker && <S.EventItemGuests>
                      {a.speaker?.map(s => (
                        <p key={s}>{s}</p>
                      ))}
                    </S.EventItemGuests>}
                  </S.EventItem>
                ))}
              </S.EventProgram>
              <Button.Root onClick={() => nav("/inscricao", { state: { day: e.day, thematic: e.thematic } })}>
                <Button.Text>Inscrever-se</Button.Text>
              </Button.Root>
            </S.Event>
          ))}
          <Slides day={selectedDay} />
        </S.EventContainer>


        <S.Loc>
          <Tag.Root>
            <Tag.Icon><MapPin /></Tag.Icon>
            <Tag.Text>Localização</Tag.Text>
          </Tag.Root>

          <S.LocInfo>
            <Tag.Root size='md' type='tag'>
              <Tag.Icon><School /></Tag.Icon>
              <Tag.Text>ETEC Adolpho Berezin</Tag.Text>
            </Tag.Root>

            <Tag.Root size='md' type='tag'>
              <Tag.Icon><Map /></Tag.Icon>
              <Tag.Text>Av. Monteiro Lobato, n° 8000 - Bal. Jussara, Mongaguá</Tag.Text>
            </Tag.Root>

          </S.LocInfo>
        </S.Loc>

      </S.Content>
    </S.Container>
  )
}

export default Home   
