class Header {

    /**
    * Method to check if the Header is visible
    */
    isReady(){
      cy.get('.topper').should('be.visible');
      cy.get('.navbar').should('be.visible');
    }

    /**
     * Method to get the Selenium Easy Logo
     */
    getSeleniumEasyLogo() {
      return cy.get('.logo > a > img');
    }

    /**
     * Method to get the Cross Browser Testing Logo
     */
    getCrossBrowerTestingLogo(){
      return cy.get('.cbt');
    }

    /**
     * Method to get the Input Form option on the header. 
     */
    getInputForm(){
      return cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms');
    }

    /*--------------------------------------------------------------------* 
    |	Input Form Submenu
    *---------------------------------------------------------------------*/

    /**
     * Method to get the Simple Form Demo sub-option from the Input Form option on the header. 
     */
    getSimpleFormDemo(){
      return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo');
    }

    /**
     * Method to get the Date Pickers option on the header. 
     */
    getDatePickers(){
      return cy.get(':nth-child(1) > :nth-child(2) > .dropdown-toggle').contains('Date pickers');
    }

    /**
     * Method to get the Table option on the header. 
     */
    getTable(){
      return cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table');
    }

    /**
     * Method to get the Demo Home option on the header. 
     */
    getDemoHome(){
      return cy.get('.navbar-brand').contains('Demo Home'); 
    }

    /**
     * Method to get the Progress Bar option on the header. 
     */
    getProgressBar(){
      return cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars');
    }

    /**
     * Method to get the Alerts and Modals option on the header. 
     */
    getAlertsAndModals(){
      return cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals');
    }

    /**
     * Method to get the List Box option on the header. 
     */
    getListBox(){
      return cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').contains('List Box');
    }

    /**
     * Method to get the Others option on the header. 
     */
    getOthers(){
      return cy.get(':nth-child(4) > .dropdown-toggle').contains('Others');
    }
  }
  
  export default Header;