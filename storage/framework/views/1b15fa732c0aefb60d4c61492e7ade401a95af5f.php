<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap" rel="stylesheet">
    <title><?php echo e($setting["site_name"]); ?></title>
    <script>
        var setting = <?php echo json_encode($setting); ?>

    </script>
    <link href="<?php echo e(asset(mix('front/tcjstech/css/app.css'))); ?>" rel="stylesheet">

</head>

<body>
    <div id="app"></div>
    <script type="text/javascript" src="<?php echo e(asset(mix('front/tcjstech/js/app.js'))); ?>"></script>
</body>

</html>
<?php /**PATH C:\xampp\htdocs\RealEstate\resources\views/front.blade.php ENDPATH**/ ?>