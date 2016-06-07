'use strict';

angular.module('armchairApp')
        .constant("baseURL","http://localhost:53475/")
        .factory('furnitureFactory', ['$resource', 'baseURL', function($resource, baseURL) {
          // var furns = [{suite1:[
          //   {
          //       name: 'Ekero',
          //       image: 'img/armchair1.png',
          //       price: '1750',
          //       description: 'Мягкое кресло сделано для Ikea, Швеция.'
          //   },
          //   {
          //       name: 'The perfect country armchair',
          //       image: 'img/armchair2.png',
          //       price: '1800',
          //       description: 'Натуральное льняное кресло.'
          //   },
          //   {
          //       name: 'Natuzzi Living',
          //       image: 'img/armchair3.png',
          //       price: '1900',
          //       description: 'Новый модный дизайн, Италия.'
          //   }
          // ],suite2:[
          //   {
          //       name: 'Pottery Barn’s Cardiff Tufted Armchair',
          //       image: 'img/armchair4.png',
          //       price: '1750',
          //       description: 'Мягкое элегантное кресло.'
          //   },
          //   {
          //       name: 'VIOSKI',
          //       image: 'img/armchair5.png',
          //       price: '1800',
          //       description: 'Элегантный модернизм, Италия.'
          //   },
          //   {
          //       name: 'Eastside Digs',
          //       image: 'img/armchair6.png',
          //       price: '1900',
          //       description: 'Это кресло, как забытые песни Beatles.'
          //   }
          // ],suite3:[
          //   {
          //       name: 'Магнолия',
          //       image: 'img/sofa1.png',
          //       price: '4750',
          //       description: 'Каркас выполнен из натурального дерева и фанеры.'
          //   },
          //   {
          //       name: 'Гамма',
          //       image: 'img/sofa2.png',
          //       price: '7000',
          //       description: 'Механизм раскладки: французская раскладушка, седафлекс.'
          //   },
          //   {
          //       name: 'Венеция',
          //       image: 'img/sofa3.png',
          //       price: '8300',
          //       description: 'На заказ с выбором тканей(обивки) и размером(ДxГxВ) 205x90x90см..'
          //   }
          // ]}, {suite1:[
          //   {
          //       name: 'Наполеон',
          //       image: 'img/armchair7.png',
          //       price: '1750',
          //       description: 'В производстве кресла используются только экологически чистые материалы.'
          //   },
          //   {
          //       name: 'Bergen',
          //       image: 'img/armchair8.png',
          //       price: '1800',
          //       description: 'Мягкое кресло Bergen, производство фабрики Signal (Сигнал) Польша.'
          //   },
          //   {
          //       name: 'Bruno',
          //       image: 'img/armchair9.png',
          //       price: '1900',
          //       description: 'Каркас кресла прочный и надежный.'
          //   }
          // ],suite2:[
          //   {
          //       name: 'Leonar',
          //       image: 'img/armchair10.png',
          //       price: '1750',
          //       description: 'воплощает в себе оптимальное сочетание удобства и изысканного стиля.'
          //   },
          //   {
          //       name: 'Arto',
          //       image: 'img/armchair11.png',
          //       price: '2000',
          //       description: 'Ножки кресла надежны и устойчивы, выполнен из дерева бука.'
          //   },
          //   {
          //       name: 'Твист',
          //       image: 'img/armchair12.png',
          //       price: '2300',
          //       description: 'Элегантный дизайн, удобная посадка, эргономичная спинка.'
          //   }
          // ],suite3:[
          //   {
          //       name: 'Калифорния',
          //       image: 'img/sofa4.png',
          //       price: '4750',
          //       description: 'С помощью современного механизма трансформации превращается в полноценную кровать, а также  имеет вместительный бельевой ящик..'
          //   },
          //   {
          //       name: 'Элвис',
          //       image: 'img/sofa5.png',
          //       price: '7000',
          //       description: 'Ниша, тисненый винил и вместительный бар подчеркнут ваши высокие стандарты стиля и комфорта.'
          //   },
          //   {
          //       name: 'Лаура',
          //       image: 'img/sofa6.png',
          //       price: '8300',
          //       description: 'диван для ежедневного сна с механизмом разложения Еврокнижка.'
          //   }
          // ]}/*, {suite1:[
          //   {
          //       name: 'Наполеон',
          //       image: 'img/armchair7.png',
          //       price: '1750',
          //       description: 'В производстве кресла используются только экологически чистые материалы.'
          //   },
          //   {
          //       name: 'Bergen',
          //       image: 'img/armchair8.png',
          //       price: '1800',
          //       description: 'Мягкое кресло Bergen, производство фабрики Signal (Сигнал) Польша.'
          //   },
          //   {
          //       name: 'Bruno',
          //       image: 'img/armchair9.png',
          //       price: '1900',
          //       description: 'Каркас кресла прочный и надежный.'
          //   }
          // ],suite2:[
          //   {
          //       name: 'Pottery Barn’s Cardiff Tufted Armchair',
          //       image: 'img/armchair4.png',
          //       price: '1750',
          //       description: 'Мягкое элегантное кресло.'
          //   },
          //   {
          //       name: 'VIOSKI',
          //       image: 'img/armchair5.png',
          //       price: '1800',
          //       description: 'Элегантный модернизм, Италия.'
          //   },
          //   {
          //       name: 'Eastside Digs',
          //       image: 'img/armchair6.png',
          //       price: '1900',
          //       description: 'Это кресло, как забытые песни Beatles.'
          //   }
          // ],suite3:[
          //   {
          //       name: 'Калифорния',
          //       image: 'img/sofa4.png',
          //       price: '4750',
          //       description: 'С помощью современного механизма трансформации превращается в полноценную кровать, а также  имеет вместительный бельевой ящик..'
          //   },
          //   {
          //       name: 'Элвис',
          //       image: 'img/sofa5.png',
          //       price: '7000',
          //       description: 'Ниша, тисненый винил и вместительный бар подчеркнут ваши высокие стандарты стиля и комфорта.'
          //   },
          //   {
          //       name: 'Лаура',
          //       image: 'img/sofa6.png',
          //       price: '8300',
          //       description: 'диван для ежедневного сна с механизмом разложения Еврокнижка.'
          //   }
          // ]}*/]

            var furnfac = {};
            // furnfac.getFurnitures = function(){
            //     return furns;
            // };
            // furnfac.getFurniture = function (index) {
            //     return furns[index];
            // };
            furnfac.getFurnitures = function() {
              var res = $resource(baseURL+"api/furniturewithlike/:id",{userName: '@userName', page: '@page'},{
                query: {
                  method: 'GET',
                  isArray: true,
                  transformResponse: function(data, header){
                    var jsonData = JSON.parse(data);
                    var furns = [];

                    if (jsonData.length > 0) {
                      var armchData = jsonData.filter(function(item){
                        return item.type_ == 1;
                      });
                      var sofasData = jsonData.filter(function(item){
                        return item.type_ == 2;
                      });

                      var obj = {suite1:[], suite2:[], suite3:[]};
                      var suite = [];
                      var modObjIdx = 0;

                      // armchairs
                      angular.forEach(armchData, function(item, i){
                        if (i != 0 && i % 3 == 0)
                        {
                          if (modObjIdx == 3)
                            obj.suite1 = suite;
                          else if (modObjIdx == 6)
                            obj.suite2 = suite;
                          suite = [];
                        }
                        if (i != 0 && i % 6 == 0)
                        {
                          furns.push(obj);
                          obj = {suite1:[], suite2:[], suite3:[]};
                          modObjIdx = 0;
                        }
                        suite.push(item);
                        modObjIdx++;
                      });

                      if (modObjIdx <= 3)
                        obj.suite1 = suite;
                      else if (modObjIdx <= 6)
                        obj.suite2 = suite;
                      furns.push(obj);

                      suite = [];
                      var furnCount = 0;
                      // sofas
                      angular.forEach(sofasData, function(item, i){
                        if (i != 0 && i % 3 == 0)
                        {
                          furns[i/3-1].suite3 = suite;
                          suite = [];
                          furnCount++;
                        }
                        suite.push(item);
                      });
                      furns[furnCount].suite3 = suite;
                    }

                    return furns;
                  }
                }
              })
              return res;
            }

            return furnfac;
        }])

        .factory('promoFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            var promofac = {};
            promofac.getPromotions = function() {
              return $resource(baseURL+"api/promotions/:id", null);
            }
            return promofac;
        }])

        .factory('likedFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
            var likedfac = {};
            likedfac.getLikedOnes = function() {
                return $resource(baseURL+"api/liked/:id",{userName: '@userName'},{'query':{method:'GET', isArray:true }},
                {'save':{method:'POST'}}, {'remove':{method:'DELETE'}});
            }
            return likedfac;
        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
           var feedbackfac = {};
           feedbackfac.getFeedbacks = function() {
               return $resource(baseURL+"api/feedback/:id",null,{'save':{method:'POST'}})
           }

           return feedbackfac;
        }])

        .factory('authService', ['$resource', '$q', 'localStorageService', 'baseURL', function ($resource, $q, localStorageService, baseURL) {

            var authServiceFactory = {};

            var _authentication = {
                isAuth: false,
                userName: ""
            };

            var _saveRegistration = function () {

                _logOut();

                return $resource(baseURL + 'api/account/register',null,{'save':{method: 'POST'}})
            };

            var _login = function (loginData) {

                var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

                var deferred = $q.defer();

                var API = $resource(baseURL+'token',null,{'save':{method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}}});
                API.save(data,
                function(response){
                  localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName });

                  _authentication.isAuth = true;
                  _authentication.userName = loginData.userName;

                  deferred.resolve(response);
                },
                function(err, status){
                  _logOut();
                  deferred.reject(err);
                });

                return deferred.promise;

            };

            var _logOut = function () {

                localStorageService.remove('authorizationData');

                _authentication.isAuth = false;
                _authentication.userName = "";

            };

            var _fillAuthData = function () {

                var authData = localStorageService.get('authorizationData');
                if (authData) {
                    _authentication.isAuth = true;
                    _authentication.userName = authData.userName;
                }

            }

            authServiceFactory.saveRegistration = _saveRegistration;
            authServiceFactory.login = _login;
            authServiceFactory.logOut = _logOut;
            authServiceFactory.fillAuthData = _fillAuthData;
            authServiceFactory.authentication = _authentication;

            return authServiceFactory;
        }])

        .factory('authInterceptorService', ['$q', '$location', 'localStorageService', function ($q, $location, localStorageService) {

            var authInterceptorServiceFactory = {};

            var _request = function (config) {

                config.headers = config.headers || {};

                var authData = localStorageService.get('authorizationData');
                if (authData) {
                    config.headers.Authorization = 'Bearer ' + authData.token;
                }

                return config;
            }

            var _responseError = function (rejection) {
                // if (rejection.status === 401) {
                //     $location.path('/login');
                // }
                return $q.reject(rejection);
            }

            authInterceptorServiceFactory.request = _request;
            authInterceptorServiceFactory.responseError = _responseError;

            return authInterceptorServiceFactory;
        }])
;
