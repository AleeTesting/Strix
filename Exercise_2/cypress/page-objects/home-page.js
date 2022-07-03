export class HomePage{
    navigate(country){
        //switch based on the country provided, default is Poland
        cy.clearCookies();
        if (country === 'en') {
            cy.visit('/en');    
        } else if (country === 'de') {
            cy.visit('https://semilac.de/de/'); 
        } else {
            cy.visit('');
        }               
    }
};
export const homePage = new HomePage();