import { extract, partial_token_set_ratio } from "fuzzball";
import { debounce } from "lodash";
import { useRef } from "react";
import { seating } from "./seating-arrangement";

export const useSearchCallback = () => {
  return useRef(debounce(search, 150)).current;

  function processor({name, hidden}: typeof seating[0]) {
    return [name, hidden].join(" ").toUpperCase();
  }

  function search(query: string) {
    return extract(query.toUpperCase(), seating, {
      scorer: partial_token_set_ratio,
      processor,
      cutoff: 85,
      returnObjects: true,
    });
  }
};