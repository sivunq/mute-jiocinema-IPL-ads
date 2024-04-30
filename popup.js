document.addEventListener('DOMContentLoaded', function() {
  const overlayToggle = document.getElementById('overlayToggle');

  chrome.storage.sync.get('overlayEnabled', function(data) {
    overlayToggle.checked = data.overlayEnabled;
  });

  overlayToggle.addEventListener('change', function() {
    chrome.storage.sync.set({ overlayEnabled: overlayToggle.checked });
  });
});
