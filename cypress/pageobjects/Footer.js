class Footer {

    isReady(){
      cy.get('.footer').should('be.visible');
    }


  }
  
  export default Footer;