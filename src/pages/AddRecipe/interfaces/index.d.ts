type RecipeIngredients = {
  name: string;
  id: string;
};

export interface RecipeProps {
  title: string;
  ingredients: RecipeIngredients[];
  procedure: string;
}
