const initTime = () => {
  let event = new Date;
  document.getElementById('id-local-time').innerHTML = `${event.toLocaleTimeString('en')}`;
};

export { initTime };
