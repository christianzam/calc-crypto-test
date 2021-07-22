window.addEventListener('DOMContentLoaded', (event) => {
  console.log("loading");
    let loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    let exactTime = Math.round(loadTime).toFixed(2);
    document.getElementById('tag-id').innerHTML = `Searched in ${exactTime} seconds`;
    console.log("loading FUNCIONT");
});

