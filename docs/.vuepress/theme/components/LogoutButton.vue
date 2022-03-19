<template>
    <button @click="logout()">Log Out</button>
</template>

<script>
import auth from "../../auth";
export default {
    props : ['client'],
    methods : {
        async logout () {

            await auth.logout(this.client);
        }
    }
}
</script>