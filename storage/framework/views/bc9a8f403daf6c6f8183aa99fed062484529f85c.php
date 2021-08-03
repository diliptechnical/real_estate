<?php $__env->startSection('content'); ?>
<div class="table-container">

    <div class="card">
        <div class="card-header">
            Edit Amenities
        </div>
        <div class="card-body">
            <form action="<?php echo e(route("admin.amenities.update", [$category->id])); ?>" id="addform" method="POSt" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <?php echo method_field('PUT'); ?>
                <input type="hidden" id="id" name="id" class="form-control" value="<?php echo e($category->id); ?>">
                <input type="hidden" id="url_root" name="url_root" class="form-control" value="<?php echo e(route("admin.amenities.update", [$category->id])); ?>">
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
                    <div class="form-group col-md-6  <?php echo e($errors->has('value') ? 'has-error' : ''); ?>">
                        <label for="price">Image </label>
                        <div class="dropdown w-100" >
                            <button class="dropbtn w-100" type="button" id="changetext">
                                Select icons
                            </button>

                            <div class="dropdown-content w-100">
                            <input type="hidden" id="value" name="value" class="form-control" >

<?php $__currentLoopData = $icon; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ic): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <a href="#" onclick="addthis('<?php echo e($ic->name); ?>');">
        <input type="hidden" id="value_<?php echo e($ic->name); ?>" name="value_<?php echo e($ic->name); ?>" class="form-control" value="<?php echo e($ic->image); ?>">
        <img src="<?php echo e(config('app.url').'uploads/icons/'.$ic->image); ?>" width="20" height="15"> <?php echo e($ic->name); ?>

    </a>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                            </div>
                        </div>


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
<script>
    function addthis(id){

var getImage = $('#value_'+id).val();
$('#changetext').text(id);
$('#value').val(getImage);
}


</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('sidebar.dashboard', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/admin/amenities/edit.blade.php ENDPATH**/ ?>