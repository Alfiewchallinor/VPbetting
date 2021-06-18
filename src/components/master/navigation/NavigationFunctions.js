import $ from "jquery";

const EsportsFunction = () => {
  $("#esports-lightbox").toggle();
  $("#sports-lightbox, #minigames-lightbox").hide();
};
const SportsFunction = () => {
  $("#sports-lightbox").toggle();
  $("#esports-lightbox, #minigames-lightbox").hide();
};
const MinigamesFunction = () => {
  $("#minigames-lightbox").toggle();
  $("#esports-lightbox, #sports-lightbox").hide();
};

export { EsportsFunction, SportsFunction, MinigamesFunction };
