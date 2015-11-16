angular.module("mySkills", ["chart.js"]).config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#F7464A', '#46BFBD','#FDB45C'],
      responsive: true,
      scaleShowLabelBackdrop : true,
      scaleShowLine : true,
      segmentShowStroke : true,
      segmentStrokeColor : "#757575",
      animationEasing : "easeOutBounce",
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    });
  }]).controller("DoughnutCtrl", function ($scope) {
    $scope.labels = ["Ruby On Raisl", "CSS/HTML", "jQuery"];
    $scope.data = [400, 400, 200];
});
