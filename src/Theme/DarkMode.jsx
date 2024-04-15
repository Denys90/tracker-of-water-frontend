const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setLightMode();
    } else {
      setDarkMode;
    }
  };
  return (
    <div className="dark_theme">
      <input
        className="dark_theme_input"
        type="checkbox"
        id="dark_mode_toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_lable" htmlFor="dark_mode_toggle">
        Theme
      </label>
    </div>
  );
};

export default DarkMode;
