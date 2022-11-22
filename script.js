const reqPageUrl = 'https://evgsklyarov94.github.io/request.html';

const serviceNameSelect = document.getElementById('serviceName');
const callbackUrlInput = document.getElementById('callbackUrl');
const connectionBtn = document.getElementById('connection-btn');

console.log('serviceNameSelect', serviceNameSelect)
console.log('callbackUrlInput', callbackUrlInput)

serviceNameSelect.onchange = () => {
console.log('serviceNameSelect', serviceNameSelect.value)
}

const onConnection = () => {
  console.log('serviceNameSelect', serviceNameSelect.value)
  console.log('callbackUrlInput', callbackUrlInput.value)

  const url = `${reqPageUrl}?callback_url=${callbackUrlInput.value}`;
  window.open(url, '_blank').focus();
};