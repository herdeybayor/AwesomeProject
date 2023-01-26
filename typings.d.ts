export interface Box {
  id: string;
  color: {
    name: string;
    hex: string;
  };
}

export type RootStackParamList = {
  Main: MainStackParamList;
  AddNewPalette: undefined;
};

export type MainStackParamList = {
  Home: { newPalette: ColorPalette };
  ColorPalette: { title: string; data: Box[] };
  AddNewPalette: undefined;
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
