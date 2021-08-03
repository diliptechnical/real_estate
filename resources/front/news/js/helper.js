const helper = {
    data() {
        return {
            URL_ROOT: process.env.MIX_APP_URL,
            PATH_ASSETS: process.env.MIX_APP_URL+'front/news/assets/',
            user: localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null,
        }
    },
    mounted() {},
    methods: {
        ago(date) {
            var mydate = new Date(date);
            var seconds = Math.floor((new Date() - mydate) / 1000);

            var interval = seconds / 31536000;

            if (interval > 1) {
                return Math.floor(interval) + " years";
            }
            interval = seconds / 2592000;
            if (interval > 1) {
                return Math.floor(interval) + " months";
            }
            interval = seconds / 86400;
            if (interval > 1) {
                return Math.floor(interval) + " days";
            }
            interval = seconds / 3600;
            if (interval > 1) {
                return Math.floor(interval) + " hours";
            }
            interval = seconds / 60;
            if (interval > 1) {
                return Math.floor(interval) + " minutes";
            }
            return Math.floor(seconds) + " seconds";
        },
        logout () {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            localStorage.removeItem('latitude')
            localStorage.removeItem('longitude')
            this.$router.go('/')
            localStorage.removeItem('isAdmin')
        }
    }
}
export default helper
