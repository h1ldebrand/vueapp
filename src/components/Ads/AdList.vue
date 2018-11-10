<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 ms6 offset-sm3>
                <h1 class="text--secondary mb-3">AdList</h1>

                <v-card
                        class="elevation-10 mb-5"
                        v-for="ad in ads"
                        :key="ad.id"
                >
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media
                                :src="ad.imageSrc"
                                height="175px"
                            ></v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ ad.title }}</h2>
                                <p>{{ ad.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    class="info"
                                    :to="'/ad/' + ad.id"
                                >Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
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
                        title: 'Third ad',
                        description: 'Hello i am description',
                        promo: true,
                        imageSrc: 'https://images.unsplash.com/photo-1528569937393-ee892b976859?ixlib=rb-0.3.5&s=d2da56adefd2e4c7a46990b6dfa60d3f&auto=format&fit=crop&w=1350&q=80',
                        id: '125'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>