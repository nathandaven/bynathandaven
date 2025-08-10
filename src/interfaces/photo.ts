export type Photo = {
  src?: string;
  filename: string;
  relativePath: string;
  album: string;
  caption: string;
  width?: number;
  height?: number;
  make?: string;
  model?: string;
  dateTime?: string; // formatted as DateTime
};
