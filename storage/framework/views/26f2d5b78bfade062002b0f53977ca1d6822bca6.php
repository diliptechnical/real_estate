<?php $__env->startSection('content'); ?>

<div class="table-container">
<div class="card">
    <div class="card-header">
        Page List
        <div class="" style="float: right;">
            <a class="btn btn-success" href="<?php echo e(route("admin.property.create")); ?>">
                Add New Product
            </a>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class=" table table-bordered table-striped table-hover datatable">
                <thead>
                    <tr>
                        <th width="10">
                        S. No.
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Price
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
                            <td> <?php echo e($key+1); ?>

                        <!-- <input type="checkbox" name="propertyid" value="<?php echo e($category->id); ?>"> -->
                            </td>
                            <td>
                                <?php echo e($category->name ?? ''); ?>

                            </td>
                            <td>
                                <?php if($category->front_image != ''): ?>
                               <img src="<?php echo e(config('app.url').'uploads/property/'.$category->front_image); ?>" width="100" >
                               <?php endif; ?>
                            </td>
                            <td>
                                <?php echo e($category->selling_cost ?? ''); ?>

                            </td>
                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('mss_property','status',0,<?php echo e($category->id); ?>)" <?php echo e($category->status==1 ? 'checked' : ''); ?> >
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                  </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.property.show', $category->id)); ?>">
                                    View
                                </a>
                                <!-- <a class="btn btn-xs btn-success" href="<?php echo e(route('admin.property.create','id='.$category->id)); ?>">
                                    Add Page
                                </a> -->
                                <a class="btn btn-xs btn-info" href="<?php echo e(route('admin.property.edit', $category->id)); ?>">
                                    Edit
                                </a>
                                <button class="btn btn-xs btn-danger" onclick="deletethis('mss_property',<?php echo e($category->id); ?>)">
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
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/fnzhqoqa/public_html/realestate/resources/views/admin/property/index.blade.php ENDPATH**/ ?>