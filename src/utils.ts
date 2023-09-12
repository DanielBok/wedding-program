import dayjs from "dayjs";

export function isBeforeWedding() {
  const weddingDay = dayjs("2023-09-30").unix();
  const today = dayjs().unix();

  return today < weddingDay;
}

export function getQueryParams() {
  const defaults = {
    showAll: false,
  };

  const {search = ""} = window.location;

  return search
    .slice(1)
    .split("&")
    .reduce((acc, s) => {
      const [key, value] = s.split("=", 2);
      switch (key.toLowerCase()) {
        case "showall": {
          if (value.toLowerCase() === "true")
            return {...acc, showAll: true};
          break;
        }
      }
      return acc;
    }, defaults);
}
