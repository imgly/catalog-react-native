import { Product } from "./Product";

export interface ExampleCategory {
  title: string;
  examples: ExampleItem[];
}

export interface ExampleItem {
  title: string;
  description: string;
  product: Product;
  example?: () => void;
  component?: ({
    visible,
    onFinish,
  }: {
    visible: boolean;
    onFinish: () => void;
  }) => JSX.Element;
}
