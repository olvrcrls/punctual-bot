import apiService from './ApiService';
import GoogleSpreadsheetService from './GoogleSpreadsheetService';

/**
 * This will get the attendances basing on the
 * serverId that is provided by the request.
 * @param {string} serverId
 */
export function get(serverId) {
  return apiService.get('/attendances', {
    params: { serverId },
  }).then((response) => {
    const { data } = response;
    return GoogleSpreadsheetService.loadSpreadsheet(data.spreadsheet_id)
      .then((res) => {

      });
  }).catch((error) => {
    log({ error });
  });
}

export function store() {
  apiService.post();
}

export function update() {
  apiService.patch();
}

export function destroy() {
  apiService.delete();
}
