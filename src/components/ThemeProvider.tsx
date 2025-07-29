
import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  let theme, setTheme;
  
  try {
    [theme, setTheme] = useState<Theme>(
      () => {
        try {
          return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
        } catch {
          return defaultTheme;
        }
      }
    );
    
    // Verify useState returned valid values
    if (!setTheme || typeof setTheme !== 'function') {
      console.error('ThemeProvider: useState hook returned invalid values');
      theme = defaultTheme;
      setTheme = () => {};
    }
  } catch (error) {
    console.error('ThemeProvider: useState hook failed:', error);
    theme = defaultTheme;
    setTheme = () => {};
  }

  useEffect(() => {
    if (typeof theme === 'string') {
      const root = window.document.documentElement

      root.classList.remove("light", "dark")

      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light"

        root.classList.add(systemTheme)
        return
      }

      root.classList.add(theme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      try {
        localStorage.setItem(storageKey, newTheme)
        if (setTheme && typeof setTheme === 'function') {
          setTheme(newTheme)
        }
      } catch (error) {
        console.error('Failed to update theme:', error);
      }
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  try {
    const context = useContext(ThemeProviderContext)

    if (context === undefined) {
      console.error("useTheme must be used within a ThemeProvider")
      // Return fallback values instead of throwing
      return {
        theme: "system" as Theme,
        setTheme: () => {},
      }
    }

    return context
  } catch (error) {
    console.error('useTheme hook failed:', error);
    return {
      theme: "system" as Theme,
      setTheme: () => {},
    }
  }
}
