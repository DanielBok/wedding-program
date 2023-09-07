import dayjs from "dayjs";

export function isBeforeWedding() {
  const weddingDay = dayjs("2023-09-30").unix();
  const today = dayjs().unix();

  return today < weddingDay;
}