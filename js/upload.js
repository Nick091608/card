
        $('.img_wp img').height($('.img_wp img').width()*0.6);
        $(window).resize(function(){
            $('.img_wp img').height($('.img_wp img').width()*0.6);
        })        
        //正面
        function zhengmian(){
            $('#img_z').click();
        }
        function getzImg(imgFile){
            var file = imgFile.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);//将文件读取为Data URL小文件   这里的小文件通常是指图像与 html 等格式的文件
            reader.onload = function(e){
                $("#zmz").attr("src",e.target.result);
            }
        }
        //反面
        function fanmian(){
            $('#img_f').click();
        }
        function getfImg(imgFile){
            var file = imgFile.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
                $("#fmz").attr("src",e.target.result);
            }
        }          

