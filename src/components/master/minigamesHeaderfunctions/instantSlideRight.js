
import $ from "jquery";


const instantSlideRight = () => {
    $(".containerForSports").css({left: "-90px"})
    $(".toprcloser, .middleer").css({ left: "-182px" });
    $(
      ".lineuua, .lineuub, .accountyou, .topperfixer, .lineuu, .lineuul, .logobar,  .reposya, .feedbackj, controller"
    ).css({ left: "-265px" });
    $(".sectionwithscrol, .sidebarl, .topsecg, #bottomsec").css(
      { left: "-266px" }
      
    );
    $(
      ".seperatork:nth-child(2), .seperatorka:nth-child(2), .seperatorka, .seperatork"
    ).hide();
    $("#fullui").css({ left: "-175px" });
    $(".shortenbtn").css({ left: "175px" });
    $("#leftbox").css({ left: "-5px" });
    $(".homeredbtn").hide();
    $("#middlebox").css({ left: "-182px" });
    $("#rightbox").css({ left: "-99px" });
    $("#accountyouhiden, .bringbackbtn, .feedbackhiden").show();
  };

  export default instantSlideRight