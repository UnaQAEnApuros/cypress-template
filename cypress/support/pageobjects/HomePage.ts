// Input Forms imports
import AjaxFormSubmitPage from './inputforms/AjaxFormSubmitPage';
import CheckboxDemoPage from './inputforms/CheckboxDemoPage';
import InputFormSubmitPage from './inputforms/InputFormSubmitPage';
import JQuerySelectDropdownPage from './inputforms/JQuerySelectDropdownPage';
import RadioButtonsDemoPage from './inputforms/RadioButtonsDemoPage';
import SelectDropdownListPage from './inputforms/SelectDropdownListPage';
import SimpleFormDemoPage from './inputforms/SimpleFormDemoPage';

// Date Pickers imports
import BootstrapDatePickerPage from './datepickers/BootstrapDatePickerPage';
import JQueryDatePickerPage from './datepickers/JQueryDatePickerPage';

// Table imports
import TableDataDownloadPage from './table/TableDataDownloadPage';
import TableDataSearchPage from './table/TableDataSearchPage';
import TableFilterPage from './table/TableFilterPage';
import TablePaginationPage from './table/TablePaginationPage';
import TableSortAndSearchPage from './table/TableSortAndSearchPage';

// Progress Bar
import BootstrapProgressBarPage from './progressbar/BootstrapProgressBarPage';
import DragAndDropSlidersPage from './progressbar/DragAndDropSlidersPage';
import JQueryDownloadProgressBarsPage from './progressbar/JQueryDownloadProgressBarsPage';

// Alerts & Modals
import BootstrapAlertsPage from './alertsandmodals/BootstrapAlertsPage';
import BootstrapModalsPage from './alertsandmodals/BootstrapModalsPage';
import FileDownloadPage from './alertsandmodals/FileDownloadPage';
import JavascriptAlertsPage from './alertsandmodals/JavascriptAlertsPage';
import ProgressBarModalPage from './alertsandmodals/ProgressBarModalPage';
import WindowPopupModalPage from './alertsandmodals/WindowPopupModalPage';

// List Box
import BootstrapListPage from './listbox/BootstrapListPage';
import DataListFilterPage from './listbox/DataListFilterPage';
import JQueryListBoxPage from './listbox/JQueryListBoxPage';

// Get Others
import ChartsDemoDropdownPage from './others/ChartsDemoDropdownPage';
import DragAndDropPage from './others/DragAndDropPage';
import DynamicDataLoadingPage from './others/DynamicDataLoadingPage';

const env = Cypress.env();

class HomePage {
  footer: any;
  header: any;
  menu: any;

  /**
   * Homepage constructor. We need to create a new instance of the Header and the Footer.
   */
  constructor() {}

  /*---------------------------MENU LIST--------------------------------*/

  /**
   * Check that the All examples menu option is visible.
   */
  checkAllExamplesMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'All Examples')]").should('be.visible');
  }

  /**
   * Check that the Input Form menu option is visible.
   */
  checkInputFormMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Input Forms')]").should('be.visible');
  }

  /**
   * Check that the Date Pickers menu option is visible.
   */
  checkDatePickersMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Date pickers')]").should('be.visible');
  }

  /**
   * Check that the Table menu option is visible.
   */
  checkTableMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Table')]").should('be.visible');
  }

  /**
   * Check that the Progress Bars & Sliders menu option is visible.
   */
  checkProgressBarsSlidersMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Progress Bars & Sliders')]").should('be.visible');
  }

  /**
   * Check that the Alerts & Modals menu option is visible.
   */
  checkAlertsModalsmMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Alerts & Modals')]").should('be.visible');
  }

  /**
   * Check that the List Box menu option is visible.
   */
  checkListBoxMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'List Box')]").should('be.visible');
  }

  /**
   * Check that the Others menu option is visible.
   */
  checkOthersMenuOptionIsVisible() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Others')]").should('be.visible');
  }

  /*--------------------------------------------------------------------* 
  |	Input Form Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Simple Form Demo option on the header menu.
   */
  clickOnSimpleFormDemoLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Simple Form Demo').click();
  }

  /**
   * Method to click on the Checkbox Demo option on the header menu.
   */
  clickOnCheckboxDemoLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle').contains('Input Forms').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Checkbox Demo').click();
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
  |	Date Pickers Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Bootstrap Date Picker option on the header menu.
   */
  clickOnBootstrapDatePickerLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(2) > .dropdown-toggle').contains('Date pickers').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Date Picker').click();
  }

  /**
   * Method to click on the JQuery Date Picker option on the header menu.
   */
  clickOnJQueryDatePickerLinkHeader() {
    cy.get(':nth-child(1) > :nth-child(2) > .dropdown-toggle').contains('Date pickers').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('JQuery Date Picker').click();
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
  |	Alerts & Modals Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Bootstrap Alerts option on the header menu.
   */
  clickOnBootstrapAlertsLinkHeader() {
    cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').contains('Bootstrap Alerts').click();
  }

  /**
   * Method to click on the Bootstrap Modals option on the header menu.
   */
  clickOnBootstrapModalsLinkHeader() {
    cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('Bootstrap Modals').click();
  }

  /**
   * Method to click on the Window Popup Modal option on the header menu.
   */
  clickOnWindowPopupModalLinkHeader() {
    cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Window Popup Modal').click();
  }

  /**
   * Method to click on the Progress Bar Modal option on the header menu.
   */
  clickOnProgressBarModalLinkHeader() {
    cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
    cy.get('.open > .dropdown-menu > :nth-child(4) > a').contains('Progress Bar Modal').click();
  }

  /**
   * Method to click on the Javascript Alerts option on the header menu.
   */
  clickOnJavascriptAlertsLinkHeader() {
    cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
    cy.get('.open > .dropdown-menu > :nth-child(5) > a').contains('Javascript Alerts').click();
  }

  /**
   * Method to click on the File Download option on the header menu.
   */
  clickOnFileDownloadLinkHeader() {
    cy.get('.navbar-right > :nth-child(2) > .dropdown-toggle').contains('Alerts & Modals').click();
    cy.get('.open > .dropdown-menu > :nth-child(6) > a').contains('File Download').click();
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

  /**
   * Method to click on the JQuery List Box option on the header menu.
   */
  clickOnJQueryListBoxLinkHeader() {
    cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').contains('List Box').click();
    cy.get('.open > .dropdown-menu > :nth-child(2) > a').contains('JQuery List Box').click();
  }

  /**
   * Method to click on the Data List Filter option on the header menu.
   */
  clickOnDataListFilterLinkHeader() {
    cy.get('.navbar-right > :nth-child(3) > .dropdown-toggle').contains('List Box').click();
    cy.get('.open > .dropdown-menu > :nth-child(3) > a').contains('Data List Filter').click();
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
