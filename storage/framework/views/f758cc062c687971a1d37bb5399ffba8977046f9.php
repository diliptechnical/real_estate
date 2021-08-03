<?php $__env->startSection('content'); ?>
<div class="table-container">

<div class="card">
    <div class="card-header">
        Users List
        <!-- <div class="" style="float: right;">
            <a class="btn btn-success" href="<?php echo e(route("admin.contact.create")); ?>">
                Add New Service
            </a>
        </div> -->
    </div>

    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">
                            User Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Mobile
                        </th>
                        <!-- <th>Status</th> -->
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($user->id); ?>">
                            <td>
                                <?php echo e($user->id ?? ''); ?>


                            </td>
                            <td>
                                <?php echo e($user->name ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($user->email ?? ''); ?>

                            </td>
                            <td>
                                <?php echo e($user->mobile ?? ''); ?>

                            </td>

                            <!-- <td> <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('amenities','status',0,<?php echo e($user->id); ?>)" <?php echo e($user->status==1 ? 'checked' : ''); ?> >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label></td> -->
                            <td>
                                    <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.contact.show', $user->id)); ?>">
                                       View
                                    </a>
                                    <!-- <a class="btn btn-xs btn-info" href="<?php echo e(route('admin.contact.edit', $user->id)); ?>">
                                        Edit
                                    </a> -->
                                    <button class="btn btn-xs btn-danger" onclick="deletethis('mss_contact',<?php echo e($user->id); ?>)">
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
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/Contact/index.blade.php ENDPATH**/ ?>