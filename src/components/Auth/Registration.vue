<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Registration</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                    prepend-icon="person"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    :rules="emailRules"
                                    v-model="email"
                            ></v-text-field>
                            <v-text-field
                                    id="password"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    :counter="6"
                                    :rules="passwordRules"
                                    v-model="password"
                            ></v-text-field>
                            <v-text-field
                                    id="confirm-password"
                                    prepend-icon="lock"
                                    name="confirm-password"
                                    label="Confirm password"
                                    type="password"
                                    :counter="6"
                                    :rules="confirmPasswordRules"
                                    v-model="confirmPassword"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                @click="onSubmit"
                                :disabled="!valid || loading"
                        >Create account!</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: function () {
            return {
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be less than 6 characters'
                ],
                confirmPasswordRules: [
                    v => !!v || 'E-mail is required',
                    v => v === this.password || 'Password should be match'
                ]
            }
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            }
        },
        methods: {
            onSubmit () {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }

                    this.$store.dispatch('registerUser', user)
                        .then(() => {
                            this.$router.push('/')
                        })
                        .catch(() => {})
                }
            }
        }
    }
</script>

<style scoped>

</style>
