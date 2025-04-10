import React, { StrictMode } from 'react';
import { createRoot} from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router';

import DetailPage from "./Pages/DetailPage";
import VotePage from "./Pages/VotePage";
import Home from "./Pages/Home";

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <Home />
    </StrictMode>
)

