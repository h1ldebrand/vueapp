<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form ref="form" v-model="valid" validation>
                    <v-text-field
                            name="title"
                            label="Ad title"
                            type="text"
                            :rules="[v => !!v || 'Title is required']"
                            v-model="title"
                            required
                    ></v-text-field>
                    <v-text-field
                            name="description"
                            label="Ad description"
                            type="text"
                            :rules="[v => !!v || 'Title is required']"
                            v-model="description"
                            multi-line
                    ></v-text-field>
                </v-form>
                <v-layout row mb3>
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img src="" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                label="Add to prome?"
                                v-model="promo"
                                color="primary"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                class="success"
                                @click="createAd"
                                :disabled="!valid"
                        >Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: function () {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false,
            }
        },
        methods: {
            createAd () {
                if (this.$refs.form.validate()){
                    //logic
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo
                    }

                    console.log(ad);
                }
            }
        }
    }
</script>

<style scoped>

</style>