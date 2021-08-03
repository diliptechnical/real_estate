<?php $__env->startSection('content'); ?>
   
<div class="table-container">
<div class="card">
    <div class="card-header">
        transaction List
    </div>

    <div class="card-body">
        <table class="table table-bordered table-striped">
            <tbody>
                <tr>
                    <th>
                        Payable Id
                    </th>
                    <td>
                        <?php echo e($transaction->payable_id); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        Amount</th>
                    <td>
                        <?php echo e($transaction->amount); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        Type
                    </th>
                    <td>
                        <?php echo e($transaction->type); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        Wallet Id</th>
                    <td>
                        <?php echo e($transaction->wallet_id); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        Create At
                    </th>
                    <td>
                        <?php echo e($transaction->created_at); ?>

                    </td>
                </tr>
                <tr>
                    <th>
                        Update At
                    </th>
                    <td>
                        <?php echo e($transaction->updated_at); ?>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/transaction/show.blade.php ENDPATH**/ ?>