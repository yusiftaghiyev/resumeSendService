function info() {
var timestamp1 = new Date().getTime();
var user = Session.getUser();  //get user deprecate metoddur
Logger.log('User:'+ user);
Logger.log('Daily quota:'+ MailApp.getRemainingDailyQuota());
var timestamp2 = new Date().getTime();
var difference = ((timestamp2 - timestamp1)/1000);
Logger.log("Succesfull run:" + difference + " "+"seconds.");

}
