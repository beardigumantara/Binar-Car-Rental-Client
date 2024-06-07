import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

interface LoginParams {
    email: string;
    password: string;
  }

async function doLogin({ email, password }: LoginParams): Promise<string> {
    console.log({ email, password });
    // Use your own endpoint
    const response = await fetch("http://localhost:8000/api/users/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    return data.token;
  }

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const token = localStorage.getItem("token")

    useEffect(()=> {
        setIsLoggedIn(!!token)
    },[token]);

    const handleLogin = () => {
        setIsLoading(true);
        doLogin({ email, password })
          .then((token) => {
                localStorage.setItem("token", token);
                navigate('/');
            })
          .catch((err) => console.log(err.message))
          .finally(() => setIsLoading(false));
    
      };

    return (
        <Container maxWidth="xs">
        <CssBaseline />
            <Box
            sx={{
                mt: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">Login</Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    />

                    <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleLogin}
                    disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Login'}
                    </Button>
                    <Grid container justifyContent={"flex-end"}>
                        <Grid item>
                            <Link to="/register">Don't have an account? Register</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Login