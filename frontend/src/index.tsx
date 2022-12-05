import React from 'react';
import ReactDOM from 'react-dom/client';
import Blog from './Blog';
import CreatePost from './CreatePost';
import SignUp from './SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

export default function App() {
    return (
        <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Blog />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/create" element={<CreatePost />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
        </React.StrictMode>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
