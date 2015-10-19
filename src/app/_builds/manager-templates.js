angular.module("manager").run(["$templateCache", function($templateCache) {$templateCache.put("/app/manager/shell.html","<div data-ng-controller=\"shell as vm\"> <div data-ng-include=\"\'/app/manager/features/angularTab/angularTab.html\'\"></div> </div>");
$templateCache.put("/app/manager/components/childProcess/childProcess.html","<div style=\"border: 1px solid black; padding: 10px;\" class=\"clearfix\"> <div> <section class=\"col-xs-3\" style=\"float:right;\"> <button class=\"btn\" data-ng-class=\"[{\'btn-success\': !vm.started}, {\'btn-error\': vm.started}]\" data-ng-click=\"vm.toggleStart()\">{{vm.btnStartText()}}</button> </section> <section class=\"col-xs-5\"> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.toggleVisiblity()\"> <span data-ng-class=\"[{ \'glyphicon glyphicon-plus\': !vm.visible }, {\'glyphicon glyphicon-minus\': vm.visible}]\"></span> </button> <label data-ng-bind=\"vm.processname\"></label> </section> </div> <div> <section class=\"col-xs-8\"> <label>Command: {{vm.command}}</label> </section> <section class=\"col-xs-4\"> <label>Status</label> <span>{{vm.txtStatus()}}</span> </section> </div> <div data-collapse=\"!vm.visible\" class=\"col-xs-12\"> <h4>Status Messages <span>(Most Recent First)</span></h4> <section style=\"max-height:200px; overflow:auto;\"> <ul> <li data-ng-repeat=\"message in vm.stdout | orderBy : \'-id\'\"> <span data-ng-bind=\"message.data\"></span> </li> </ul> </section> </div> </div> ");
$templateCache.put("/app/manager/features/angularTab/angularTab.html","<div data-ng-controller=\"angularTab as vm\" style=\"padding: 10px;\"> <h2>Servers / Commands</h2> <div data-ng-repeat=\"childprocess in vm.childProcessList\"> <h4 data-ng-bind=\"childprocess.name\"></h4> <div data-child-process=\"\" data-processname=\"{{childprocess.displayName}}\" data-command=\"{{childprocess.makeFunc()}}\" data-command-config=\"{{childprocess.commandConfig}}\" data-outputlimit=\"100\"> </div> </div> </div>");}]);