<!DOCTYPE html>
<html>
<head>
    <title>Real Estate</title>
</head>
<body>
    <div>
        <div class="container my-5 px-5 py-5">
            <div class="row">
            <div class="col-3 contact-details">
                <h3>Hello <?php echo e($maildata['name']); ?> </h3>
              <h5>For reset password Your OTP IS : - <?php echo e($maildata['OTP']); ?></h5>
            </div>
        </div>
      </div>

</body>
</html>
<?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/mail.blade.php ENDPATH**/ ?>