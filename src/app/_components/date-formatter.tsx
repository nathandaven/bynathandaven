import { format } from "date-fns";
import React from "react";

type Props = {
  dateString: string;
};

export function parseEXIFDate(s: string) {
  var b: any = s.split(/\D/);
  return new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
}

const DateFormatter = ({ dateString }: Props) => {
  if (!dateString) return <></>;
  const date: Date = new Date(dateString);
  return <time dateTime={dateString}>{format(dateString, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
