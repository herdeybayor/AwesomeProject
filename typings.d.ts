export interface Box {
  id: string;
  color: {
    name: string;
    hex: string;
  };
}

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: { title: string; data: Box[] };
};
