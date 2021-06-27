
import $ from "jquery";


const Slider = () => {
    $(".toprcloser, .middleer").animate({ left: "-182px" }, 450);
    $(
      ".lineuua, .lineuub, .accountyou, .topperfixer, .lineuu, .lineuul, .logobar,  .reposya, .feedbackj, controller"
    ).animate({ left: "-265px" }, 450);
    $(".sectionwithscrol, .sidebarl, .topsecg, #bottomsec").animate(
      { left: "-266px" },
      450
    );
    $(
      ".seperatork:nth-child(2), .seperatorka:nth-child(2), .seperatorka, .seperatork"
    ).hide();
    $("#fullui").animate({ left: "-175px" }, 450);
    $(".shortenbtn").animate({ left: "175px" }, 450);
    $("#leftbox").animate({ left: "-5px" }, 450);
    $(".homeredbtn").hide();
    $("#middlebox").animate({ left: "-182px" }, 450);
    $("#rightbox").animate({ left: "-99px" }, 450);
    $("#accountyouhiden, .bringbackbtn, .feedbackhiden").show(449);
  };

  export default Slider