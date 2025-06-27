import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import PortfolioApp from './PortfolioApp.jsx';
import { AppTheme } from './theme/AppTheme.jsx';
import { Footer } from './ui/index.js';

createRoot(document.getElementById('root')).render(
    <AppTheme>
        <PortfolioApp />
    </AppTheme>
);
