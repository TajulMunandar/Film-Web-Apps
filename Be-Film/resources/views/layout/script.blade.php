<script src="{{ asset('assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('assets/libs/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('assets/js/summernote-bs5.min.js') }}"></script>
<script src="{{ asset('assets/js/sidebarmenu.js') }}"></script>
<script src="{{ asset('assets/js/app.min.js') }}"></script>
<script src="{{ asset('assets/libs/simplebar/dist/simplebar.js') }}"></script>
<script src="{{ asset('assets/libs/apexcharts/dist/apexcharts.min.js') }}"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="{{ asset('assets/js/dashboard.js') }}"></script>

<script>
    $(document).ready(function() {
        $('#myTable').DataTable({
            "language": {
                "search": "",
                "searchPlaceholder": "Search...",
                "decimal": ",",
                "thousands": ".",
            },
        });

        $('.dataTables_filter input[type="search"]').css({
            "marginBottom": "10px"
        });
    });
</script>

<script>
    AOS.init();
</script>
