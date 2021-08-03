<?php $__env->startSection('content'); ?>

<div class="table-container">
<div class="card">
    <div class="card-header">
        subscription List
        <!-- <div class="" style="float: right;">
           <select class="form-control" onchange="subscriptionData()" id="typeValue">
               <option>Select Type</option>
               <option value="deposit">Deposit</option>
               <option value="withdraw">Withdraw</option>
           </select>
            </a>
        </div> -->
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
                            User
                        </th>
                        <th>
                            Start Date
                        </th>
                        <th>
                            End Date
                        </th>

                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $subscription; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $permission): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($permission->id); ?>">
                            <td>
                                <?php echo e($permission->id ?? ''); ?>


                            </td>
                            <td>
                                <?php echo e($permission->user['name'] ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($permission->start_date ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($permission->end_date ?? ''); ?>

                            </td>

                            <td>
                                    <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.subscription.show', $permission->id)); ?>">
                                        View
                                    </a>

                                    <button class="btn btn-xs btn-danger" onclick="deletethis('subscriptions',<?php echo e($permission->id); ?>)">
                                Delete
                                </button>
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
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/subscription/index.blade.php ENDPATH**/ ?>