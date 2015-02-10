'use strict';

angular.module('goatApp').directive('gtPlayerSummary', function () {
        return {
            restrict: 'E',
            templateUrl: '/views/playerSummaryDirective.html',
            scope: {
                gtBasePlayer: '=',
                gtComparePlayer: '='
            },
            link: function (scope) {
                scope.parseInt = parseInt;
                console.log(scope.gtBasePlayer);
            }
        };
    });