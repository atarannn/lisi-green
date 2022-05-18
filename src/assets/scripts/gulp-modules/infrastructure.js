// Google map start
function func() {
    const script = document.createElement('script');
    let key = '';
    if (window.location.href.match(/localhost/)) key = '';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
    document.getElementsByTagName('head')[0].appendChild(script);
}
// setTimeout(func, 1000);
const maps = document.querySelectorAll('.map');
const options = {
    rootMargin: '0px',
    threshold: 0.1,
};

maps.forEach(image => {
    const callback = (entries, observer) => {
        /* Content excerpted, show below */
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                observer.unobserve(image);
                func();
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    const target = image;
    observer.observe(target);
});
// eslint-disable-next-line no-unused-vars
function initMap() {
    const gmarkers1 = [];
    const center = {
        lat: 41.7382777,
        lng: 44.7131926,
    };
    const choosedCategories = new Set();
    choosedCategories.add('main');
    const filterItems = document.querySelectorAll('[data-marker]');
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        language: 'en',
        styles: getMapTheme(),
    });
    const filterMarkers = function(category, categoriesArray) {
        gmarkers1.forEach(el => {
            if (categoriesArray.has(el.category) || categoriesArray.size === 1) {
                el.setMap(map);
                el.setAnimation(google.maps.Animation.DROP);
            } else {
                el.setMap(null);
            }
        });
    };
    filterItems.forEach(item => {
        item.addEventListener('click', evt => {
            evt.stopImmediatePropagation();
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                choosedCategories.add(item.dataset.category);
            } else {
                choosedCategories.delete(item.dataset.category);
            }
            filterMarkers('main', choosedCategories);
        });
    });
    var baseFolder = './assets/images/infrastructure/markers/';
    var defaultMarkerSize = new google.maps.Size(64, 80);
    var buildLogoSize = new google.maps.Size(80, 100);
    if (document.documentElement.clientWidth < 1600) {
        var defaultMarkerSize = new google.maps.Size(46, 57);
        var buildLogoSize = new google.maps.Size(57, 71);
    }
    const markersAdresses = {
        lisi: `${baseFolder}1.svg`,
        schools: `${baseFolder}2.svg`,
        kindergartens: `${baseFolder}3.svg`,
        medicine: `${baseFolder}4.svg`,
        shopping: `${baseFolder}5.svg`,
        cafes: `${baseFolder}6.svg`,
        relax: `${baseFolder}7.svg`,
        sports: `${baseFolder}8.svg`,
    };
    const markersData = [
        {
            type: 'lisi',
            icon: { url: markersAdresses.lisi, scaledSize: buildLogoSize},
            position: { lat: 41.7382777, lng: 44.7131926 },
        },
        {
            type: 'schools',
            icon: { url: markersAdresses.schools, scaledSize: defaultMarkerSize},
            position: { lat: 41.73931, lng: 44.7125913 },
        },
        {
            type: 'kindergartens',
            icon: { url: markersAdresses.kindergartens, scaledSize: defaultMarkerSize},
            position: { lat: 41.738878, lng: 44.7121083 },
        },
        {
            type: 'medicine',
            icon: { url: markersAdresses.medicine, scaledSize: defaultMarkerSize},
            position: { lat: 41.738878, lng: 44.7121083 },
        },
        {
            type: 'shopping',
            icon: { url: markersAdresses.shopping, scaledSize: defaultMarkerSize},
            position: { lat: 41.737285, lng: 44.7132783 },
        },
        {
            type: 'cafes',
            icon: { url: markersAdresses.cafes, scaledSize: defaultMarkerSize},
            position: { lat: 41.737469, lng: 44.7112293 },
        },
        {
            type: 'relax',
            icon: { url: markersAdresses.relax, scaledSize: defaultMarkerSize},
            position: { lat: 41.738302, lng: 44.7104143 },
        },
        {
            type: 'sports',
            icon: { url: markersAdresses.sports, scaledSize: defaultMarkerSize},
            position: { lat: 41.7388829, lng: 44.7146424 },
        },
    ];
    /* beautify preserve:end */
    const infowindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 200,
    });
    markersData.forEach(marker => {
        const category = marker.type;
        const mapMarker = new google.maps.Marker({
            map,
            category,
            zIndex: marker.zIndex || 1,
            icon: marker.icon,
            cursor: 'grap', // курсор при наведении на макркер жк
            position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
        });

        mapMarker.name = marker.type;
        gmarkers1.push(mapMarker);
    });
}

window.addEventListener("load", () => {
    const legend = document.querySelector("[data-accordeon]");
    const legendTitle = document.querySelector(".infrastructure-markers__btn");
    const openedMarker = document.querySelector(".infrastructure-markers__btn svg");
    const markersHeight = getComputedStyle(
        document.querySelector(".infrastructure-markers__ul")
    ).height;
    if (document.documentElement.clientWidth < 575) {
        legend.classList.remove("opened");
        gsap.timeline().fromTo(legend, { y: 0 }, { y: markersHeight });
        gsap.timeline().fromTo(legendTitle, {y: 0}, {y: markersHeight});
    }

    legendTitle.addEventListener("click", () => {
        const legendWrapper = document.querySelector('.infastructure-markers__wrapper');
        legend.classList.toggle('opened');
        openedMarker.classList.toggle('rotate');
        if (legend.classList.contains("opened")) {
            legendWrapper.classList.remove('closed');
            gsap.timeline().fromTo(legend, { y: markersHeight }, { y: 0 });
            gsap.timeline().fromTo(legendTitle, {y: markersHeight}, {y: 0});
        } else {
            legendWrapper.classList.add('closed')
            gsap.timeline().fromTo(legend, { y: 0 }, { y: markersHeight });
            gsap.timeline().fromTo(legendTitle, {y: 0}, {y: markersHeight});
        }
    });
});

function getMapTheme() {
    return [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "hue": "#009fff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dce4e7"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.attraction",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.government",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ccddcb"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d8dce0"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c2cfd6"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ];
}
