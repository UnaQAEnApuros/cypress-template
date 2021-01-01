import Header from './Header';
import Footer from './Footer';

import AjaxFormSubmitPage from './inputforms/AjaxFormSubmitPage';
import CheckboxDemoPage from './inputforms/CheckboxDemoPage';
import InputFormSubmitPage from './inputforms/InputFormSubmitPage';
import JQuerySelectDropdownPage from './inputforms/JQuerySelectDropdownPage';
import RadioButtonsDemoPage from './inputforms/RadioButtonsDemoPage';
import SelectDropdownListPage from './inputforms/SelectDropdownListPage';
import SimpleFormDemoPage from './inputforms/SimpleFormDemoPage';
import BootstrapDatePickerPage from './datepickers/BootstrapDatePickerPage'
import JQueryDatePickerPage from './datepickers/JQueryDatePickerPage'
import TablePaginationPage from './table/TablePaginationPage'

const env = Cypress.env();

class HomePage {

  /**
   * Homepage constructor. We need to create a new instance of the Header and the Footer. 
   */
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
  }
  
  /**
   * Method to visit the webpage URL
   */
  visit() {
    cy.visit(env.webURL);
  }

  /**
   * Method to check if the Homepage is loaded (include the Header and Footer elements)
   */
  isReady() {
    this.header.isReady();

    cy.url().should('eq', 'https://www.seleniumeasy.com/test/');
    cy.get('body > :nth-child(2)').should('be.visible');
    cy.get('#easycont > :nth-child(1)').should('be.visible');

    this.footer.isReady();
  }

  /**
   * Method to click to close the popup once is displayed. 
   */
  closePopUp(){
    const checkPopup = () => cy.get('#at-cv-lightbox-header').should('be.visible');
    cy.waitUntil(checkPopup).then(() => {
      cy.get('#at-cv-lightbox-close').click();
    });
  }

  /*--------------------------------------------------------------------* 
  |	Input Form Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Simple Form Demo option on the header menu. 
   */
  clickOnSimpleFormDemoLinkHeader(){
    this.header.getInputForm().click();
    this.header.getSimpleFormDemo().click();

    const simpleFormDemo = new SimpleFormDemoPage();
    return simpleFormDemo;
  }

  /**
   * Method to click on the Checkbox Demo option on the header menu. 
   */
  clickOnCheckboxDemoLinkHeader(){
    this.header.getInputForm().click();
    this.header.getCheckboxDemo().click();

    const checkboxDemo = new CheckboxDemoPage();
    return checkboxDemo;
  }

  /**
   * Method to click on the Radio Buttons Demo option on the header menu. 
   */
  clickOnRadioButtonsDemoLinkHeader(){
    this.header.getInputForm().click();
    this.header.getRadioButtonsDemo().click();

    const radioButtonsDemo = new RadioButtonsDemoPage();
    return radioButtonsDemo;
  }

  /**
   * Method to click on the Select Dropdown List option on the header menu. 
   */
  clickOnSelectDropdownListLinkHeader(){
    this.header.getInputForm().click();
    this.header.getSelectDropdownList().click();

    const selectDropdownList = new SelectDropdownListPage();
    return selectDropdownList;
  }

  /**
   * Method to click on the Input Form Submit option on the header menu. 
   */
  clickOnInputFormSubmitLinkHeader(){
    this.header.getInputForm().click();
    this.header.getInputFormSubmit().click();

    const inputFormSubmit = new InputFormSubmitPage();
    return inputFormSubmit;
  }

  /**
   * Method to click on the Ajax Form Submit option on the header menu. 
   */
  clickOnAjaxFormSubmitLinkHeader(){
    this.header.getInputForm().click();
    this.header.getAjaxFormSubmit().click();

    const ajaxFormSubmit = new AjaxFormSubmitPage();
    return ajaxFormSubmit;
  }

  /**
   * Method to click on the JQuery Select option on the header menu. 
   */
  clickOnAjaxFormSubmitLinkHeader(){
    this.header.getInputForm().click();
    this.header.getJQuerySelectDropdown().click();

    const jQuerySelectDropdown = new JQuerySelectDropdownPage();
    return jQuerySelectDropdown;
  }

  /*--------------------------------------------------------------------* 
  |	Date Pickers Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Bootstrap Date Picker option on the header menu. 
   */
  clickOnBootstrapDatePickerLinkHeader(){
    this.header.getDatePickers().click();
    this.header.getBootstrapDatePicker().click();

    const bootstrapDatePicker = new BootstrapDatePickerPage();
    return bootstrapDatePicker;
  }

  /**
   * Method to click on the JQuery Date Picker option on the header menu. 
   */
  clickOnJQueryDatePickerLinkHeader(){
    this.header.getDatePickers().click();
    this.header.getJQueryDatePicker().click();

    const jQueryDatePicker = new JQueryDatePickerPage();
    return jQueryDatePicker;
  }

  /*--------------------------------------------------------------------* 
  |	Table Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Table Pagination option on the header menu. 
   */
  clickOnTablePaginationLinkHeader(){
    this.header.getTable().click();
    this.header.getTablePagination().click();

    const tablePaginationPage = new TablePaginationPage();
    return tablePaginationPage;
  }

  /**
   * 
   * Table Data Search
   * getTableDataSearch
   * 
   * Table Filter
   * getTableFilter
   * 
   * Table Sort & Search
   * getTableSortAndSearch
   * 
   * Table Data Download
   * getTableDataDownload
   * 
   */

    /*--------------------------------------------------------------------* 
    |	Demo Home
    *---------------------------------------------------------------------*/

    /**
     * getDemoHome
     */

    /*--------------------------------------------------------------------* 
    |	Progress Bar Submenu
    *---------------------------------------------------------------------*/

    /**
     * getProgressBar
     * 
     * JQuery Download Progress bars
     * getJQueryDownloadProgressBars
     * 
     * Bootstrap Progress bar
     * getBootstrapProgressBar
     * 
     * Drag & Drop Sliders
     * getDragAndDropSliders
     * 
     */


    /*--------------------------------------------------------------------* 
    |	Alerts & Modals Submenu
    *---------------------------------------------------------------------*/

    /**
     * getAlertsAndModals
     * 
     * Bootstrap Alerts
     * getBootstrapAlerts
     * 
     * Bootstrap Modals
     * getBootstrapModals
     * 
     * Window Popup Modal
     * getWindowPopupModal
     * 
     * Progress Bar Modal
     * getProgressBarModal
     * 
     * Javascript Alerts
     * getJavascriptAlerts
     * 
     * File Download
     * getFileDownload
     * 
     */
    

    /*--------------------------------------------------------------------* 
    |	List Box Submenu
    *---------------------------------------------------------------------*/

    /**
     * getListBox
     * 
     * Bootstrap List
     * getBootstrapListBox
     * 
     * JQuery List Box
     * getJQueryListBox
     * 
     * Data List Filter
     * getDataListFilter
     */


    /*--------------------------------------------------------------------* 
    |	Get Others Submenu
    *---------------------------------------------------------------------*/

    /**
     * getOthers
     * 
     * Drag and Drop
     * getDragAndDrop
     * 
     * Dynamic Data Loading
     * getDynamicDataLoading
     * 
     * Charts Demo dropdown
     * getChartsDemo
     */
}

export default HomePage;