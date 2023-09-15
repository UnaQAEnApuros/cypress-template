class HomePage {
  /**
   * Method to click on the Simple Form Demo option on the header menu.
   */
  clickOnSimpleFormDemoLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo').click();
  }

  /**
   * Method to click on the Radio Buttons Demo option on the header menu.
   */
  clickOnRadioButtonsDemoLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Radio Buttons Demo').click();
  }

  /**
   * Method to click on the Select Dropdown List option on the header menu.
   */
  clickOnSelectDropdownListLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Select Dropdown List').click();
  }

  /**
   * Method to click on the Input Form Submit option on the header menu.
   */
  clickOnInputFormSubmitLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Input Form Submit').click();
  }

  /**
   * Method to click on the Ajax Form Submit option on the header menu.
   */
  clickOnAjaxFormSubmitLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(6) > a').contains('Ajax Form Submit').click();
  }

  /**
   * Method to click on the JQuery Select option on the header menu.
   */
  clickOnJqueryFormSubmitLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(7) > a').contains('JQuery Select dropdown').click();
  }

  /*--------------------------------------------------------------------* 
  |	Table Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Table Pagination option on the header menu.
   */
  clickOnTablePaginationLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Table Pagination').click();
  }

  /**
   * Method to click on the Table Data Search option on the header menu.
   */
  clickOnTableDataSearchLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Table Data Search').click();
  }

  /**
   * Method to click on the Table Filter option on the header menu.
   */
  clickOnTableFilterLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Table Filter').click();
  }

  /**
   * Method to click on the Table Sort & Search option on the header menu.
   */
  clickOnTableSortAndSearchLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
    cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Table Sort & Search').click();
  }

  /**
   * Method to click on the Table Data Download option on the header menu.
   */
  clickOnTableDataDownloadLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table').click();
    cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Table Data Download').click();
  }

  /*--------------------------------------------------------------------* 
  |	Demo Home
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Demo Home Link option on the header menu.
   */
  clickOnDemoHomeLinkHeader() {
    cy.get('.navbar-brand').contains('Demo Home').click();
  }

  /*--------------------------------------------------------------------* 
  |	Progress Bar Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the JQuery Download Progress bars option on the header menu.
   */
  clickOnJQueryDownloadProgressBarsLinkHeader() {
    cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('JQuery Download Progress bars').click();
  }

  /**
   * Method to click on the Bootstrap Progress bar option on the header menu.
   */
  clickOnBootstrapProgressBarLinkHeader() {
    cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Progress bar').click();
  }

  /**
   * Method to click on the Drag & Drop Sliders option on the header menu.
   */
  clickOnDragAndDropSlidersLinkHeader() {
    cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars').click();
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Drag & Drop Sliders').click();
  }

  /*--------------------------------------------------------------------* 
  |	List Box Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Bootstrap List option on the header menu.
   */
  clickOnBootstrapListLinkHeader() {
    cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').contains('List Box').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap List Box').click();
  }

  /*--------------------------------------------------------------------* 
  |	Get Others Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Drag and Drop option on the header menu.
   */
  clickOnDragAndDropLinkHeader() {
    cy.get(':nth-child(4) > .dropdown-toggle').contains('Others').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Drag and Drop').click();
  }

  /**
   * Method to click on the Dynamic Data Loading option on the header menu.
   */
  clickOnDynamicDataLoadingLinkHeader() {
    cy.get(':nth-child(4) > .dropdown-toggle').contains('Others').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Dynamic Data Loading').click();
  }

  /**
   * Method to click on the Charts Demo dropdown option on the header menu.
   */
  clickOnChartsDemoDropdownLinkHeader() {
    cy.get(':nth-child(4) > .dropdown-toggle').contains('Others').click();
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Charts Demo').click();
    Cypress.on('uncaught:exception', () => false);
  }
}

export default HomePage;
