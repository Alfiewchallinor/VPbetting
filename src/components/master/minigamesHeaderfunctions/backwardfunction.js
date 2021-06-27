import $ from "jquery"

const backwardfunction = () => {
    $(".toprcloser, .middleer").animate({ left: "83px" }, 450);
    $(
      ".lineuua, .lineuub, .accountyou, .topperfixer,.lineuu, .lineuul, .logobar,  .reposya, .feedbackj, controller"
    ).animate({ left: "0px" }, 450);
    $(".sectionwithscrol, .sidebarl, .topsecg, #bottomsec").animate(
      { left: "-1px" },
      450
    );
    $(
      ".seperatork:nth-child(2), .seperatorka:nth-child(2), .seperatorka, .seperatork"
    ).show(448);
    $("#fullui").animate({ left: "0px" }, 450);
    $(".shortenbtn").animate({ left: "175px" }, 450);
    $("#leftbox").animate({ left: "0px" }, 450);
    $(".homeredbtn").show(440);
    $("#middlebox").animate({ left: "83px" }, 450);
    $("#rightbox").animate({ left: "166px" }, 450);
    $("#accountyouhiden, .bringbackbtn, .feedbackhiden").hide();
  };
  export default backwardfunction