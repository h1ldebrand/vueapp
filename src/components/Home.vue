<template>

    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                    <v-carousel-item
                        v-for="ad in ads"
                        :key="ad.id"
                        :src="ad.imageSrc"
                    >
                        <div class="car-link">
                            <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
                        </div>
                    </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="ad in ads"
                        :key="ad.id"
                >
                    <v-card>
                        <v-img
                                :src="ad.imageSrc"
                                aspect-ratio="2.75"
                                height="200px"
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ ad.title }}</h3>
                                <div>{{ ad.description }}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                            <v-btn raiser class="primary" >button</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
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
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .car-link{
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50%, 0);
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        padding: 5px 15px;
    }
</style>