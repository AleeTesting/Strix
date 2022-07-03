export class SearchResultPage{
    openFirstProduct(){
        cy.get(':nth-child(1) > .link > .card').trigger("mouseover").trigger("click");        
    }
    validateFirstResult(product){
        cy.get(':nth-child(1) > .link > .card').should('contain', product)
    }
}
export const searchResultPage = new SearchResultPage();