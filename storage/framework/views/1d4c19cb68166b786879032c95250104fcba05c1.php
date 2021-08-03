<?php $__env->startSection('content'); ?>
<div class="table-container">
    <div class="card">
        <div class="card-header">
       <div class="row">
            <div class="col-sm-4">
            Page List
            </div>
            <div class="col-sm-8" >
                <div class="row">
                <div class="col-sm-3">
                        <form method="GET" action="<?php echo e(url('admin/exportfile')); ?>" enctype="multipart/form-data">
                            <span> Export Excel </span>
                            <button type="submit"  class="btn btn-success w-100">Export</button>
                        </form>
                    </div>
                    <div class="col-sm-3">
                        <form method="POST" action="<?php echo e(url('admin/importfile')); ?>" enctype="multipart/form-data">
                            <span> Upload Excel </span>
                            <input type="checkbox" style="display:none;" name="header" checked>
                            <input type="file" name="importfile" onchange="form.submit()" class="btn btn-success w-100">
                        </form>
                    </div>
                    <div class="col-sm-3">
                        <form>
                            <span> Upload Images </span>
                            <input type="file" name="importImage" class="btn btn-success w-100">
                        </form>
                    </div>
                    <div class="col-sm-3">
                        <a class="btn btn-success" style="margin-top: 25px;" href="<?php echo e(route("admin.icons.create")); ?>">
                            Add New Icon
                        </a>
                    </div>
                </div>
            </div>
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
                                <?php if($category->image != ''): ?>
                                <img src="<?php echo e(config('app.url').'uploads/icons/'.$category->image); ?>" width="50">
                                <?php endif; ?>
                            </td>

                            <td>
                                <label class="custom-toggle">
                                    <input type="checkbox" onchange="update('icons','status',0,<?php echo e($category->id); ?>)" <?php echo e($category->status==1 ? 'checked' : ''); ?>>
                                    <span class="custom-toggle-slider rounded-circle"></span>
                                </label>
                            </td>
                            <td>
                                <a class="btn btn-xs btn-primary" href="<?php echo e(route('admin.icons.show', $category->id)); ?>">
                                    View
                                </a>
                                <!-- <a class="btn btn-xs btn-success" href="<?php echo e(route('admin.icons.create','id='.$category->id)); ?>">
                                    Add Page
                                </a> -->
                                <a class="btn btn-xs btn-info" href="<?php echo e(route('admin.icons.edit', $category->id)); ?>">
                                    Edit
                                </a>
                                <button class="btn btn-xs btn-danger" onclick="deletethis('icons',<?php echo e($category->id); ?>)">
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
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/fnzhqoqa/public_html/realestate/resources/views/admin/icons/index.blade.php ENDPATH**/ ?>