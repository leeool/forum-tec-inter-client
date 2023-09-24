interface IEvent {
  day: "25" | "26" | "27" | "28" | "29"
  thematic: "Administração" | "Edificações" | "Turismo" | "Informática"
  local: "Auditório alternativo (1° andar)" | "Auditório principal (quadra)"
  activities: {
    time: string
    title: string
    speaker: string[] | null
  }[]
}

const event: IEvent[] = [
  {
    thematic: "Administração",
    day: "25",
    local: "Auditório alternativo (1° andar)",
    activities: [
      {
        title: "Reunião com as empreeendedoras",
        time: "20h às 21h",
        speaker: ["Prof.° Marcelo Hipólito de Moura"]
      }
    ]
  },
  {
    thematic: "Administração",
    local: "Auditório alternativo (1° andar)",
    day: "26",
    activities: [
      {
        time: "19h20",
        title: "Solenidade de abertura",
        speaker: ["Autoridades, Coordenadores, Proofessores e Alunos"]
      },
      {
        time: "20h às 20h50",
        title: "Feira de negócios, economia criativa e circular",
        speaker: null
      },
      {
        time: "21h20 às 22h40",
        title: "Estratégias digitais especializadas em Instagram para gerenciamento de pequenos negócios",
        speaker: ["Paulo Queija", "Aila Lara dos Santos Silveira"]
      },
      {
        time: "",
        title: "Desfile dos estandes empreendedores",
        speaker: null
      }
    ]
  },
  {
    day: "26",
    thematic: "Edificações",
    local: "Auditório principal (quadra)",
    activities: [
      {
        time: "19 às 20h50",
        title: "Construção financiada: inverta o processo e viabilize o sonho do seu cliente",
        speaker: ["Engenheira Ana Paula"]
      },
      {
        time: "21h10 às 22h40",
        title: "CiaCollor",
        speaker: ["Viviane Oliveira - Técnica em edificações, pintora profissional e embaixadora da CiaCollor"]
      }
    ]
  },
  {
    day: "27",
    thematic: "Edificações",
    local: "Auditório principal (quadra)",
    activities: [
      {
        title: "Valorização do técnico em Edificações no mercado de trabalho",
        time: "19h às 20h50",
        speaker: [
          "Engenheiro Ulisses Júnior Silva Pereira",
          "Jocy Junior - Técnico em Edificações",
          "Arnaldo Cândido da Silva - Gerente JOFEGE"
        ]
      },
      {
        title: "Desafios na construção civil: Cenário atual, desenvolvimento estratégico, empreendedorismo, logistica reversa e mercado de trabalho",
        time: "21h20 às 22h40",
        speaker: [
          "Engenheiro Gabriel Mercês Costa",
          "Ricardo - obras públicas",
          "Tadeu - Construmoura",
          "Thiago Ribeiro Beijato - Start Reciclagem"
        ]
      }
    ]
  },
  {
    day: "27",
    thematic: "Turismo",
    local: "Auditório alternativo (1° andar)",
    activities: [
      {
        title: "Turismo & Saúde",
        time: "19h às 21h",
        speaker: ["Kelly Santana da Costa"]
      },
      {
        title: "Perspectiva do turismo",
        time: "21h20 às 22h40",
        speaker: ["Ana Carla Camporeze"]
      },
    ]
  },
  {
    day: "28",
    thematic: "Turismo",
    local: "Auditório principal (quadra)",
    activities: [
      {
        time: "19h às 20h50",
        title: "Turismo marítimo: como conquistar sua vaga para trabalhar em cruzeiros",
        speaker: [
          "João Fabrício Gonçalves de Brito",
        ]
      },
      {
        time: "21h20 às 22h40",
        title: "Turismo verde: Turismo X Empregabilidade",
        speaker: [
          "Marcos Gonçalves de Jesus",
          "Cleiton Valente Borges"
        ]
      }
    ]
  },
  {
    day: "28",
    thematic: "Edificações",
    local: "Auditório alternativo (1° andar)",
    activities: [
      {
        title: "LORENZETTI",
        time: "19h às 21h",
        speaker: ["Jânio - Representante comercial/técnico"]
      },
      {
        title: "Elevadores: conceito, novas instalações e vistoria",
        time: "21h20 às 22h40",
        speaker: ["Marcelo Rodrigo dos Santo Tonatto - Diretor técnico comercial ST Desenvolvimento Profissional"]
      }
    ]
  },
  {
    day: "29",
    thematic: "Informática",
    local: "Auditório principal (quadra)",
    activities: [
      {
        title: "Roda de conversa: carreira, tecnologia e mercado de TI",
        time: "19h às 20h50",
        speaker: [
          "Marcelo Evangelista Bonadias",
          "Beatriz Aimi Biagioni",
          "Ricardo de Abreu Dias",
          "Diego Neri de Souza  Félix"
        ]
      },
      {
        title: "Encerramento",
        time: "21h20 às 22h40",
        speaker: null
      }
    ]
  }
]

export default event
