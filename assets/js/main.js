const app = new Vue({
    el: '#root',
    data: {
        counter: 0,
        countries: [
            {
                country: 'Svezia',
                countryImg: './img/01.jpg',
                countryDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                country: 'Svizzera',
                countryImg: './img/02.jpg',
                countryDescription: 'Lorem ipsum',
            },
            {
                country: 'Gran Bretagna',
                countryImg: './img/03.jpg',
                countryDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                country: 'Germania',
                countryImg: './img/04.jpg',
                countryDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                country: 'Paradise',
                countryImg: './img/05.jpg',
                countryDescription: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ]

    },
    method: {
        cycleImg() {
            setInterval(() => {
                return this.counter < 4 ? this.counter++ : this.counter = 0
            }, 3000);
        }

    }


})



