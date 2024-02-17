import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ModeToggle />
                <Alert>
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components and dependencies to your app
                        using the cli.
                    </AlertDescription>
                </Alert>
            </ThemeProvider>
        </>
    )
}

export default App
