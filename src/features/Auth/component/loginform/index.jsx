import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import InputField from "components/form-controls/InputField";
import PasswordField from "components/form-controls/PasswordField";
import { useForm } from "react-hook-form";
import * as React from "react";
SignIn.propTypes = {
  onSubmit: PropTypes.func,
};

const theme = createTheme();

function SignIn(props) {
  const form = useForm({
    defaultValues: {
      identifier: "phamngochung3032001@gmail.com",
      password: "123456",
    },
    // resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    console.log(values);
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
export default SignIn;
