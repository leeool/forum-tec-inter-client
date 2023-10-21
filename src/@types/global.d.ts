interface IEvent {
  day: TypeDays;
  thematic: "Administração" | "Edificações" | "Turismo" | "Informática";
  local: "Auditório alternativo (1° andar)" | "Auditório principal (quadra)";
  activities: {
    time: string;
    title: string;
    speaker: string[] | null;
  }[];
}

type TypeDays = "25" | "26" | "27" | "28" | "29";

declare module "*.jpg";
declare module "*.jpeg";
