<?php $__env->startSection('content'); ?>
<div class="table-container">
<div class="card">
    <div class="card-header">
        Page List
        <div class="" style="float: right;">
            <a class="btn btn-success" href="<?php echo e(route("admin.amenities.create")); ?>">
                Add New Amenities
            </a>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">

                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Image
                        </th>

                        <th>
                            Status
                        </th>
                        <th>
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $category; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr data-entry-id="<?php echo e($category->id); ?>">
                            <td>
<?php echo e($key+1); ?>

                            </td>
                            <td>
                                <?php echo e($category->name ?? ''); ?>

                            </td>
                            <td>
                                <?php if($category->value != ''): ?>
                               <img src="<?php echo e(config('app.url').'uploads/icons/'.$category->value); ?>" width="100" >
                               <?php endif; ?>
                            </td>

                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('amenities','status',0,<?php echo e($category->id); ?>)" <?php echo e($category->status==1 ? 'checked' : ''); ?> >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.amenities.show', $category->id)); ?>">
                                    View
                                </a>
                                <!-- <a class="btn btn-xs btn-success" href="<?php echo e(route('admin.amenities.create','id='.$category->id)); ?>">
                                    Add Page
                                </a> -->
                                <a class="btn btn-xs btn-info" href="<?php echo e(route('admin.amenities.edit', $category->id)); ?>">
                                    Edit
                                </a>
                                <button class="btn btn-xs btn-danger" onclick="deletethis('amenities',<?php echo e($category->id); ?>)">
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
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/amenities/index.blade.php ENDPATH**/ ?>