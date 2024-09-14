import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date: Date = new Date(dateString);
  return <time dateTime={dateString}>{format(dateString, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
