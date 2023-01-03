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

export interface ColorPalette {
  id: number;
  paletteName: string;
  colors: Color[];
}

export interface Color {
  colorName: string;
  hexCode: string;
}
