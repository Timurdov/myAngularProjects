;(function(window) {

    angular.module('app', [])
        .directive('tab', function(){
        return{
            restrict: "E",
            transclude: true,
            template: '<div role="tabpanel" data-ng-show="activate" data-ng-transclude></div> ',
            require: '^tabset',
            scope: {
                heading: '@'
            },
            link: function(scope, elem, attr, tabsetCtrl){
                scope.activate = false;

                scope.disabled = false;
                if(attr.disable){
                    attr.$observe('disable', function(value){
                        scope.disabled = (value !== 'false');
                    })
                }

                tabsetCtrl.addTab(scope);
            }
        }
    }).directive('tabset', function(){
            return{
                restrict: 'E',
                transclude: true,
                scope: {
                    type: '@',
                    vertical: '@',
                    justified: '@'
                },

                templateUrl: 'tabset.html',
                bindToController: true,
                controllerAs: 'tabset',
                controller: function(){
                    var self = this;
                    self.tabs = [];
                    self.classes = {};
                    if(self.type === 'pills') { self.classes['nav-pills'] = true}
                    else { self.classes['nav-tabs'] = true }
                    self.addTab = function addTab(tab){
                        self.tabs.push(tab);

                        if(self.tabs.length === 1){
                            tab.activate = true;
                        }
                    };

                    if(self.justified) { self.classes['nav-justified'] = true }
                    if(self.vertical) { self.classes['nav-stacked'] = true }

                    self.select = function(selectedTab){
                        if(selectedTab.disabled){ return }
                       angular.forEach(self.tabs, function(tab){
                           if(tab.activate && tab !== selectedTab){
                               tab.activate = false;
                           }
                       });
                        selectedTab.activate = true;
                    };
                }
            }
        });

// Define directives here

})(window);