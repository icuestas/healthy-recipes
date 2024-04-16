import {
  Grid,
  Typography,
  TextField,
  Paper,
  Autocomplete,
  Button,
} from "@mui/material";
import { useAddRecipe } from "./hooks/useAddRecipe";

export const AddRecipe = () => {
  const { form, handleChange, disableSubmitBtn } = useAddRecipe();

  return (
    <Grid
      container
      lg={6}
      md={6}
      sm={6}
      xs={6}
      className={"place-content-center"}
    >
      <Paper elevation={10} className="p-5">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h3" mb={5} textAlign={"center"}>
            Agregue su receta
          </Typography>
        </Grid>
        <Grid container rowGap={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              placeholder="Nombre de la receta"
              fullWidth
              value={form.title}
              onChange={(e) => handleChange(e)}
              name={"title"}
            />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Autocomplete
              onChange={(_, value) =>
                handleChange({ target: { name: "ingredients", value } })
              }
              multiple
              filterSelectedOptions
              fullWidth
              getOptionLabel={(option: { name: string; id: string }) =>
                option.name
              }
              renderInput={(params) => (
                <TextField {...params} label={"Ingredientes"} />
              )}
              options={[
                //TODO: Make options dynamic
                { name: "option 1", id: "1" },
                { name: "option 2", id: "2" },
              ]}
            ></Autocomplete>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <TextField
              value={form.procedure}
              name={"procedure"}
              onChange={(e) => handleChange(e)}
              fullWidth
              multiline
              rows={8}
              required
              placeholder="Indique el procedimiento para esta receta"
            />
          </Grid>
        </Grid>
        <Grid container columnGap={2} className="flex justify-end mt-4">
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Button variant="contained" disabled={disableSubmitBtn()}>
              Guardar Receta
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
