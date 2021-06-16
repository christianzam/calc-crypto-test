function initHandleChange() { 
  const input = document.getElementById("search-field");
  window.addEventListener("load", () => {
    input.value = "";
  });
};

export { initHandleChange };