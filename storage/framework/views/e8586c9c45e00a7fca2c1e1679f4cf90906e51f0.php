<?php $__env->startSection('content'); ?>
<div class="table-container">

    <div class="card">
        <div class="card-header">
            Show Service
        </div>

        <div class="card-body">
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <th>
                            Heading
                        </th>
                        <td>
                            <?php echo e($category->name); ?>

                        </td>
                    </tr>

                    <tr>
                        <th>
                            Icon
                        </th>
                        <td>
                        <img src="<?php echo e(config('app.url').'uploads/icons/'.$category->value); ?>" width="50">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/amenities/show.blade.php ENDPATH**/ ?>