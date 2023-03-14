const startRecording = () => {
  chrome.runtime.sendMessage({ name: 'startRecording' });
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startRecordingButton').addEventListener('click', startRecording);
});
