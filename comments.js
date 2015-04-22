
var commentManager = require('./commentManager');
var padManager = require("ep_etherpad-lite/node/db/PadManager");
var ERR = require("ep_etherpad-lite/node_modules/async-stacktrace");

function padExists(padID){
  console.log("comments.js padExists");
  padManager.doesPadExists(padID, function(err, exists){
    return exists;
  });
}

exports.getPadComments = function(padID, callback)
{
  console.log("comments.js getPadComments");
  commentManager.getComments(padID, function (err, padComments)
  {
    if(ERR(err, callback)) return;

    if(padComments !== null) callback(null, padComments);
  });
};

exports.addPadComment = function(padID, data, callback)
{
  console.log("comments.js addPadComment");
  commentManager.addComment(padID, data, function (err, commentID)
  {
    if(ERR(err, callback)) return;

    if(commentID !== null) callback(null, commentID);
  });
};
