import Lottie from "lottie-web";

export default Lottie.loadAnimation({
  container: document.getElementById("logo"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/17059-galacticons-animated.json"
});
