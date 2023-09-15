class HeaderElements {
  /*--------------------------------------------------------------------* 
    |	Input Form
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Input Form option on the header.
   */
  getInputForm() {
    return cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms');
  }

  /*--------------------------------------------------------------------* 
    |	Input Form Submenu
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Simple Form Demo sub-option from the Input Form option on the header.
   */
  getSimpleFormDemo() {
    return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo');
  }

  /**
   * Method to get the Checkbox Demo sub-option from the Input Form option on the header.
   */
  getCheckboxDemo() {
    return cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Checkbox Demo');
  }

  /**
   * Method to get the Radio Buttons Demo sub-option from the Input Form option on the header.
   */
  getRadioButtonsDemo() {
    return cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Radio Buttons Demo');
  }

  /**
   * Method to get the Select Dropdown List sub-option from the Input Form option on the header.
   */
  getSelectDropdownList() {
    return cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Select Dropdown List');
  }

  /**
   * Method to get the Input Form Submit sub-option from the Input Form option on the header.
   */
  getInputFormSubmit() {
    return cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Input Form Submit');
  }

  /**
   * Method to get the Ajax Form Submit sub-option from the Input Form option on the header.
   */
  getAjaxFormSubmit() {
    return cy.get('.open > .dropdown-menu > :nth-child(6) > a').contains('Ajax Form Submit');
  }

  /**
   * Method to get the JQuery Select dropdown sub-option from the Input Form option on the header.
   */
  getJQuerySelectDropdown() {
    return cy.get('.open > .dropdown-menu > :nth-child(7) > a').contains('JQuery Select dropdown');
  }

  /*--------------------------------------------------------------------* 
    |	Date Pickers
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Date Pickers option on the header.
   */
  getDatePickers() {
    return cy.get(':nth-child(1) > :nth-child(2) > .dropdown-toggle').contains('Date pickers');
  }

  /*--------------------------------------------------------------------* 
    |	Date Pickers Submenu
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Bootstrap Date Picker dropdown sub-option from the Date Pickers option on the header.
   */
  getBootstrapDatePicker() {
    return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Date Picker');
  }

  /**
   * Method to get the JQuery Date Picker dropdown sub-option from the Date Pickers option on the header.
   */
  getJQueryDatePicker() {
    return cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('JQuery Date Picker');
  }

  /*--------------------------------------------------------------------* 
    |	Table
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Table option on the header.
   */
  getTable() {
    return cy.get(':nth-child(1) > :nth-child(3) > .dropdown-toggle').contains('Table');
  }

  /*--------------------------------------------------------------------* 
    |	Table Submenu
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Table Pagination dropdown sub-option from the Table option on the header.
   */
  getTablePagination() {
    return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Table Pagination');
  }

  /**
   * Method to get the Table Data Search dropdown sub-option from the Table option on the header.
   */
  getTableDataSearch() {
    return cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Table Data Search');
  }

  /**
   * Method to get the Table Filter dropdown sub-option from the Table option on the header.
   */
  getTableFilter() {
    return cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Table Filter');
  }

  /**
   * Method to get the Table Sort & Search dropdown sub-option from the Table option on the header.
   */
  getTableSortAndSearch() {
    return cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Table Sort & Search');
  }

  /**
   * Method to get the Table Data Download dropdown sub-option from the Table option on the header.
   */
  getTableDataDownload() {
    return cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Table Data Download');
  }

  /*--------------------------------------------------------------------* 
    |	Demo Home
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Demo Home option on the header.
   */
  getDemoHome() {
    return cy.get('.navbar-brand').contains('Demo Home');
  }

  /*--------------------------------------------------------------------* 
    |	Progress Bar
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Progress Bar option on the header.
   */
  getProgressBar() {
    return cy.get('.navbar-right > :nth-child(1) > .dropdown-toggle').contains('Progress Bars');
  }

  /*--------------------------------------------------------------------* 
    |	Progress Bar Submenu
    *---------------------------------------------------------------------*/

  /**
   * Method to get the JQuery Download Progress bars dropdown sub-option from the Progress Bar option on the header.
   */
  getJQueryDownloadProgressBars() {
    return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('JQuery Download Progress bars');
  }

  /**
   * Method to get the Bootstrap Progress bar dropdown sub-option from the Progress Bar option on the header.
   */
  getBootstrapProgressBar() {
    return cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Progress bar');
  }

  /**
   * Method to get the Drag & Drop Sliders dropdown sub-option from the Progress Bar option on the header.
   */
  getDragAndDropSliders() {
    return cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Drag & Drop Sliders');
  }

  /*--------------------------------------------------------------------* 
    |	Alerts & Modals
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Alerts and Modals option on the header.
   */
  getAlertsAndModals() {
    return cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals');
  }

  /*--------------------------------------------------------------------* 
    |	Alerts & Modals Submenu
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Bootstrap Alerts dropdown sub-option from the Alerts & Modals option on the header.
   */
  getBootstrapAlerts() {
    return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Alerts');
  }

  /**
   * Method to get the Bootstrap Modals dropdown sub-option from the Alerts & Modals option on the header.
   */
  getBootstrapModals() {
    return cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Modals');
  }

  /**
   * Method to get the Window Popup Modal dropdown sub-option from the Alerts & Modals option on the header.
   */
  getWindowPopupModal() {
    return cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Window Popup Modal');
  }

  /**
   * Method to get the Progress Bar Modal dropdown sub-option from the Alerts & Modals option on the header.
   */
  getProgressBarModal() {
    return cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Progress Bar Modal');
  }

  /**
   * Method to get the Javascript Alerts dropdown sub-option from the Alerts & Modals option on the header.
   */
  getJavascriptAlerts() {
    return cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Javascript Alerts');
  }

  /**
   * Method to get the File Download dropdown sub-option from the Alerts & Modals option on the header.
   */
  getFileDownload() {
    return cy.get('.open > .dropdown-menu > :nth-child(6) > a').contains('File Download');
  }

  /*--------------------------------------------------------------------* 
    |	List Box
    *---------------------------------------------------------------------*/

  /**
   * Method to get the List Box option on the header.
   */
  getListBox() {
    return cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').contains('List Box');
  }

  /*--------------------------------------------------------------------* 
    |	List Box Submenu
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Bootstrap List Box dropdown sub-option from the List Box Submenu option on the header.
   */
  getBootstrapListBox() {
    return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap List Box');
  }

  /**
   * Method to get the JQuery List Box dropdown sub-option from the List Box Submenu option on the header.
   */
  getJQueryListBox() {
    return cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('JQuery List Box');
  }

  /**
   * Method to get the Data List Filter dropdown sub-option from the List Box Submenu option on the header.
   */
  getDataListFilter() {
    return cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Data List Filter');
  }

  /*--------------------------------------------------------------------* 
    |	Get Others
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Others option on the header.
   */
  getOthers() {
    return cy.get(':nth-child(4) > .dropdown-toggle').contains('Others');
  }

  /*--------------------------------------------------------------------* 
    |	Get Others Submenu
    *---------------------------------------------------------------------*/

  /**
   * Method to get the Drag and Drop dropdown sub-option from the Get Others Submenu option on the header.
   */
  getDragAndDrop() {
    return cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Drag and Drop');
  }

  /**
   * Method to get the Dynamic Data Loading dropdown sub-option from the Get Others Submenu option on the header.
   */
  getDynamicDataLoading() {
    return cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Dynamic Data Loading');
  }

  /**
   * Method to get the Charts Demo dropdown sub-option from the Get Others Submenu option on the header.
   */
  getChartsDemo() {
    return cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Charts Demo');
  }
}

export default HeaderElements;
