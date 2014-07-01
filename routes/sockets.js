var exec = require('child_process').exec;
var Config = require('config-js');
var config = new Config('./config/config.js');
// var clients = {};

if (!String.prototype.formatArray) {
  String.prototype.formatArray = function(array) {
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof array[number] != 'undefined'
        ? array[number]
        : match
      ;
    });
  };
}

var sockets = function (socket) {
  // clients[socket.id] = socket;

  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('executeCommand', function(data){
    var command, options, commandString,
      safeOptions = [],
      commands = config.get('commands'),
      doneEvent, failEvent;

    command = commands[data.task];
    options = data.params;
    // check for possible attacks and delete all text right to && and ; sumbols
    options.forEach(function (option, index) {
      safeOptions.push(option.split('&&')[0].split(';')[0]);
    });
    commandString = command.cmd.formatArray(safeOptions).replace(/{(\d+)}/g, '').trim();

    doneEvent = 'commandDone:'+data.task;
    failEvent = 'commandFail:'+data.task;

    console.log(doneEvent, failEvent);

    exec(commandString, function (error, stdout, stderr) {
      if (error) {
        socket.emit(failEvent, {output: stdout, errors: stderr});
      } else {
        console.log('executed');
        socket.emit(doneEvent, {output: stdout, errors: stderr});
      }
    });
  });

};

module.exports = sockets;