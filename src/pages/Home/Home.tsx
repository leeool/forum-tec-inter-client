import React from 'react'
import * as S from './home.styled'
import Button from 'src/interfaces/Button'
import { MapPin, Clock, User, ArrowRightCircle } from "lucide-react"
import Tag from 'src/interfaces/Tag'
import { Paragraph } from 'src/interfaces/Text'
import introImage from "../../assets/introducao.jpeg"
import { Calendar } from "lucide-react"
import event from 'src/data/event'
import { useNavigate } from 'react-router-dom'

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

const Home = () => {
  const [selectedDay, setSelectedDay] = React.useState("25")
  const nav = useNavigate()

  const dayEvent = React.useMemo(() => {
    const dayEvent = event.filter(e => e.day === selectedDay)
    return dayEvent
  }, [selectedDay])

  return (
    <S.Container>
      <S.Image src={introImage} />
      <S.TagRoot type='title' size='2xl'>
        <Tag.Text>2° Fórum Tecnológico Interdisciplinar</Tag.Text>
      </S.TagRoot>
      <S.Content>
        <Paragraph>
          Faça agora sua inscrição para o 2° Fórum Tecnológico Interdisciplinar da ETEC Adolpho Berezin. Confira a programação abaixo!
        </Paragraph>
        <Tag.Root type='tag' size='lg' style={{ marginTop: "2rem" }}>
          <Tag.Icon>
            <Calendar />
          </Tag.Icon>
          <Tag.Text>Programação</Tag.Text>
        </Tag.Root>

        <S.CardWrapper>
          {days.map((d) => (
            <S.Card
              key={d.day}
              onClick={() => setSelectedDay(d.day)}
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
        <Tag.Root size='sm' style={{ justifySelf: "end" }}>
          <Tag.Text>Deslize para ver mais</Tag.Text>
          <Tag.Icon>
            <ArrowRightCircle />
          </Tag.Icon>
        </Tag.Root>

        <S.EventContainer>
          {dayEvent.map(e => (
            <S.Event key={e.thematic}>
              <Tag.Root type='tag' size='md'>
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
        </S.EventContainer>
      </S.Content>
    </S.Container>
  )
}

export default Home   
