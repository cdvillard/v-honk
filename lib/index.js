import Vue from "vue";

const audio = new Audio("https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3");

function honkify(event, arg, target) {
  event.preventDefault();
  event.stopImmediatePropagation();

  // if the "goose" blocks
  if (arg === "block") {
    // honk at them and don't let them pass
    audio.play();
    return false;
  } else {
    // otherwise honk at them as they flee
    setTimeout(() => {
      window.location = target.href;
    }, 700);
    audio.play();
  }
}

export default Vue.directive("honk", {
  bind(el, binding) {
    el.__HonkHandler__ = event => {
      // passes event to prevent, arg if any, and target to send to
      honkify(event, binding.arg, event.target);
    };
    document.body.addEventListener("click", el.__HonkHandler__);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.__HonkHandler__);
  }
});