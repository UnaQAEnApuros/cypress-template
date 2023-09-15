/**
 * Wrapper class for Cypress.Log
 */
export class Log {
  private _log: Cypress.Log;

  /**
   * @description Create a Log object that starts a log in Cypress
   *
   * @param {string} displayName Name that will be displayed in Cypress log
   * @param {string} description Short description for the custom command to log
   * @param {Record<string, unknown>} otherArguments? Extra properties to show in log
   */
  constructor(displayName: string, description: string, otherArguments?: Record<string, unknown>) {
    const logData: Partial<Cypress.LogConfig> = {
      displayName,
      message: [description],
      autoEnd: false
    };

    if (otherArguments) {
      logData.consoleProps = () => otherArguments;
      logData.message[0] += ` | ${JSON.stringify(otherArguments)
        .replaceAll(/["{}]/g, '')
        .replaceAll(/([,:])/g, '$1 ')}`;
    }

    // eslint-disable-next-line no-restricted-syntax
    this._log = Cypress.log(logData);
  }

  /**
   * @description Close the started Cypress log
   */
  public end(): void {
    this._log.end();
  }
}
