<?php $__env->startSection('content'); ?>

<div class="table-container">
<div class="card">
    <div class="card-header">
        subscription List
    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        User
                    </th>
                    <td>
                        <?php echo e($subscription->user['name']); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        Start Date</th>
                    <td>
                        <?php echo e($subscription->start_date); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        End Date
                    </th>
                    <td>
                        <?php echo e($subscription->end_date); ?>

                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/subscription/show.blade.php ENDPATH**/ ?>