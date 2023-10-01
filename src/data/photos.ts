import adm26 from "src/assets/gallery/adm-26";
import enf28 from "src/assets/gallery/enf-28";

interface IGallery {
  day: "25" | "26" | "27" | "28" | "29";
  events: {
    thematic:
      | "Administração"
      | "Edificações"
      | "Turismo"
      | "Informática"
      | "Enfermagem";
    photos: string[];
  }[];
}

const photosData: IGallery[] = [
  {
    day: "26",
    events: [
      {
        thematic: "Administração",
        photos: [...Object.values(adm26)],
      },
    ],
  },
  {
    day: "28",
    events: [
      {
        thematic: "Enfermagem",
        photos: [...Object.values(enf28)],
      },
    ],
  },
];

export default photosData;
