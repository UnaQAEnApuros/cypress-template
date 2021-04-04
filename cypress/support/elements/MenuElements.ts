class MenuElements {
  /**
   * Method to get the All examples menu option
   */
  getAllExamplesMenuOption() {
    return cy.xpath(
      "//li[@class='tree-branch']/a[contains(text(),'All Examples')]"
    )
  }

  /**
   * Method to get the Input Form menu option
   */
  getInputFormMenuOption() {
    return cy.xpath(
      "//li[@class='tree-branch']/a[contains(text(),'Input Forms')]"
    )
  }

  /**
   * Method to get the Date Pickers menu option
   */
  getDatePickersMenuOption() {
    return cy.xpath(
      "//li[@class='tree-branch']/a[contains(text(),'Date pickers')]"
    )
  }

  /**
   * Method to get the Table menu option
   */
  getTableMenuOption() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Table')]")
  }

  /**
   * Method to get the Progress Bars & Sliders menu option
   */
  getProgressBarsSlidersMenuOption() {
    return cy.xpath(
      "//li[@class='tree-branch']/a[contains(text(),'Progress Bars & Sliders')]"
    )
  }

  /**
   * Method to get the Alerts & Modals menu option
   */
  getAlertsModalsmMenuOption() {
    return cy.xpath(
      "//li[@class='tree-branch']/a[contains(text(),'Alerts & Modals')]"
    )
  }

  /**
   * Method to get the List Box menu option
   */
  getListBoxMenuOption() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'List Box')]")
  }

  /**
   * Method to get the Others menu option
   */
  getOthersMenuOption() {
    return cy.xpath("//li[@class='tree-branch']/a[contains(text(),'Others')]")
  }
}

export default MenuElements
