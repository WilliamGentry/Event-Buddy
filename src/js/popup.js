chrome.tabs.query(
  {
    active: true,
    currentWindow: true
  },
  tabs => {
    const [{ id }] = tabs;
    chrome.tabs.sendMessage(id, { getSelection: true }, response => {
      console.log(response);
      document.getElementById("text").innerHTML = response.text;
    })});