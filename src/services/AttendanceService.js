const GoogleSpreadsheetService = require('./GoogleSpreadsheetService');

const ApiService = require('./ApiService');

/**
 * This will get the attendances basing on the
 * serverId that is provided by the request.
 * @param {string} serverId
 */
exports.get = function (serverId) {
  return ApiService.get('/attendances', {
    params: { serverId },
  }).then((response) => {
    const { data } = response;
    return GoogleSpreadsheetService.loadSpreadsheet(data.spreadsheet_id)
      .then((res) => {

      });
  }).catch((error) => {
    log({ error });
  });
};

exports.store = function () {
  ApiService.post();
};

exports.update = function () {
  ApiService.patch();
};

exports.destroy = function () {
  ApiService.delete();
};
