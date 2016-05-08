'use strict';

angular.module('armchairApp')
        .factory('furnitureFactory', function() {
          var furns = { data:[{suite1:[
            {
                name: 'Ekero',
                image: 'img/armchair1.png',
                price: '1750',
                description: 'Мягкое кресло сделано для Ikea, Швеция.'
            },
            {
                name: 'The perfect country armchair',
                image: 'img/armchair2.png',
                price: '1800',
                description: 'Натуральное льняное кресло.'
            },
            {
                name: 'Natuzzi Living',
                image: 'img/armchair3.png',
                price: '1900',
                description: 'Новый модный дизайн, Италия.'
            }
          ],suite2:[
            {
                name: 'Pottery Barn’s Cardiff Tufted Armchair',
                image: 'img/armchair4.png',
                price: '1750',
                description: 'Мягкое элегантное кресло.'
            },
            {
                name: 'VIOSKI',
                image: 'img/armchair5.png',
                price: '1800',
                description: 'Элегантный модернизм, Италия.'
            },
            {
                name: 'Eastside Digs',
                image: 'img/armchair6.png',
                price: '1900',
                description: 'Это кресло, как забытые песни Beatles.'
            }
          ],suite3:[
            {
                name: 'Магнолия',
                image: 'img/sofa1.png',
                price: '4750',
                description: 'Каркас выполнен из натурального дерева и фанеры.'
            },
            {
                name: 'Гамма',
                image: 'img/sofa2.png',
                price: '7000',
                description: 'Механизм раскладки: французская раскладушка, седафлекс.'
            },
            {
                name: 'Венеция',
                image: 'img/sofa3.png',
                price: '8300',
                description: 'На заказ с выбором тканей(обивки) и размером(ДxГxВ) 205x90x90см..'
            }
          ]}, {suite1:[
            {
                name: 'Наполеон',
                image: 'img/armchair7.png',
                price: '1750',
                description: 'В производстве кресла используются только экологически чистые материалы.'
            },
            {
                name: 'Bergen',
                image: 'img/armchair8.png',
                price: '1800',
                description: 'Мягкое кресло Bergen, производство фабрики Signal (Сигнал) Польша.'
            },
            {
                name: 'Bruno',
                image: 'img/armchair9.png',
                price: '1900',
                description: 'Каркас кресла прочный и надежный.'
            }
          ],suite2:[
            {
                name: 'Leonar',
                image: 'img/armchair10.png',
                price: '1750',
                description: 'воплощает в себе оптимальное сочетание удобства и изысканного стиля.'
            },
            {
                name: 'Arto',
                image: 'img/armchair11.png',
                price: '2000',
                description: 'Ножки кресла надежны и устойчивы, выполнен из дерева бука.'
            },
            {
                name: 'Твист',
                image: 'img/armchair12.png',
                price: '2300',
                description: 'Элегантный дизайн, удобная посадка, эргономичная спинка.'
            }
          ],suite3:[
            {
                name: 'Калифорния',
                image: 'img/sofa4.png',
                price: '4750',
                description: 'С помощью современного механизма трансформации превращается в полноценную кровать, а также  имеет вместительный бельевой ящик..'
            },
            {
                name: 'Элвис',
                image: 'img/sofa5.png',
                price: '7000',
                description: 'Ниша, тисненый винил и вместительный бар подчеркнут ваши высокие стандарты стиля и комфорта.'
            },
            {
                name: 'Лаура',
                image: 'img/sofa6.png',
                price: '8300',
                description: 'диван для ежедневного сна с механизмом разложения Еврокнижка.'
            }
          ]}/*, {suite1:[
            {
                name: 'Наполеон',
                image: 'img/armchair7.png',
                price: '1750',
                description: 'В производстве кресла используются только экологически чистые материалы.'
            },
            {
                name: 'Bergen',
                image: 'img/armchair8.png',
                price: '1800',
                description: 'Мягкое кресло Bergen, производство фабрики Signal (Сигнал) Польша.'
            },
            {
                name: 'Bruno',
                image: 'img/armchair9.png',
                price: '1900',
                description: 'Каркас кресла прочный и надежный.'
            }
          ],suite2:[
            {
                name: 'Pottery Barn’s Cardiff Tufted Armchair',
                image: 'img/armchair4.png',
                price: '1750',
                description: 'Мягкое элегантное кресло.'
            },
            {
                name: 'VIOSKI',
                image: 'img/armchair5.png',
                price: '1800',
                description: 'Элегантный модернизм, Италия.'
            },
            {
                name: 'Eastside Digs',
                image: 'img/armchair6.png',
                price: '1900',
                description: 'Это кресло, как забытые песни Beatles.'
            }
          ],suite3:[
            {
                name: 'Калифорния',
                image: 'img/sofa4.png',
                price: '4750',
                description: 'С помощью современного механизма трансформации превращается в полноценную кровать, а также  имеет вместительный бельевой ящик..'
            },
            {
                name: 'Элвис',
                image: 'img/sofa5.png',
                price: '7000',
                description: 'Ниша, тисненый винил и вместительный бар подчеркнут ваши высокие стандарты стиля и комфорта.'
            },
            {
                name: 'Лаура',
                image: 'img/sofa6.png',
                price: '8300',
                description: 'диван для ежедневного сна с механизмом разложения Еврокнижка.'
            }
          ]}*/]}

            var furnfac = {};
            furnfac.getFurnitures = function(){
                return furns;
            };
            furnfac.getFurniture = function (index) {
                return furns[index];
            };
/*            furnfac.getFurnitures2 = function () {
                return furns2;
            };
            furnfac.getFurniture2 = function (index) {
                return furns2[index];
            };
            furnfac.getFurnitures3 = function () {
                return furns3;
            };
            furnfac.getFurniture3 = function (index) {
                return furns3[index];
            };*/
            return furnfac;
        })

        .factory('likedFactory', function () {
            var liked = [
            {
                name: 'Ekero',
                image: 'img/armchair1.png',
                price: '1750',
                description: 'Мягкое кресло сделано для Ikea, Швеция.'
            },
            {
                name: 'Natuzzi Living',
                image: 'img/armchair3.png',
                price: '1900',
                description: 'Новый модный дизайн, Италия.'
            },
            {
                name: 'Венеция',
                image: 'img/sofa3.png',
                price: '8300',
                description: 'На заказ с выбором тканей(обивки) и размером(ДxГxВ) 205x90x90см..'
            }];

            var likedfac = {};
            likedfac.getLikedOnes = function() {
                return liked;
            }
            return likedfac;
        });
