import $ from "jquery"


const  instantSlideLeft = () => {
    $(".toprclosera, .middleera").css({ left: "83px" });
    $(
      ".lineuuaa, .lineuuba, .accountyoua, .topperfixera,.lineuuab, .lineuula, .logobara,  .reposyaa, .feedbackja, controllera"
    ).css({ left: "0px" });
    $(".sectionwithscrola, .sidebarla, .topsecga, #bottomseca").css(
      { left: "-1px" },
      
    );
    $(
      ".seperatorkab:nth-child(2), .seperatorkaa:nth-child(2), .seperatorkaa, .seperatorkab"
    ).show();
    $("#fulluia").css({ left: "0px" });
    $(".shortenbtna").css({ left: "175px" });
    $("#leftboxa").css({ left: "0px" });
    $(".homeredbtna").show();
    $("#middleboxa").css({ left: "83px" });
    $("#rightboxa").css({ left: "166px" });
    $("#accountyouhidena, .bringbackbtna, .feedbackhidena").hide();
  };

  export default instantSlideLeft