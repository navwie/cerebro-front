<template>

</template>

<script>
export default {
    name: "Reject",
    data() {
        return {

        };
    },
    mounted() {
        let e = document.createElement('div');
        e.id = 'clcktt';
        e.classList.add('d-none');
        document.body.appendChild(e);
        let ca = document.createElement('script');
        ca.type = 'text/javascript';
        ca.src = '/js/denied.js';
        let sc = document.getElementById('clcktt');
        sc.parentNode.insertBefore(ca, sc);
        (function () {
            ca = document.createElement('script');
            ca.type = 'text/javascript';
            ca.async = true;
            ca.src = '//app.revpie.com/api/js/extractor.js';
            sc = document.getElementById('clcktt');
            sc.parentNode.insertBefore(ca, sc);
        })();
        let interval = setInterval(() => {
            if (document.getElementsByClassName("content-wrapper").length || document.getElementsByClassName("main-content-wrapper").length || document.getElementsByClassName("attention").length) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                document.getElementById('app').classList.add('d-none');
                document.getElementById('clcktt').classList.remove('d-none');
                clearInterval(interval);
            }
        }, 100);
    }
}
</script>
