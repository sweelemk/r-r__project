import keyMirror from 'keymirror';
import IndexPage from '../containerPages/IndexPage';
import AboutPage from '../containerPages/AboutPage';
import PortfolioPage from '../containerPages/PortfolioPage';
import ContactsPage from '../containerPages/ContactsPage';

export const Pages = keyMirror({
    MAIN_PAGE: null,
    ABOUT_PAGE: null,
    PORTFOLIO_PAGE: null,
    CONTACT_PAGE: null
});

export const defaultPage = Pages.MAIN_PAGE

export const routeConst = [
    {
        defaultHash: "/",
        page: Pages.MAIN_PAGE,
        name: "Main",
        component: IndexPage
    },
    {
        defaultHash: "/about",
        page: Pages.ABOUT_PAGE,
        name: "About",
        component: AboutPage
    },
    {
        defaultHash: "/portfolio",
        page: Pages.PORTFOLIO_PAGE,
        name: "Portfolio",
        component: PortfolioPage
    },
    {
        defaultHash: "/contacts",
        page: Pages.CONTACT_PAGE,
        name: "Contacts",
        component: ContactsPage
    }
]