import { ThemeProvider } from '../../contexts/theme-context';
import { Header } from '../header/index'
import { MainPage } from '../mainPage/index';

export const Home = () => {
    return (
       
            <ThemeProvider>
                <Header />
                <MainPage />
            </ThemeProvider>
        
    )
}