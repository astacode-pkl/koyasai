<template>
    <div>
        <!-- ========== HEADER -->
        <header
            ref="headerRef"
            class="fixed top-0 border-b bg-white border-gray-200 flex flex-wrap md:justify-start md:flex-nowrap z-50 h-16 lg:h-20 w-full transition-all duration-300 rounded-b-xl">
            <nav
                class="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 py-auto sm:px-6 lg:px-8 py-2">
                <!-- Logo w/ Collapse Button -->
                <div class="flex items-center justify-between">
                    <Nuxt-link class="flex gap-3" to="#" aria-label="Brand">
                        <img src="/assets/img/logo.png" alt="logo" class="w-14">
                        <img src="/assets/img/nama.png" alt="nama" class="w-24 h-auto py-3">
                    </Nuxt-link>
                    <!-- Collapse Button -->
                    <div class="md:hidden">
                        <button type="button"
                            class="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            id="hs-header-classic-collapse" aria-expanded="false" aria-controls="hs-header-classic"
                            aria-label="Toggle navigation" data-hs-collapse="#hs-header-classic">
                            <svg class="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg class="hs-collapse-open:block shrink-0 hidden size-4"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span class="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                    <!-- End Collapse Button -->
                </div>
                <!-- End Logo w/ Collapse Button -->
                <!-- Collapse -->
                <div id="hs-header-classic"
                    class="hs-collapse hidden overflow-hidden bg-white w-full md:bg-transparent rounded-lg px-10 pt-3 mt-5 md:-mt-2 lg:mt-0 lg:pt-0 lg:px-0 transition-all duration-300 basis-full grow md:block"
                    aria-labelledby="hs-header-classic-collapse">
                    <div
                        class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <div
                            class="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                            <Nuxt-link
                                class="p-2 flex items-center text-sm  hover:text-primary focus:outline-none focus:text-primary"
                                to="/" aria-current="page">
                                Home
                            </Nuxt-link>
                            <Nuxt-link
                                class="p-2 flex items-center text-sm text-gray-800 hover:text-primary focus:outline-none focus:text-primary"
                                to="/" >
                                About
                            </Nuxt-link>
                            <Nuxt-link
                                class="p-2 flex items-center text-sm text-gray-800 hover:text-primary focus:outline-none focus:text-primary"
                                to="/" >
                                Catalog
                            </Nuxt-link>
                            <Nuxt-link
                                class="p-2 flex items-center text-sm text-gray-800 hover:text-primary focus:outline-none focus:text-primary"
                                to="/" >
                                Gallery
                            </Nuxt-link>
                            <Nuxt-link
                                class="p-2 flex items-center text-sm text-gray-800 hover:text-primary focus:outline-none focus:text-primary"
                                to="/news" >
                                News
                            </Nuxt-link>
                            <Nuxt-link
                                class="p-2 flex items-center text-sm text-gray-800 hover:text-primary focus:outline-none focus:text-primary"
                                to="/" >
                                Contact
                            </Nuxt-link>
                        </div>
                    </div>
                </div>
                <!-- End Collapse -->
            </nav>
        </header>
        <!-- ========== END HEADER ========== -->
    </div>
</template>