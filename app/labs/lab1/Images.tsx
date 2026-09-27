export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading an AI-selected sample image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Earth seen from space"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg"
      />
      <br />
      Loading an image that matters to me:
      <br />
      <img
        id="wd-your-image"
        width="250px"
        alt="Public domain painting of the Hindu deity Ganesha, circa 1800, Walters Art Museum"
        src="https://upload.wikimedia.org/wikipedia/commons/0/07/Ganesha_pachayatana.jpg"
      />
    </div>
  );
}