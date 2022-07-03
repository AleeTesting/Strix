export class BasePage {
    search(search_string,leanguage){
        //Open the search popup
        cy.get('.block-search__tile').wait(500).should('be.visible')
            .trigger("mouseover")
            .trigger("click");

        if (leanguage === "de"){
        //Logic for a "de" leanguage, as the search field differs
        cy.get('#search')
            .should('be.visible')
            .type(search_string)
            .should('have.value', search_string);
        cy.get('.autocomplete-search-button').click();
        } 
        else {
        //Search using provided string for pl site
        cy.get('.autocomplete-search-input')
            .should('be.visible')
            .type(search_string)
            .should('have.value', search_string);
        cy.get('.autocomplete-search-button').click();
        }
    }
    cartCheckout(){
    }
};
export const basePage = new BasePage();