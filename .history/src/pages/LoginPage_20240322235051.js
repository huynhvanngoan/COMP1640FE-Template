
import { Link} from 'react-router-dom';
import { Button, Grid, Box, Typography, Paper, Checkbox, FormControlLabel, TextField, CssBaseline} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styled from 'styled-components';

const defaultTheme = createTheme();

const LoginPage = () => {

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh',justifyContent: 'center', alignItems: 'center' }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h4" sx={{ mb: 2, color: "#2c2143" }}>
                           Login
                        </Typography>
                        <Typography variant="h7">
                            Welcome back! Please enter your details
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 2 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Enter your email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                
                                />
                      
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type='password'
                                id="password"
                                autoComplete="current-password"
                            />
                            <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <StyledLink href="#">
                                    Forgot password?
                                </StyledLink>
                            </Grid>
                            <Button
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da"}}
                            >
                                Login 
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                            >
                                Login as Guest
                            </Button>

                        </Box>
                    </Box>
                </Grid>
                
            </Grid>
        </ThemeProvider>
    );
}

export default LoginPage

const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #7f56da;
`;
