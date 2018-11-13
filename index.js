var yourBrowser = "Chrome";
var ieLog = "We don't support IE browser!";
var webKitLog = "We support your browser =)";
var otherLog = "We hope your specific browser works fine";

var switchResult;

switch (yourBrowser) {
    case "IE":
    console.log('SWITCH SOLUTION:', ielog);
      break;

    case "Firefox":
    case "Chrome":
    case "Opera":
    case "Safari":
    console.log('SWITCH SOLUTION: ', webKitLog);
      break;

    case "other":
      console.log('SWITCH SOLUTION:', otherLog);
}
