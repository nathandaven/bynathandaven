export type Photo = {
  dateTime?: Date;
  relativePath: string;
  filename: string;
  album: string;
  caption: string;
  width?: number;
  height?: number;
  make?: string;
  model?: string;
};
