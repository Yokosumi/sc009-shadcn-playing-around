import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { NavContainer } from './components/NavContainer'
import { Button } from './components/ui/button'

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <NavContainer>
                    <Button>Projects</Button>
                    <Button>Sales</Button>
                    <Button>Community</Button>
                    <ModeToggle />
                </NavContainer>
            </ThemeProvider>
        </>
    )
}

export default App
