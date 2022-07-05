export class HomePage{
    navigate(country){
        if (country === 'en') {
            cy.visit_start('/en',20000);    
        } else if (country === 'de') {
            cy.visit_start('https://semilac.de/de/',20000); 
        } else {
            cy.visit_start('',20000);
        }               
    }
};
export const homePage = new HomePage();