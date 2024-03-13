const idSite = 3;
const matomoServerUrl = "//matomo.goodstaff.at/";
const matomoTrackingApiUrl = matomoServerUrl + "piwik.php";

const _paq = window._paq = window._paq || [];
_paq.push(['setTrackerUrl', matomoTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);

(function() {
  var g = document.createElement('script'); var s = document.getElementsByTagName('script')[0];
  g.type = 'text/javascript'; g.async = true; g.src = matomoServerUrl + 'matomo.js';
  g.onload = function() {
    // Nachdem matomo.js geladen wurde, führen Sie Tracking-Aufrufe aus
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
  };
  s.parentNode.insertBefore(g, s);
})();