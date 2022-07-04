export class HomePage{
    navigate(country){
        if (country === 'en') {
            cy.visit('/en');    
        } else if (country === 'de') {
            cy.visit('https://semilac.de/de/'); 
        } else {
            cy.visit_start('',20000);
        }               
    }
};
export const homePage = new HomePage();