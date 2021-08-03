<?php $__env->startSection('content'); ?>
<div class="table-container">

    <div class="card">
        <div class="card-header">
            Edit <?php echo e($category->is_parent==0 ? 'Service' : 'Category'); ?>

        </div>
        <div class="card-body">
            <form action="<?php echo e(route("admin.pages.update", [$category->id])); ?>" id="addform" method="POSt" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <?php echo method_field('PUT'); ?>
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="<?php echo e(route("admin.pages.update", [$category->id])); ?>">
                <input type="hidden" id="id" name="id" class="form-control" value="<?php echo e($category->id); ?>">
                <div class="row">
                    <div class="form-group col-md-6 <?php echo e($errors->has('linkname') ? 'has-error' : ''); ?>">
                        <label for="heading">Linkname*</label>
                        <input type="text" id="linkname" name="linkname" class="form-control" value="<?php echo e(old('linkname', isset($category) ? $category->linkname : '')); ?>">
                        <?php if($errors->has('linkname')): ?>
                        <em class="invalid-feedback">
                            <?php echo e($errors->first('linkname')); ?>

                        </em>
                        <?php endif; ?>
                    </div>
                    <div class="form-group col-md-6 <?php echo e($errors->has('heading') ? 'has-error' : ''); ?>">
                        <label for="heading">Heading*</label>
                        <input type="text" id="heading" name="heading" class="form-control" value="<?php echo e(old('heading', isset($category) ? $category->heading : '')); ?>">
                        <?php if($errors->has('heading')): ?>
                        <em class="invalid-feedback">
                            <?php echo e($errors->first('heading')); ?>

                        </em>
                        <?php endif; ?>
                    </div>

                </div>

                <div class="form-group <?php echo e($errors->has('pbody') ? 'has-error' : ''); ?>">
                    <label for="detail">Detail </label>
                    <textarea id="detail" name="detail" class="form-control " value="<?php echo e(old('pbody', isset($category) ? $category->pbody : '')); ?>"><?php echo e(old('short_detail', isset($category) ? $category->short_detail : '')); ?></textarea>
                    <?php if($errors->has('pbody')): ?>
                    <em class="invalid-feedback">
                        <?php echo e($errors->first('pbody')); ?>

                    </em>
                    <?php endif; ?>

                </div>
                <div class="form-group  <?php echo e($errors->has('heading') ? 'has-error' : ''); ?>">
                        <label for="heading">Video link*</label>
                        <input type="text" id="video" name="video" class="form-control" value="<?php echo e(old('video', isset($category) ? $category->video : '')); ?>">
                        <?php if($errors->has('video')): ?>
                        <em class="invalid-feedback">
                            <?php echo e($errors->first('video')); ?>

                        </em>
                        <?php endif; ?>
                    </div>
                <div class="form-group <?php echo e($errors->has('image') ? 'has-error' : ''); ?>">
                    <label for="price">Image</label>
                    <input type="file" id="image" name="image" class="form-control" value="<?php echo e(old('image', isset($category) ? $category->image : '')); ?>">

                    <p class="helper-block">
                        <img src="<?php echo e(config('app.url').'uploads/pages/'.$category->image); ?>" width="100">
                    </p>
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

<?php $__env->stopSection(); ?>

<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/pages/edit.blade.php ENDPATH**/ ?>