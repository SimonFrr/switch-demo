// https://davidwalsh.name/query-string-javascript
// We use this instead of URLSearchParams for maximum compatibility
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export function saveQueryParams () {
  const plan = getUrlParameter('plan');
  return {
    type: 'SAVE_QUERY_PARAMS',
    plan
  }
}
