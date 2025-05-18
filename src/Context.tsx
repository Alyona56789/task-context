import React, { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

// Создаём контекст с типом Theme, по умолчанию 'light'
const ThemeContext = createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
