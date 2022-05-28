let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('high');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'high') {
    document.getElementById('switcher-id').href = './themes/high.css';
  } else if (theme == 'calm') {
    document.getElementById('switcher-id').href = './themes/calm.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/dark.css';
  } else if (theme == 'color') {
    document.getElementById('switcher-id').href = './themes/color.css';
  }
  localStorage.setItem('style', theme);
}
