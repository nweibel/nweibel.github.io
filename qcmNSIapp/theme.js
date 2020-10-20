const themes = Array.from(document.getElementsByClassName('theme-text'));
//console.log(themes);
themes.forEach(theme => {
    theme.addEventListener("click", e => {
      const selectedTheme = e.target;
      const selectedThemeNb = selectedTheme.dataset["number"];
      window.location.assign("/game.html?"+selectedThemeNb);

    });
});