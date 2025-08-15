document.addEventListener('DOMContentLoaded', () => {
  const forecastElement = document.getElementById('forecast');
  const today = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
  forecastElement.innerHTML = `<h2>${today}</h2><p>Today's forecast: <strong>SUCCESS</strong> — Best time to focus on important goals.</p><button onclick="alert('Upgrade to unlock 7-day view')">Unlock 7-Day View</button>`;
});
