<aside class="left-sidebar" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
    <!-- Sidebar scroll-->
    <div>
        <div class="brand-logo d-flex align-items-center justify-content-between">
            <a href="/" class="text-nowrap logo-img mt-3">
                <img src="{{ asset('assets/images/logo2.png') }}" width="150" alt="" />
            </a>
            <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                <i class="ti ti-x fs-8"></i>
            </div>
        </div>
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
                <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">Home</span>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link {{ request()->is('dashboard') ? 'active' : '' }}" href="/dashboard"
                        aria-expanded="false">
                        <span>
                            <i class="ti ti-layout-dashboard"></i>
                        </span>
                        <span class="hide-menu">Dashboard</span>
                    </a>
                </li>

                <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">MENU</span>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link {{ request()->is('dashboard/film*') ? 'active' : '' }}"
                        href="/dashboard/film" aria-expanded="false">
                        <span>
                            <i class="ti ti-article"></i>
                        </span>
                        <span class="hide-menu">Film</span>
                    </a>
                </li>

                <li class="nav-small-cap">
                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                    <span class="hide-menu">MASTER DATA</span>
                </li>


                <li class="sidebar-item">
                    <a class="sidebar-link {{ request()->is('dashboard/kategori') ? 'active' : '' }}"
                        href="/dashboard/kategori" aria-expanded="false">
                        <span>
                            <i class="ti ti-menu"></i>
                        </span>
                        <span class="hide-menu">Kategori</span>
                    </a>
                </li>
                <!-- Users management accessible only by Admin -->
                <li class="sidebar-item">
                    <a class="sidebar-link {{ request()->is('dashboard/users') ? 'active' : '' }}"
                        href="/dashboard/users" aria-expanded="false">
                        <span>
                            <i class="ti ti-user"></i>
                        </span>
                        <span class="hide-menu">User</span>
                    </a>
                </li>

            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
</aside>
