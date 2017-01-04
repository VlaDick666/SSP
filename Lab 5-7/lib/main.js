var app = angular.module('app', []);
app.controller('AppController',function($http,$scope,imageService){
            $scope.geo = [];
            $scope.filt ;
            $scope.filterEvent = function(){
		              if($scope.filt !==10){
			                  $scope.filt = 10;
		                      }
                        }
            $scope.sortparam='published_date';
            $scope.sortReverse  = true;
            $http.get('https://api.nytimes.com/svc/mostpopular/v2/mostemailed/Travel/30.json?api-key=559c62635628401caacf51ff44c9a592')
                .success(function(result){
                   $scope.geo = result.results;
                });

            $scope.Addgeo = function(title,abstract,url){
                $scope.geo.push({
                    url: url,
                    count_type: "EMAILED",
                    column: "",
                    section: "Geo",
                    byline: "Was created by anonymous.",
                    title: title,
                    abstract: abstract,
                    published_date: new Date().toDateString(),
                    source: "The New York Times",
                    des_facet: ["Geography"],
                    org_facet: "",
                    per_facet: "",
                    geo_facet: "",
                    media: imageService.media
                });
            };
    });
