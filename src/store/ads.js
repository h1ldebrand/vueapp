export default {
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'Hello i am description',
                promo: false,
                imageSrc: 'https://images.unsplash.com/photo-1497982568831-4391084ca8fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d05d069de387d8cd23ade5327004f6c3&auto=format&fit=crop&w=1350&q=80',
                id: '123'
            },
            {
                title: 'Second ad',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://images.unsplash.com/photo-1525123900445-13ac95115c39?ixlib=rb-0.3.5&s=2481d452fad842576972648ab46af4c0&auto=format&fit=crop&w=1301&q=80',
                id: '124'
            },
            {
                title: 'Third ad',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://images.unsplash.com/photo-1528569937393-ee892b976859?ixlib=rb-0.3.5&s=d2da56adefd2e4c7a46990b6dfa60d3f&auto=format&fit=crop&w=1350&q=80',
                id: '125'
            },
            {
                title: 'Fourth ad',
                description: 'Hello i am description',
                promo: false,
                imageSrc: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f84d9f5db471ebb630d89f0245877c0&auto=format&fit=crop&w=1267&q=80',
                id: '126'
            }
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = Math.floor(Math.random() * 100) + ''
            commit('createAd', payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}
