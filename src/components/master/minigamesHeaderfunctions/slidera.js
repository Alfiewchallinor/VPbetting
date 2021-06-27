import $ from "jquery"

const  slidera = () => {
    $(".toprclosera, .middleera").animate({ left: "-182px" }, 450);
    $(
      ".lineuuaa, .lineuuba, .accountyoua, .topperfixera, .lineuuab, .lineuula, .logobara,  .reposyaa, .feedbackja, controllera"
    ).animate({ left: "-265px" }, 450);
    $(".sectionwithscrola, .sidebarla, .topsecga, #bottomseca").animate(
      { left: "-266px" },
      450
    );
    $(
      ".seperatorkab:nth-child(2), .seperatorkaa:nth-child(2), .seperatorkaa, .seperatorkab"
    ).hide();
    $("#fulluia").animate({ left: "-175px" }, 450);
    $(".shortenbtna").animate({ left: "175px" }, 450);
    $("#leftboxa").animate({ left: "-5px" }, 450);
    $(".homeredbtna").hide();
    $("#middleboxa").animate({ left: "-182px" }, 450);
    $("#rightboxa").animate({ left: "-99px" }, 450);
    $("#accountyouhidena, .bringbackbtna, .feedbackhidena").show(449);
  };

  export default slidera