@extends('layout.main')

@section('content')
    <!-- Modern Breadcrumb -->
    <div class="row mt-3">
        <div class="col">
            @if (session()->has('success'))
                <div class="alert alert-primary alert-dismissible fade show" role="alert">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif

            @if (session()->has('error'))
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {{ session('error') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 d-flex align-items-stretch">
            <div class="card w-100">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title font-weight-bold text-primary mb-4">
                            <i class="ti ti-article"></i> Film Management
                        </h5>

                    </div>

                    <!-- Table Section -->
                    <div class="table-responsive mt-4">
                        <table id="myTable" class="table table-bordered">
                            <thead>
                                <tr class="text-center">
                                    <th>No</th>
                                    <th>Judul</th>
                                    <th>Slug</th>
                                    <th>Thumbnail</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($films as $film)
                                    <tr>
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $film->judul }}</td>
                                        <td>{{ $film->slug }}</td>
                                        <td><img src="{{ $film->thumbnail }}" alt="" width="100"></td>
                                        <td>
                                            <button class="btn btn-info btn-sm" data-bs-toggle="modal"
                                                data-bs-target="#viewUserModal1{{ $loop->iteration }}" title="View">
                                                <i class="fas fa-eye"></i>
                                            </button>
                                        </td>
                                    </tr>

                                    <!-- View User Modal -->
                                    <x-modal id="viewUserModal1{{ $loop->iteration }}" title="Detail Film"
                                        secondaryBtnClass="btn-secondary" primaryBtnClass="d-none"
                                        secondaryBtnTitle="Close">
                                        <video controls style="width: 100%; height: auto;">
                                            <source src="{{ $film->details->link }}" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <h2>{{ $film->judul }}</h2>
                                        <strong>Deskripsi:</strong>
                                        <p>{{ $film->details->deskripsi }}</p>

                                        <p><strong>Durasi:</strong> {{ $film->details->durasi }} menit</p>

                                        <p> <strong>Tahun Rilis:</strong>{{ $film->details->tahun_rilis }}</p>

                                        <p> <strong>Rating:</strong>{{ $film->rating }}</p>
                                    </x-modal>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                    <!-- End Table Section -->
                </div>
            </div>
        </div>
    </div>
@endsection
