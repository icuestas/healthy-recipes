import { useCallback, useState } from "react";
import { RecipeIngredients, RecipeProps } from "../interfaces";

export const useAddRecipe = () => {
  const [form, setForm] = useState<RecipeProps>({
    title: "",
    ingredients: [],
    procedure: "",
  });

  const disableSubmitBtn = useCallback(() => {
    if (
      form.title === "" ||
      form.ingredients.length <= 1 ||
      form.procedure === ""
    )
      return true;
    else return false;
  }, [form]);

  const handleChange = (e: {
    target: {
      name: string;
      value: string | RecipeIngredients[];
    };
  }) => {
    const { name, value } = e.target;
    setForm((prevState: RecipeProps) => {
      return { ...prevState, [name]: value };
    });
  };
  return { form, setForm, handleChange, disableSubmitBtn };
};
