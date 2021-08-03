<?php $__env->startSection('content'); ?>
   
<div class="table-container">
<div class="card">
    <div class="card-header">
        Transaction List   
        <div class="" style="float: right;">
           <select class="form-control" onchange="transactionData()" id="typeValue">
               <option>Select Type</option>
               <option value="deposit">Deposit</option>
               <option value="withdraw">Withdraw</option>
           </select>
            </a>
        </div>
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">
                            Id
                        </th>
                        <th>
                            Payment Id
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            amount
                        </th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $transaction; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $permission): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($permission->id); ?>">
                            <td>
                                <?php echo e($permission->id ?? ''); ?>


                            </td>
                            <td>
                                <?php echo e($permission->payable_id ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($permission->type ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($permission->amount ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($permission->created_at ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($permission->updated_at ?? ''); ?>

                            </td>
                            <td>
                                    <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.transaction.show', $permission->id)); ?>">
                                        View
                                    </a>

                                    <form action="<?php echo e(route('admin.transaction.destroy', $permission->id)); ?>" method="POST" onsubmit="return confirm('<?php echo e(trans('Are You Sure')); ?>');" style="display: inline-block;">
                                        <input type="hidden" name="_method" value="DELETE">
                                        <input type="hidden" name="_token" value="<?php echo e(csrf_token()); ?>">
                                        <input type="submit" class="btn btn-xs btn-danger" value="Delete">
                                    </form>
                            </td>

                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/transaction/index.blade.php ENDPATH**/ ?>