import $ from "jquery"


const  backwardfunctiona = () => {
    $(".toprclosera, .middleera").animate({ left: "83px" }, 450);
    $(
      ".lineuuaa, .lineuuba, .accountyoua, .topperfixera,.lineuuab, .lineuula, .logobara,  .reposyaa, .feedbackja, controllera"
    ).animate({ left: "0px" }, 450);
    $(".sectionwithscrola, .sidebarla, .topsecga, #bottomseca").animate(
      { left: "-1px" },
      450
    );
    $(
      ".seperatorkab:nth-child(2), .seperatorkaa:nth-child(2), .seperatorkaa, .seperatorkab"
    ).show(448);
    $("#fulluia").animate({ left: "0px" }, 450);
    $(".shortenbtna").animate({ left: "175px" }, 450);
    $("#leftboxa").animate({ left: "0px" }, 450);
    $(".homeredbtna").show(440);
    $("#middleboxa").animate({ left: "83px" }, 450);
    $("#rightboxa").animate({ left: "166px" }, 450);
    $("#accountyouhidena, .bringbackbtna, .feedbackhidena").hide();
  };

  export default backwardfunctiona