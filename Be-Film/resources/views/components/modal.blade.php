@props([
    'id',
    'modalSize' => '',
    'title',
    'route' => '',
    'method' => 'POST',
    'primaryBtnClass' => 'btn-primary',
    'secondaryBtnClass' => 'btn-outline-secondary',
    'primaryBtnTitle' => 'Submit',
    'secondaryBtnTitle' => 'Cancel',
])

<div class="modal fade" id="{{ $id }}" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog {{ $modalSize }} modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{ $title }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ $route }}" method="post" enctype="multipart/form-data">
                @csrf
                @method($method)
                <div class="modal-body">
                    {{ $slot }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn {{ $secondaryBtnClass }}" data-bs-dismiss="modal">
                        {{ $secondaryBtnTitle }}
                    </button>
                    <button type="submit" class="btn {{ $primaryBtnClass }}">
                        {{ $primaryBtnTitle }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
