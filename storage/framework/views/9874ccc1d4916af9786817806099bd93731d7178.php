<?php $__env->startSection('content'); ?>
<div class="table-container">

<div class="card">
    <div class="card-header">
       User List
    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        Name
                    </th>
                    <td>
                        <?php echo e($user->name); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        Email
                    </th>
                    <td>
                        <?php echo e($user->email); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                       Mobile
                    </th>
                    <td>
                        <?php echo e($user->mobile); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        About
                    </th>
                    <td>
                       <?php echo e($user->aboutme); ?>

                    </td>
                </tr>
                <tr>
                    <th> Created at </th>
                    <td> <?php echo e($user->created_at); ?> </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/users/show.blade.php ENDPATH**/ ?>