/**
 * Created by 1 on 02.05.2015.
 */
var serviceApp2 = angular.module('serviceApp2',[]);

serviceApp2.factory('messages', function(){
    var messages = {};
    messages.list = [];
    messages.add = function(message){
        messages.list.push({id: messages.list.length, text: message});
    };
    return messages;
});

serviceApp2.controller('ListCtrl', function(messages){
    var self = this;
    self.messages = messages.list;
});

serviceApp2.controller('PostCtrl', function(messages){
    var self = this;

    self.newMessage = 'Hello world!';

    self.addMessage = function(message){
        messages.add(message);
        //self.newMessage = '';
    };
});