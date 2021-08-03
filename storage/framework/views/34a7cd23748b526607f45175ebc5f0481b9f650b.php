<?php $__env->startSection('content'); ?>
<div class="table-container">

    <div class="card">
        <div class="card-header">
            Edit Amenities
        </div>
        <div class="card-body">
            <form action="<?php echo e(route("admin.icons.update", [$category->id])); ?>" id="addform" method="POSt" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <?php echo method_field('PUT'); ?>
                <input type="hidden" id="id" name="id" class="form-control" value="<?php echo e($category->id); ?>">
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="<?php echo e(route("admin.icons.update", [$category->id])); ?>">
                <div class="row">
                    <div class="form-group col-md-6 <?php echo e($errors->has('heading') ? 'has-error' : ''); ?>">
                        <label for="heading">Heading*</label>
                        <input type="text" id="name" name="name" class="form-control" value="<?php echo e(old('name', isset($category) ? $category->name : '')); ?>">
                        <?php if($errors->has('name')): ?>
                        <em class="invalid-feedback">
                            <?php echo e($errors->first('name')); ?>

                        </em>
                        <?php endif; ?>
                    </div>
                    <div class="form-group col-md-6  <?php echo e($errors->has('image') ? 'has-error' : ''); ?>">
                    <label for="price">Image  </label>
                    <input type="file" id="value" name="value" class="form-control" value="<?php echo e(old('image', isset($category) ? $category->image : '')); ?>">
                    <img src="<?php echo e(config('app.url').'uploads/icons/'.$category->image); ?>" width="100">

                    <!-- <select id="value" name="value" class="form-control">
                        <?php $__currentLoopData = $icon; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ic): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e($ic->id); ?>" style="background-image:url(<?php echo e(config('app.url').'uploads/icons/'.$ic->image); ?>);">
                            <?php echo e($ic->image); ?>

                    </option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select> -->
                    <!-- <input type="file" id="value" name="value" class="form-control" value="<?php echo e(old('value', isset($category) ? $category->value : '')); ?>"> -->
                    <!-- <p class="helper-block">
                      <img src="<?php echo e(config('app.url').'uploads/amenities/'.$category->value); ?>" width="100">
                    </p> -->
                </div>
                </div>
                <div class="form-group">
                    <label for="short_detail " class="status">Visible this page to all</label>
                    <input type="checkbox" name="status" id="status" class="" checked />
                </div>
                <div>
                    <input class="btn btn-danger" type="submit" id="submitForms" value="Save">
                </div>
            </form>
        </div>
    </div>

</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/icons/edit.blade.php ENDPATH**/ ?>