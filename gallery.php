<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>Фото-галерея</title>
    <link rel="stylesheet" href="styles/style_gallery.css">
    <link rel="stylesheet" href="styles/style.css">
    <script type="text/javascript" src="scripts/jquery-3.6.0.js"></script>
    <script type="text/javascript" src="scripts/scripts_gallery.js"></script>
</head>
<body>
<div class="name_page">
    <h1 style="text-decoration:underline;">Фото-галерея</h1>
    <div class="gallery">
        <div class="button_gallery" onclick="leftChangeImage()"><i class="right"></i></div>
        <center>
        <div class="Image" id="mainImage">
        </div>
        </center>
        <div class="button_gallery" onclick="rightChangeImage()"><i class="left"></i></div>
    </div>
    <div class="button_back">
        <p><a href="index.php"><input type="button" class="button" value="Вернуться на главную"></a></p>
    </div>
</div>
</body>
</html>