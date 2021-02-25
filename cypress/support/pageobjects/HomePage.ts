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
   * Method to click on the Bootstrap Alerts option on the header menu. 
   */
  clickOnBootstrapAlertsLinkHeader(){
    this.header.getAlertsAndModals().click();
    this.header.getBootstrapAlerts().click();

    const bootstrapAlerts = new BootstrapAlertsPage();
    return bootstrapAlerts;
  }

  /**
   * Method to click on the Bootstrap Modals option on the header menu. 
   */
  clickOnBootstrapModalsLinkHeader(){
    this.header.getAlertsAndModals().click();
    this.header.getBootstrapModals().click();

    const bootstrapModals = new BootstrapModalsPage();
    return bootstrapModals;
  }

  /**
   * Method to click on the Window Popup Modal option on the header menu. 
   */
  clickOnWindowPopupModalLinkHeader(){
    this.header.getAlertsAndModals().click();
    this.header.getWindowPopupModal().click();

    const windowPopupModal = new WindowPopupModalPage();
    return windowPopupModal;
  }

  /**
   * Method to click on the Progress Bar Modal option on the header menu. 
   */
  clickOnProgressBarModalLinkHeader(){
    this.header.getAlertsAndModals().click();
    this.header.getProgressBarModal().click();

    const progressBarModal = new ProgressBarModalPage();
    return progressBarModal;
  }

  /**
   * Method to click on the Javascript Alerts option on the header menu. 
   */
  clickOnJavascriptAlertsLinkHeader(){
    this.header.getAlertsAndModals().click();
    this.header.getJavascriptAlerts().click();

    const javascriptAlerts = new JavascriptAlertsPage();
    return javascriptAlerts;
  }

  /**
   * Method to click on the File Download option on the header menu. 
   */
  clickOnFileDownloadLinkHeader(){
    this.header.getAlertsAndModals().click();
    this.header.getFileDownload().click();

    const fileDownload = new FileDownloadPage();
    return fileDownload;
  }

  /*--------------------------------------------------------------------* 
  |	List Box Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Bootstrap List option on the header menu. 
   */
  clickOnBootstrapListLinkHeader(){
    this.header.getListBox().click();
    this.header.getBootstrapListBox().click();

    const bootstrapList = new BootstrapListPage();
    return bootstrapList;
  }

  /**
   * Method to click on the JQuery List Box option on the header menu. 
   */
  clickOnJQueryListBoxLinkHeader(){
    this.header.getListBox().click();
    this.header.getJQueryListBox().click();

    const jQueryListBox = new JQueryListBoxPage();
    return jQueryListBox;
  }

  /**
   * Method to click on the Data List Filter option on the header menu. 
   */
  clickOnDataListFilterLinkHeader(){
    this.header.getListBox().click();
    this.header.getDataListFilter().click();

    const dataListFilter = new DataListFilterPage();
    return dataListFilter;
  }
  
  /*--------------------------------------------------------------------* 
  |	Get Others Submenu
  *---------------------------------------------------------------------*/

  /**
   * Method to click on the Drag and Drop option on the header menu. 
   */
  clickOnDragAndDropLinkHeader(){
    this.header.getOthers().click();
    this.header.getDragAndDrop().click();

    const dragAndDrop = new DragAndDropPage();
    return dragAndDrop;
  }

  /**
   * Method to click on the Dynamic Data Loading option on the header menu. 
   */
  clickOnDynamicDataLoadingLinkHeader(){
    this.header.getOthers().click();
    this.header.getDynamicDataLoading().click();

    const dynamicDataLoading = new DynamicDataLoadingPage();
    return dynamicDataLoading;
  }

  /**
   * Method to click on the Charts Demo dropdown option on the header menu. 
   */
  clickOnChartsDemoDropdownLinkHeader(){
    this.header.getOthers().click();
    this.header.getChartsDemo().click();

    const chartsDemoDropdown = new ChartsDemoDropdownPage();
    return chartsDemoDropdown;
  }
}

export default HomePage;