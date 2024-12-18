@extends('layout.main')

@section('content')
    <div class="row">
        <div class="col-sm-6 col-xl-6">
            <div class="card overflow-hidden rounded-2">
                <div class="card-body pt-3 px-4">
                    <div class="row d-flex align-items-center justify-content-between">
                        <div class="col col-lg-7 me-4">
                            <h6 class="fw-semibold fs-4">Total Films</h6>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="fw-semibold fs-4 mb-0">{{ $film }}</h6>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <a href="javascript:void(0)"
                                class="bg-primary rounded-circle p-3 text-white d-inline-flex end-0 mb-n3 "
                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i
                                    class="ti ti-article fs-5"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-xl-6">
            <div class="card overflow-hidden rounded-2">
                <div class="card-body pt-3 px-4 ">
                    <div class="row d-flex align-items-center justify-content-between">
                        <div class="col col-lg-7 me-4">
                            <h6 class="fw-semibold fs-4">Total Kategori</h6>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="fw-semibold fs-4 mb-0">{{ $kategori }}</h6>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <a href="javascript:void(0)"
                                class="bg-primary rounded-circle p-3 text-white d-inline-flex end-0 mb-n3 "
                                data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i
                                    class="ti ti-article fs-5"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
