import Header from './Header';
import Footer from './Footer';

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

    const tablePagination = new TablePaginationPage();
    return tablePagination;
  }

  /**
   * Method to click on the Table Data Search option on the header menu. 
   */
  clickOnTableDataSearchLinkHeader(){
    this.header.getTable().click();
    this.header.getTableDataSearch().click();

    const tableDataSearch = new TableDataSearchPage();
    return tableDataSearch;
  }

  /**
   * Method to click on the Table Filter option on the header menu. 
   */
  clickOnTableFilterLinkHeader(){
    this.header.getTable().click();
    this.header.getTableFilter().click();

    const tableFilter = new TableFilterPage();
    return tableFilter;
  }

  /**
   * Method to click on the Table Sort & Search option on the header menu. 
   */
  clickOnTableSortAndSearchLinkHeader(){
    this.header.getTable().click();
    this.header.getTableSortAndSearch().click();

    const tableSortAndSearch = new TableSortAndSearchPage();
    return tableSortAndSearch;
  }

  /**
   * Method to click on the Table Data Download option on the header menu. 
   */
  clickOnTableDataDownloadLinkHeader(){
    this.header.getTable().click();
    this.header.getTableDataDownload().click();

    const tableDataDownload = new TableDataDownloadPage();
    return tableDataDownload;
  }

  /*--------------------------------------------------------------------* 
  |	Demo Home
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Demo Home Link option on the header menu. 
   */
  clickOnDemoHomeLinkHeader(){
    this.header.getDemoHome().click();
  }

  /*--------------------------------------------------------------------* 
  |	Progress Bar Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the JQuery Download Progress bars option on the header menu. 
   */
  clickOnJQueryDownloadProgressBarsLinkHeader(){
    this.header.getProgressBar().click();
    this.header.getJQueryDownloadProgressBars().click();

    const jQueryDownloadProgressBars = new JQueryDownloadProgressBarsPage();
    return jQueryDownloadProgressBars;
  }

  /**
   * Method to click on the Bootstrap Progress bar option on the header menu. 
   */
  clickOnBootstrapProgressBarLinkHeader(){
    this.header.getProgressBar().click();
    this.header.getBootstrapProgressBar().click();

    const bootstrapProgressBar = new BootstrapProgressBarPage();
    return bootstrapProgressBar;
  }

  /**
   * Method to click on the Drag & Drop Sliders option on the header menu. 
   */
  clickOnDragAndDropSlidersLinkHeader(){
    this.header.getProgressBar().click();
    this.header.getDragAndDropSliders().click();

    const dragAndDropSliders = new DragAndDropSlidersPage();
    return dragAndDropSliders;
  }

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