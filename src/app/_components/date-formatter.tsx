import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  if (!dateString) return <></>;
  const date: Date = new Date(dateString);
  return <time dateTime={dateString}>{format(dateString, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
