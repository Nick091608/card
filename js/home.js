
Vue.use(Vuex)
var myStore =  new Vuex.Store({    
    state:{
        //存放组件之间共享的数据         
        count : '' , 
        oneType : '',
        telTel : '',
        idId :'' , 
        sexSex : '' ,     
        birthBirth : '' ,     
        countryCountry : '' ,     
        nationNation : '' ,     
        occupationOccupation : '' ,     
        idType : '' ,     
        startStart : '' ,     
        endEnd : '' ,     
        fixedFixed : '' ,     
        addressAddress : '' ,
        netNet : '' ,
        secondNetNet : '',
        deliveryD : '',
        addressRadioR : '', 
        positive : '',
        negative : ''       
    },
    mutations:{
         //显式的更改state里的数据 
     },
     getters:{
         //获取数据的方法         
     },
     actions:{
         //
     }
});

// 查询进度
var apply= { 
    data(){
        return{
            show: true,
            isShow :false,
            count: '',
            timer: null,
            in_value : "",
            onetypemodel : '',
            telmodel : '',
            idmodel :'', 
            codemodel : '', 
            ramodel : '',                   
        }
    },
    mounted() {        
        myStore.state.count = this.in_value;
        myStore.state.oneType = this.onetypemodel;
        myStore.state.telTel = this.telmodel;
        myStore.state.idId = this.idmodel;        
    },
    methods:{
          fn1() {
            myStore.state.count = this.in_value;
            myStore.state.telTel = this.telmodel; 
            myStore.state.typeType = this.onetypemodel;          
            myStore.state.idId = this.idmodel;          
          },
          //发送验证码
          getCode(){
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                $('.count').attr('disabled',true)
                $('.count').css({'background':'rgba(180, 180, 180, 0.5)','color':'#666'})
                this.count--;                 
               } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                $('.count').removeAttr('disabled')
               }
              }, 1000)
             }
          },
          //验证姓名
          name(){
            reg=/^[\u0391-\uFFE5]{2,4}$/;
            if(!reg.test(this.in_value)){
                alert('请输入2-4位中文字符！')
                this.in_value = ''
                this.isWarn = true                  
            } else{
                this.isWarn = false
            }             
       },         
       //验证手机号
       tel(){ 
          regTel = /^1[3|4|5|7|8]\d{9}$/;            
          if(!regTel.test(this.telmodel)){
              alert("请输入正确的11位手机号码！");
              this.telmodel = ''
              this.telWarn = true  
          }else{
              this.telWarn = false
          }   
       }, 
       //验证码
       code(){
           recode = /^\d{6}$/;            
           if(!recode.test(this.codemodel)){                 
              alert("请输入正确的验证码");
              this.codemodel = ''
              this.codeWarn = true
           }else{
               this.codeWarn = false
           }
         },
         jump(){              
           if(this.ramodel == '' || this.in_value == '' || this.idmodel == '' || this.telmodel == '' || this.codemodel == ''){
               this.isBox = true               
           }else{ 
              this.isBox = false
              this.$router.push({ path : '/page3'})
           }                    
         },
         aa(){
            this.show = !this.show
         },
         backHandle(){  //返回上级路由
            this.$router.back()
         }, 
         sure(){
            if(this.isBox == true) this.isBox = false            
         },
     }, 
     watch:{
        onetypemodel(val,oldVal){    //反过来监听         
            if(this.onetypemodel == '01') {  //监听身份证验证 
                let reId = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; 
                if(!reId.test(val)){
                    this.idWarn = true
                }else{
                    this.idWarn = false
                } 
            } 
            if(this.onetypemodel == '02') {  //监听军官证验证                
                let filter_jg = /^[a-zA-Z0-9]{7,21}$/;   
                if(!filter_jg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }                 
            }
            if(this.onetypemodel == '03') {  //监听武装警官证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '04') {  //监听香港特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;    
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '05') {  //监听澳门特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;  
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '06') {  //监听台湾居民来往内地通行证
                let filter_tw = /^([0-9]{8}|[0-9]{10})$/;   
                if(!filter_tw.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }      
            if(this.onetypemodel == '07') {  //监听外国人永久居留证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;   
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '08') {  //监听外国人护照
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }         
        },      
        idmodel(val,oldVal){            
            if(this.onetypemodel == '01') {  //监听身份证验证 
                let reId = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; 
                if(!reId.test(val)){
                    this.idWarn = true
                }else{
                    this.idWarn = false
                } 
            } 
            if(this.onetypemodel == '02') {  //监听军官证验证                
                let filter_jg = /^[a-zA-Z0-9]{7,21}$/;   
                if(!filter_jg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }                 
            }
            if(this.onetypemodel == '03') {  //监听武装警官证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '04') {  //监听香港特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;    
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '05') {  //监听澳门特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;  
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '06') {  //监听台湾居民来往内地通行证
                let filter_tw = /^([0-9]{8}|[0-9]{10})$/;   
                if(!filter_tw.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }      
            if(this.onetypemodel == '07') {  //监听外国人永久居留证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;   
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '08') {  //监听外国人护照
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }         
        }
    },
    template:`
    <div class="page2">
        <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">        
        <form action="">            
            
            <div class="form-id">
                <div class="select-l fl left-margin">                    
                    <span>证件类型</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <select name="" @input="fn1" id="select" v-model="onetypemodel">
                        <option value="">----- 请选择证件类型 -----</option>
                        <option>居民身份证(户口簿)</option>
                        <option>中国人民解放军军官证</option>
                        <option>中国人民武装警官证</option>
                        <option>香港特区护照/港澳居民来往内地通行证</option>
                        <option>澳门特区护照/港澳居民来往内地通行证</option>
                        <option>台湾居民来往内地通行证</option>
                        <option>外国人永久居留证</option>
                        <option>外国人护照</option>     
                    </select>                    
                </div>
            </div>
            <div class="form-name">
                <div class="select-l fl left-margin">                    
                    <span>姓名</span><span class="must">*</span> 
                </div>
                <div class="select-r fl"> 
                    <input type="text" @input="fn1" v-model='in_value' id="yName" placeholder="请输入您的姓名" @change="name">                    
                </div>
            </div>
            <div class="form-num">
                <div class="select-l fl left-margin">                    
                    <span>证件号码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="text" @input="fn1" id="cardInput" v-model="idmodel" placeholder="请输入您的证件号">
                    <span class="error" v-show="isShow">错误</span>
                </div>
            </div>           
            <div class="form-code">
                <div class="select-l fl left-margin">                    
                    <span>验证码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="text" @change="code" id="code" v-model="codemodel" placeholder="请输入手机验证码"><input type="button" v-show="show" @click="getCode"  class="send-code" value="发送验证码"><button v-show="!show" class="count">重新发送({{count}})'s</button>
                </div>
            </div>
            <button @click="jump" id="page3">提交</button>            
        </form>
    </div>    
    `
}
//二维码过期
var codeComponent = {
    template:`
      <div class="codeBox">
          <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">
          <img class="img-title" src="./img/error.png" width="20%" alt="">
          <p>此次二维码申请已结束</p>
          <p>请向招行工作人员重新获取新的二维码</p>
          <button class="code_close">关闭</button>
      </div>
    `
}
// 定义（路由）组件。
var page1 = {    
    data(){
        return {
            isShow:false,
        }       
    },
    methods:{
        check(){
            if($('#one').is(':checked') && $('#two').is(':checked')){        
                $('.agree').removeAttr("disabled");
                $('.agree').css({'background':'#54b8f4'})                                        
            }else{                    
                $('.agree').attr('disabled',false)                
            }
        },
        show(){            
            this.isShow = !this.isShow 
            $('.page1').addClass('rgba')                    
        },
        backColor(){
            $('.page1').removeClass('rgba')
        }
    },
    template:`
    <div class="page1">
            <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">        
            <div class="page1-content">
                 <div class="up clearfix">
                     <div class="up-l fl">上海新版社保卡</div>
                     <div class="up-r fl" @click="show">详情</div>
                 </div>
                 <div class="cont">
                        中华人民共和国社会保障卡(简称社保卡)是参保人享受养老保险、医疗保险、失业保险、工伤保险、生育保险等社会
                        保障待遇的身份凭证，记载了参保人基本信息和各类社会保障信息。在社会保障卡上加载银行金融功能后，社会保障
                        卡就具备了普通银行卡的全部功能，参保人的五项社会保险资金的上缴和发放可通过社保卡的金融功能实现，同时参
                        保人可办理银行存取款、转账、代缴水电煤气费、投资理财产品、买卖外汇、黄金、基金、债券、第三方存管等各类银
                        行业务,并可在全国各地银联ATM机、网银、手机银行等电子渠道和银行柜面使用。
                 </div>
                 <div class="radio">
                    <div class="line">
                        <input type="radio" @click="check" name="one" id="one" value="One">
                        <label for="one" @click="check">xxx章程</label> 
                    </div>                                  
                    <div class="line">
                        <input type="radio" @click="check" name="two" id="two" value="Two">
                        <label for="two" @click="check">xxx章程</label>
                    </div>
                 </div>
            </div>        
            <router-link to="/page2">                
                <button disabled class="agree">同意协议并继续申请</button>
            </router-link>
            <div class="mark" v-show="isShow">
                <p>上海新版社保卡</p>
                <div class="cont">
                        中华人民共和国社会保障卡(简称社保卡)是参保人享受养老保险、医疗保险、失业保险、工伤保险、生育保险等社会
                        保障待遇的身份凭证，记载了参保人基本信息和各类社会保障信息。在社会保障卡上加载银行金融功能后，社会保障
                        卡就具备了普通银行卡的全部功能，参保人的五项社会保险资金的上缴和发放可通过社保卡的金融功能实现，同时参
                        保人可办理银行存取款、转账、代缴水电煤气费、投资理财产品、买卖外汇、黄金、基金、债券、第三方存管等各类银
                        行业务,并可在全国各地银联ATM机、网银、手机银行等电子渠道和银行柜面使用。
                 </div>
                 <input class="close" @click="show();backColor()" type="button" value="关闭">
            </div>       
        </div>    
    `
}
var page2 = {
    data(){
        return{
            show: true,
            isShow :false,
            isBox :false,
            isWarn: false,
            telWarn: false,
            codeWarn: false,
            idWarn: false,
            count: '',
            timer: null,
            in_value : "",
            onetypemodel : '',
            telmodel : '',
            idmodel :'', 
            codemodel : '', 
            ramodel : '',
            show: true                              
        }
    },
    mounted() {        
        myStore.state.count = this.in_value;
        myStore.state.oneType = this.onetypemodel;
        myStore.state.telTel = this.telmodel;
        myStore.state.idId = this.idmodel;        
    },
    methods:{
          fn1() {
            myStore.state.count = this.in_value;
            myStore.state.telTel = this.telmodel; 
            myStore.state.typeType = this.onetypemodel;          
            myStore.state.idId = this.idmodel;          
          },
          //发送验证码
          getCode(){
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                $('.count').attr('disabled',true)
                $('.count').css({'background':'rgba(180, 180, 180, 0.5)','color':'#666'})
                this.count--;                 
               } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                $('.count').removeAttr('disabled')
               }
              }, 1000)
             }
          },
          //验证姓名
          name(){
              reg=/^[\u0391-\uFFE5]{2,4}$/;
              if(!reg.test(this.in_value)){
                  alert('请输入2-4位中文字符！')
                  this.in_value = ''
                  this.isWarn = true                  
              } else{
                  this.isWarn = false
              }             
         },         
         //验证手机号
         tel(){ 
            regTel = /^1[3|4|5|7|8]\d{9}$/;            
            if(!regTel.test(this.telmodel)){
                alert("请输入正确的11位手机号码！");
                this.telmodel = ''
                this.telWarn = true  
            }else{
                this.telWarn = false
            }   
         }, 
         //验证码
         code(){
             recode = /^\d{6}$/;            
             if(!recode.test(this.codemodel)){                 
                alert("请输入正确的验证码");
                this.codemodel = ''
                this.codeWarn = true
             }else{
                 this.codeWarn = false
             }
         },
         jump(){              
             if(this.ramodel == '' || this.in_value == '' || this.idmodel == '' || this.telmodel == '' || this.codemodel == ''){
                 this.isBox = true               
             }else{ 
                this.isBox = false
                this.$router.push({ path : '/page3'})
             }                    
         },
         aa(){
            this.show = !this.show
         },
         backHandle(){  //返回上级路由
            this.$router.back()
         }, 
         sure(){
            if(this.isBox == true) this.isBox = false            
         },         
    },
    watch:{
        onetypemodel(val,oldVal){    //反过来监听         
            if(this.onetypemodel == '01') {  //监听身份证验证 
                let reId = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; 
                if(!reId.test(val)){
                    this.idWarn = true
                }else{
                    this.idWarn = false
                } 
            } 
            if(this.onetypemodel == '02') {  //监听军官证验证                
                let filter_jg = /^[a-zA-Z0-9]{7,21}$/;   
                if(!filter_jg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }                 
            }
            if(this.onetypemodel == '03') {  //监听武装警官证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '04') {  //监听香港特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;    
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '05') {  //监听澳门特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;  
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '06') {  //监听台湾居民来往内地通行证
                let filter_tw = /^([0-9]{8}|[0-9]{10})$/;   
                if(!filter_tw.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }      
            if(this.onetypemodel == '07') {  //监听外国人永久居留证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;   
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '08') {  //监听外国人护照
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }         
        },      
        idmodel(val,oldVal){            
            if(this.onetypemodel == '01') {  //监听身份证验证 
                let reId = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/; 
                if(!reId.test(val)){
                    this.idWarn = true
                }else{
                    this.idWarn = false
                } 
            } 
            if(this.onetypemodel == '02') {  //监听军官证验证                
                let filter_jg = /^[a-zA-Z0-9]{7,21}$/;   
                if(!filter_jg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }                 
            }
            if(this.onetypemodel == '03') {  //监听武装警官证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '04') {  //监听香港特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;    
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '05') {  //监听澳门特区护照/港澳居民来往内地通行证
                let filter_xg = /^[a-zA-Z0-9]{6,10}$/;  
                if(!filter_xg.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }
            if(this.onetypemodel == '06') {  //监听台湾居民来往内地通行证
                let filter_tw = /^([0-9]{8}|[0-9]{10})$/;   
                if(!filter_tw.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                } 
            }      
            if(this.onetypemodel == '07') {  //监听外国人永久居留证
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;   
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }
            if(this.onetypemodel == '08') {  //监听外国人护照
                let filter_live = /^[a-zA-Z]{3}\d{12}$/;    //暂时找不到
                if(!filter_live.test(val)){    
                    this.idWarn = true  
                }else{
                    this.idWarn = false                    
                }  
            }         
        }
    },
    template:`
    <div class="page2">
        <div :class="{warnMark: isBox}">
            <div class="warnBox" :class="{warnAnmit: isBox}">
                <h3>温馨提示</h3>
                <p>您的输入有误！请重新输入！</p>
                <button @click="sure">确定</button>
            </div>
        </div>
        <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">
        <div class="page2-title">
            <div @click="backHandle" class="fl backRouter"><返回</div>
            <div class="title fl">企业社保卡申请</div>
        </div> 
        <div class="page2-contant">
            <div class="select">
                <div class="select-l fl left-margin">请选择<span class="must">*</span></div>
                <div class="select-r fl">
                    <input type="radio" name="state" id="select01" value="one" v-model="ramodel">
                    <label for="select01">境内用户(16周岁以上)</label>
                    <br>
                    <input type="radio" id="select02" value="two" v-model="ramodel">
                    <label for="select02">外籍/港澳台客户(16周岁以上)</label>                    
                </div>                
            </div>
            <div class="form-name">
                <div class="select-l fl left-margin">                    
                    <span>姓名</span><span class="must">*</span> 
                </div>
                <div class="select-r fl"> 
                    <input type="text" :class="{warn: isWarn}" @input="fn1" v-model='in_value' id="yName" placeholder="请输入您的姓名" @change="name">                    
                </div>
            </div>
            <div class="form-id">
                <div class="select-l fl left-margin">                    
                    <span>证件类型</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <select @input="fn1" id="select" v-model="onetypemodel">
                        <option value="">----- 请选择证件类型 -----</option>
                        <option value="01">居民身份证(户口簿)</option>
                        <option value="02">中国人民解放军军官证</option>
                        <option value="03">中国人民武装警官证</option>
                        <option value="04">香港特区护照/港澳居民来往内地通行证</option>
                        <option value="05">澳门特区护照/港澳居民来往内地通行证</option>
                        <option value="06">台湾居民来往内地通行证</option>
                        <option value="07">外国人永久居留证</option>
                        <option value="08">外国人护照</option>     
                    </select>                    
                </div>
            </div>
            <div class="form-num">
                <div class="select-l fl left-margin">                    
                    <span>证件号码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="text" :class="{warn: idWarn}" @input="fn1" id="cardInput" v-model="idmodel" placeholder="请输入您的证件号">                    
                </div>
            </div>
            <div class="form-tel">
                <div class="select-l fl left-margin">                    
                    <span>手机号码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="number" :class="{warn: telWarn}" @input="fn1" v-model="telmodel" @change="tel" id="tel" placeholder="请输入11位手机号">
                </div>
            </div>
            <div class="form-code">
                <div class="select-l fl left-margin">                    
                    <span>验证码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="text" :class="{warn: codeWarn}" @change="code" id="code" v-model="codemodel" placeholder="请输入手机验证码"><input type="button" v-show="show" @click="getCode"  class="send-code" value="发送验证码"><button v-show="!show" class="count">重新发送({{count}})'s</button>
                </div>
            </div>
            <button @click="jump();aa()"id="page3">下一步</button>            
        </div>
    </div>    
    `
}
var page3 = { 
    data(){
         return{      
            sexmodel :'',
            birthmodel :'',
            countrymodel :'',
            nationmodel :'',
            occupationmodel :'',
            idTypemodel :'',
            startmodel : '' ,     
            endmodel : '' , 
            fixedmodel : '' ,
            long : '',           
            in_value : myStore.state.count,
            id_value: myStore.state.idId,
            tel_value: myStore.state.telTel,
            isBox: false, 
            idWarn : false ,
            show: true         
         }
    },      
    mounted() { 
        myStore.state.sexSex = this.sexmodel;      
        myStore.state.birthBirth = this.birthmodel;      
        myStore.state.countryCountry = this.countrymodel;      
        myStore.state.nationNation = this.nationmodel;      
        myStore.state.occupationOccupation = this.occupationmodel;      
        myStore.state.idType = this.idTypemodel;      
        myStore.state.startStart = this.startmodel;      
        myStore.state.endEnd = this.endmodel;      
        myStore.state.fixedFixed = this.fixedmodel;      
    }, 
    methods:{
          fn1() {            
            myStore.state.sexSex = this.sexmodel;
            myStore.state.birthBirth = this.birthmodel;                      
            myStore.state.countryCountry = this.countrymodel; 
            myStore.state.nationNation = this.nationmodel;
            myStore.state.occupationOccupation = this.occupationmodel;
            myStore.state.idType = this.idTypemodel; 
            myStore.state.startStart = this.startmodel;      
            myStore.state.endEnd = this.endmodel;      
            myStore.state.fixedFixed = this.fixedmodel;                     
          },
          //固定电话验证
          fix(){            
            let reFixed = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
            if(!reFixed.test(this.fixedmodel)){
                this.isBox = true 
                this.fixedmodel = ''
                this.idWarn = true                               
            }else{
                this.isBox = false 
                this.idWarn = false 
            }
          }, 
         jump(){ 
            if(this.sexmodel == '' || this.birthmodel == '' || this.countrymodel == '' || this.nationmodel == '' || this.occupationmodel == '' || this.idTypemodel == '' || this.startmodel == '' || this.endmodel == '' || this.idnummodel == '' || this.telmodel == ''){
                this.isBox = true                
            }else{
                this.isBox = false
                this.$router.push({ path : '/page4'})
            }                    
         },
         //切换长期勾选
         toggle(){
             this.long = !this.long            
         },
         backHandle(){  //返回上级路由
            this.$router.back()
         }, 
         sure(){
            if(this.isBox == true) this.isBox = false            
         }, 
    }, 
    watch:{
        //长期有效
        long(){
            if(!this.long){                
                $('#endDate').attr('disabled',true)
            }else{
                $('#endDate').attr('disabled',false)
            }                                             
        },        
    }, 
    template:`
    <transition name="fade">
    <div v-if="show" class="page3">            
        <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">
        <div :class="{warnMark: isBox}">
            <div class="warnBox" :class="{warnAnmit: isBox}">
                <h3>温馨提示</h3>
                <p>您的输入有误！请重新输入！</p>
                <button @click="sure">确定</button>
            </div>
        </div>        
        <div class="page3-title left-margin" >
            <div @click="backHandle" class="fl backRouter"><返回</div>
            <div class="title fl">个人信息（必填）</div>
        </div>  
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">姓名<i></i></div>
            <div class="select-r fl">
                <input type="text" @input="fn1" v-model="in_value">
            </div>           
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">性别<i></i></div>
            <div class="select-r fl">
                <select @input="fn1" v-model="sexmodel">
                    <option value="">----- 请选择 -----</option>
                    <option value="1">男</option>
                    <option value="2">女</option>
                    <option value="9">未知</option>
                </select>                
            </div>
        </div>  
        <div class="page3-div left-margin">
            <div class="select-l fl alignment start_date_left">出生日期<i></i></div>
            <div class="select-r fl">
                <input type="date" @input="fn1" v-model="birthmodel" class="date">
            </div>            
        </div>        
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">国籍/地区<i></i></div>
            <div class="select-r fl">
                <select @input="fn1" v-model="countrymodel" >                    
                    <option value="">----- 请选择 -----</option>
                    <option value="ABW">阿鲁巴岛 ABW</option>
                    <option value="AFG">阿富汗 AFG</option>
                    <option value="AGO">安哥拉 AGO</option>
                    <option value="AIA">安圭拉 AIA</option>
                    <option value="ALA">奥兰群岛 ALA</option>
                    <option value="ALB">阿尔巴尼亚 ALB</option>
                    <option value="AND">安道尔 AND</option>
                    <option value="ANT">荷属安地列斯群岛 ANT</option>
                    <option value="ARE">阿拉伯联合酋长国 ARE</option>
                    <option value="ARG">阿根廷 ARG</option>
                    <option value="ARM">亚美尼亚 ARM</option>
                    <option value="ASM">美属萨摩亚 ASM</option>
                    <option value="ATA">南极洲 ATA</option>
                    <option value="ATF">法属南部领地 ATF</option>
                    <option value="ATG">安提瓜岛与巴布达岛 ATG</option>
                    <option value="AUS">澳大利亚 AUS</option>
                    <option value="AUT">奥地利 AUT</option>
                    <option value="AZE">阿塞拜疆 AZE</option>
                    <option value="BDI">布隆迪 BDI</option>
                    <option value="BEL">比利时 BEL</option>
                    <option value="BEN">贝宁 BEN</option>
                    <option value="BFA">布基纳法索 BFA</option>
                    <option value="BGD">孟加拉国 BGD</option>
                    <option value="BGR">保加利亚 BGR</option>
                    <option value="BHR">巴林群岛 BHR</option>
                    <option value="BHS">巴哈马群岛 BHS</option>
                    <option value="BIH">波斯尼亚与黑塞哥维那 BIH</option>
                    <option value="BLR">白俄罗斯 BLR</option>
                    <option value="BLZ">伯利兹 BLZ</option>
                    <option value="BMU">百慕大群岛 BMU</option>
                    <option value="BOL">玻利维亚 BOL</option>
                    <option value="BRA">巴西 BRA</option>
                    <option value="BRB">巴巴多斯岛 BRB</option>
                    <option value="BRN">文莱 BRN</option>
                    <option value="BTN">不丹 BTN</option>
                    <option value="BVT">博维特岛 BVT</option>
                    <option value="BWA">博茨瓦纳 BWA</option>
                    <option value="CAF">中非共和国 CAF</option>
                    <option value="CAN">加拿大 CAN</option>
                    <option value="CCK">科科斯群岛 CCK</option>
                    <option value="CHE">瑞士 CHE</option>
                    <option value="CHL">智利 CHL</option>
                    <option value="CHN">中国 CHN</option>
                    <option value="CIV">科特迪瓦 CIV</option>
                    <option value="CMR">喀麦隆 CMR</option>
                    <option value="COD">刚果（金） COD</option>
                    <option value="COG">刚果 COG</option>
                    <option value="COK">库克群岛 COK</option>
                    <option value="COL">哥伦比亚 COL</option>
                    <option value="COM">科摩罗 COM</option>
                    <option value="CPV">佛得角 CPV</option>
                    <option value="CRI">哥斯达黎加 CRI</option>
                    <option value="CUB">古巴 CUB</option>
                    <option value="CXR">圣诞岛 CXR</option>
                    <option value="CYM">开曼群岛 CYM</option>
                    <option value="CYP">塞浦路斯 CYP</option>
                    <option value="CZE">捷克共和国 CZE</option>
                    <option value="DEU">德国 DEU</option>
                    <option value="DJI">吉布提 DJI</option>
                    <option value="DMA">多米尼加 DMA</option>
                    <option value="DNK">丹麦 DNK</option>
                    <option value="DOM">多米尼加共和国 DOM</option>
                    <option value="DZA">阿尔及尔 DZA</option>
                    <option value="ECU">厄瓜多尔 ECU</option>
                    <option value="EGY">埃及 EGY</option>
                    <option value="ERI">厄立特里亚 ERI</option>
                    <option value="ESH">西撒哈拉 ESH</option>
                    <option value="ESP">西班牙 ESP</option>
                    <option value="EST">爱沙尼亚 EST</option>
                    <option value="ETH">埃塞俄比亚 ETH</option>
                    <option value="FIN">芬兰 FIN</option>
                    <option value="FJI">斐济 FJI</option>
                    <option value="FRA">法国 FRA</option>
                    <option value="FRO">法罗群岛 FRO</option>
                    <option value="FSM">密克罗尼西亚 FSM</option>
                    <option value="GAB">加蓬 GAB</option>
                    <option value="GBR">英国 GBR</option>
                    <option value="GEO">乔治亚州 GEO</option>
                    <option value="GGY">格恩西岛 GGY</option>
                    <option value="GHA">加纳 GHA</option>
                    <option value="GIB">直布罗陀 GIB</option>
                    <option value="GIN">几内亚 GIN</option>
                    <option value="GLP">瓜德罗普岛 GLP</option>
                    <option value="GMB">冈比亚 GMB</option>
                    <option value="GNB">几内亚比绍 GNB</option>
                    <option value="GNQ">赤道几内亚 GNQ</option>
                    <option value="GRC">希腊 GRC</option>
                    <option value="GRD">格林纳达 GRD</option>
                    <option value="GRL">格陵兰 GRL</option>
                    <option value="GTM">危地马拉 GTM</option>
                    <option value="GUF">法属圭亚那 GUF</option>
                    <option value="GUM">关岛 GUM</option>
                    <option value="GUY">圭亚那 GUY</option>
                    <option value="HKG">中国香港 HKG</option>
                    <option value="HMD">赫德和麦克唐纳群岛 HMD</option>
                    <option value="HND">洪都拉斯 HND</option>
                    <option value="HRV">克罗地亚 HRV</option>
                    <option value="HTI">海地 HTI</option>
                    <option value="HUN">匈牙利 HUN</option>
                    <option value="IDN">印度尼西亚 IDN</option>
                    <option value="IMN">曼恩岛 IMN</option>
                    <option value="IND">印度 IND</option>
                    <option value="IOT">英属印度洋领地 IOT</option>
                    <option value="IRL">爱尔兰 IRL</option>
                    <option value="IRN">伊朗 IRN</option>
                    <option value="IRQ">伊拉克 IRQ</option>
                    <option value="ISL">冰岛 ISL</option>
                    <option value="ISR">以色列 ISR</option>
                    <option value="ITA">意大利 ITA</option>
                    <option value="JAM">牙买加 JAM</option>
                    <option value="JEY">泽西岛 JEY</option>
                    <option value="JOR">约旦 JOR</option>
                    <option value="JPN">日本 JPN</option>
                    <option value="KAZ">哈萨克斯坦 KAZ</option>
                    <option value="KEN">肯尼亚 KEN</option>
                    <option value="KGZ">吉尔吉斯斯坦 KGZ</option>
                    <option value="KHM">柬埔寨 KHM</option>
                    <option value="KIR">基里巴斯 KIR</option>
                    <option value="KLK">福克兰群岛 KLK</option>
                    <option value="KNA">圣基茨和尼维斯 KNA</option>
                    <option value="KOR">韩国 KOR</option>
                    <option value="KWT">科威特 KWT</option>
                    <option value="LAO">老挝 LAO</option>
                    <option value="LBN">黎巴嫩 LBN</option>
                    <option value="LBR">利比里亚 LBR</option>
                    <option value="LBY">利比亚 LBY</option>
                    <option value="LCA">圣卢西亚岛 LCA</option>
                    <option value="LIE">列支敦士登 LIE</option>
                    <option value="LKA">斯里兰卡 LKA</option>
                    <option value="LSO">莱索托 LSO</option>
                    <option value="LTU">立陶宛 LTU</option>
                    <option value="LUX">卢森堡 LUX</option>
                    <option value="LVA">拉脱维亚 LVA</option>
                    <option value="MAC">中国澳门 MAC</option>
                    <option value="MAR">摩洛哥 MAR</option>
                    <option value="MCO">摩纳哥 MCO</option>
                    <option value="MDA">摩尔多瓦 MDA</option>
                    <option value="MDG">马达加斯加岛 MDG</option>
                    <option value="MDV">马尔代夫 MDV</option>
                    <option value="MEX">墨西哥 MEX</option>
                    <option value="MHL">马绍尔群岛 MHL</option>
                    <option value="MKD">马其顿 MKD</option>
                    <option value="MLI">马里 MLI</option>
                    <option value="MLT">马耳他 MLT</option>
                    <option value="MMR">缅甸 MMR</option>
                    <option value="MNE">黑山 MNE</option>
                    <option value="MNG">蒙古 MNG</option>
                    <option value="MNP">北马里亚纳群岛自由联邦 MNP</option>
                    <option value="MOZ">莫桑比克 MOZ</option>
                    <option value="MRT">毛利塔尼亚 MRT</option>
                    <option value="MSR">蒙特塞拉特岛 MSR</option>
                    <option value="MTQ">马提尼克岛 MTQ</option>
                    <option value="MUS">毛里求斯 MUS</option>
                    <option value="MWI">马拉维 MWI</option>
                    <option value="MYS">马来西亚 MYS</option>
                    <option value="MYT">马约特岛 MYT</option>
                    <option value="NAM">纳米比亚 NAM</option>
                    <option value="NCL">新喀里多尼亚 NCL</option>
                    <option value="NER">尼日尔 NER</option>
                    <option value="NFK">诺福克岛 NFK</option>
                    <option value="NGA">尼日利亚 NGA</option>
                    <option value="NIC">尼加拉瓜 NIC</option>
                    <option value="NIU">纽埃岛 NIU</option>
                    <option value="NLD">荷兰 NLD</option>
                    <option value="NOR">挪威 NOR</option>
                    <option value="NPL">尼泊尔 NPL</option>
                    <option value="NRU">瑙鲁 NRU</option>
                    <option value="NZL">新西兰 NZL</option>
                    <option value="OMN">阿曼 OMN</option>
                    <option value="PAK">巴基斯坦 PAK</option>
                    <option value="PAN">巴拿马 PAN</option>
                    <option value="PCN">皮特克恩岛 PCN</option>
                    <option value="PER">秘鲁 PER</option>
                    <option value="PHL">菲律宾 PHL</option>
                    <option value="PLW">帕劳岛 PLW</option>
                    <option value="PLW">巴布亚新几内亚 PLW</option>
                    <option value="POL">波兰 POL</option>
                    <option value="PRI">波多黎各 PRI</option>
                    <option value="PRK">朝鲜 PRK</option>
                    <option value="PRT">葡萄牙 PRT</option>
                    <option value="PRY">巴拉圭 PRY</option>
                    <option value="PSE">巴勒斯坦 PSE</option>
                    <option value="PYF">法属波利尼西亚 PYF</option>
                    <option value="QAT">卡塔尔 QAT</option>
                    <option value="REU">留尼旺岛 REU</option>
                    <option value="ROU">罗马尼亚 ROU</option>
                    <option value="RUS">俄国 RUS</option>
                    <option value="RWA">卢旺达 RWA</option>
                    <option value="SAU">沙特阿拉伯 SAU</option>
                    <option value="SDN">苏丹 SDN</option>
                    <option value="SEN">塞内加尔 SEN</option>
                    <option value="SGP">新加坡 SGP</option>
                    <option value="SGS">南乔治亚岛和南桑威奇群岛 SGS</option>
                    <option value="SHN">圣赫勒拿岛 SHN</option>
                    <option value="SJM">斯瓦尔巴岛和扬马延岛 SJM</option>
                    <option value="SLB">所罗门群岛 SLB</option>
                    <option value="SLE">塞拉利昂 SLE</option>
                    <option value="SLV">萨尔瓦多 SLV</option>
                    <option value="SMR">圣马力诺 SMR</option>
                    <option value="SOM">索马里 SOM</option>
                    <option value="SPM">圣皮埃尔和密克隆岛 SPM</option>
                    <option value="SRB">塞尔维亚和黑山 SRB</option>
                    <option value="STP">圣多美和普林西比 STP</option>
                    <option value="SUR">苏里南 SUR</option>
                    <option value="SVK">斯洛伐克 SVK</option>
                    <option value="SVN">斯洛文尼亚 SVN</option>
                    <option value="SWE">瑞典 SWE</option>
                    <option value="SWZ">斯威士兰 SWZ</option>
                    <option value="SYC">塞舌尔 SYC</option>
                    <option value="SYR">叙利亚 SYR</option>
                    <option value="TCA">特克斯和凯科斯群岛 TCA</option>
                    <option value="TCD">乍得 TCD</option>
                    <option value="TGO">多哥 TGO</option>
                    <option value="THA">泰国 THA</option>
                    <option value="TJK">塔吉克斯坦 TJK</option>
                    <option value="TKL">托克劳群岛 TKL</option>
                    <option value="TKM">土库曼斯坦 TKM</option>
                    <option value="TLS">东帝汶 TLS</option>
                    <option value="TON">汤加 TON</option>
                    <option value="TTO">特立尼达和多巴哥 TTO</option>
                    <option value="TUN">突尼斯 TUN</option>
                    <option value="TUR">土耳其 TUR</option>
                    <option value="TUV">图瓦卢 TUV</option>
                    <option value="TWN">中国台湾 TWN</option>
                    <option value="TZA">坦桑尼亚 TZA</option>
                    <option value="UGA">乌干达 UGA</option>
                    <option value="UKR">乌克兰 UKR</option>
                    <option value="UMI">美属萨摩亚 UMI</option>
                    <option value="URY">乌拉圭 URY</option>
                    <option value="USA">美国 USA</option>
                    <option value="UZB">乌兹别克斯坦 UZB</option>
                    <option value="VAT">梵蒂冈 VAT</option>
                    <option value="VCT">圣文森特和格林纳丁斯群岛 VCT</option>
                    <option value="VEN">委内瑞拉 VEN</option>
                    <option value="VGB">维尔京群岛（英属） VGB</option>
                    <option value="VIR">维尔京群岛（美属） VIR</option>
                    <option value="VNM">越南 VNM</option>
                    <option value="VUT">瓦努阿图 VUT</option>
                    <option value="WLF">瓦利斯群岛和富图纳群岛 WLF</option>
                    <option value="WSM">萨摩亚群岛 WSM</option>
                    <option value="YEM">也门 YEM</option>
                    <option value="ZAF">南非 ZAF</option>
                    <option value="ZMB">赞比亚 ZMB</option>
                    <option value="ZWE">津巴布韦 ZWE</option>                    
                </select>
            </div>             
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">民族<i></i></div>
            <div class="select-r fl">
                <select id="nation" @input="fn1" v-model="nationmodel">
                    <option value="">----- 请选择 -----</option>
                    <option value="01">汉族</option>
                    <option value="02">蒙古族</option>
                    <option value="03">回族</option>
                    <option value="04">藏族</option>
                    <option value="05">维吾尔族</option>
                    <option value="06">苗族</option>
                    <option value="07">彝族</option>
                    <option value="08">壮族</option>
                    <option value="09">布依族</option>
                    <option value="10">朝鲜族</option>
                    <option value="11">满族</option>
                    <option value="12">侗族</option>
                    <option value="13">瑶族</option>
                    <option value="14">白族</option>
                    <option value="15">土家族</option>
                    <option value="16">哈尼族</option>
                    <option value="17">哈萨克族</option>
                    <option value="18">傣族</option>
                    <option value="19">黎族</option>
                    <option value="20">傈僳族</option>
                    <option value="21">佤族</option>
                    <option value="22">畲族</option>
                    <option value="23">高山族</option>
                    <option value="24">拉祜族</option>
                    <option value="25">水族</option>
                    <option value="26">东乡族</option>
                    <option value="27">纳西族</option>
                    <option value="28">景颇族</option>
                    <option value="29">柯尔克孜族</option>
                    <option value="30">土族</option>
                    <option value="31">达翰尔族</option>
                    <option value="32">仫佬族</option>
                    <option value="33">羌族</option>
                    <option value="34">布朗族</option>
                    <option value="35">撒拉族</option>
                    <option value="36">毛南族</option>
                    <option value="37">仡佬族</option>
                    <option value="38">锡伯族</option>
                    <option value="39">阿昌族</option>                    
                    <option value="40">普米族</option>
                    <option value="41">塔吉克族</option>
                    <option value="42">怒族</option>
                    <option value="43">乌孜别克族</option>
                    <option value="44">俄罗斯族</option>
                    <option value="45">鄂温克族</option>
                    <option value="46">德昂族</option>
                    <option value="47">保安族</option>
                    <option value="48">裕固族</option>
                    <option value="49">京族</option>
                    <option value="50">塔塔尔族</option>
                    <option value="51">独龙族</option>
                    <option value="52">鄂伦春族</option>
                    <option value="53">赫哲族</option>
                    <option value="54">门巴族</option>
                    <option value="55">珞巴族</option>
                    <option value="56">基诺族</option>
                    <option value="99">其他</option>
                </select>
            </div> 
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">职业<i></i></div>
            <div class="select-r fl">
                <select @input="fn1" v-model="occupationmodel">
                    <option value="">----- 请选择 -----</option>
                    <option value="11">国家公务员（包括参照、依照公务员管理的人员）</option>
                    <option value="12">机关工勤人员</option>
                    <option value="13">事业单位管理人员</option>
                    <option value="14">事业单位专业技术人员</option>
                    <option value="15">事业单位工勤人员</option>
                    <option value="21">企业经营管理人员</option>
                    <option value="22">企业专业技术人员</option>
                    <option value="24">工人</option>
                    <option value="27">农民工</option>
                    <option value="31">学生</option>
                    <option value="37">现役军人</option>
                    <option value="51">自由职业者</option>
                    <option value="54">个体经营者</option>
                    <option value="70">无业人员</option>
                    <option value="80">退(离)休人员</option>
                    <option value="81">外国人</option>                    
                </select>
            </div>
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">证件类型<i></i></div>
            <div class="select-r fl">
                <select @input="fn1" v-model="idTypemodel">
                    <option value="">----- 请选择 -----</option>
                    <option value="01">居民身份证(户口簿)</option>
                    <option value="02">中国人民解放军军官证</option>
                    <option value="03">中国人民武装警官证</option>
                    <option value="04">香港特区护照/港澳居民来往内地通行证</option>
                    <option value="05">澳门特区护照/港澳居民来往内地通行证</option>
                    <option value="06">台湾居民来往内地通行证</option>
                    <option value="07">外国人永久居留证</option>
                    <option value="08">外国人护照</option>                    
                </select>                
            </div>
        </div>
        <div class="page3-div left-margin id-start">
            <div class="select-l fl alignment">证件起始日期<i></i></div> 
            <div class="select-r fl">          
                <input type="date" @input="fn1" v-model="startmodel">
                <input type="radio" v-model="long" id="long" @click="toggle"> 
                <label for="long">长期有效勾选 (勾选截止日期将不可用)</label>                
            </div>             
        </div> 
        <div class="page3-div left-margin id-end">
            <div class="select-l fl alignment">证件截止日期<i></i></div>
            <div class="select-r fl"> 
                <input type="date" id="endDate" @input="fn1" v-model="endmodel">
            </div>
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">证件号码<i></i></div>
            <div class="select-r fl">
                <input type="text" @input="fn1" v-model="id_value" placeholder="请输入您的证件号码">
            </div>
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">手机号码<i></i></div>
            <div class="select-r fl">
                <input type="number" @input="fn1" v-model="tel_value" placeholder="请输入11位手机号" maxlength="11" minlength="11">
            </div>
        </div> 
        <div class="page3-div left-margin">
            <div class="select-l fl alignment select-l-end">固定电话(选填)<i></i></div>
            <div class="select-r fl select-r-end">
                <input type="number" :class="{warn: idWarn}" @input="fn1"  id="fixtel" @change="fix" v-model="fixedmodel" placeholder="请输入您的固定电话">
            </div>
        </div> 
        <button @click="jump" id="page4">下一步</button>                          
    </div>
    </transition>
`
}
var page4 = {
    data(){
        return{            
           addressmodel :'',               
           netmodel :'', 
           delivery :'', 
           secondnetmodel : '' ,
           addressRadio : '' , 
           isBox:false,           
           area:[ 
                {
                    text:'----- 请选择 -----',
                    children:[                        
                        {text:'----- 请选择 -----'},                        
                    ]
                },               
                {
                    text:"黄浦区",
                    children:[                        
                        {text:"黄浦外滩街道受理点",value:"01010101"},
                        {text:"黄浦南京东路街道受理点",value:"01030104"},
                        {text:"黄浦半淞园街道受理点",value:"02003159"},
                        {text:"黄浦小东门街道受理点",value:"02030156"},
                        {text:"黄浦豫园街道受理点",value:"02040160"},
                        {text:"黄浦老西门街道受理点",value:"02050158"},
                        {text:"黄浦区瑞金街道受理点",value:"03010106"},
                        {text:"黄浦区淮海街道受理点",value:"03020109"},
                        {text:"黄浦区打浦街道受理点",value:"03030110"},
                        {text:"黄浦区五里街道受理点",value:"03040102"},
                    ]                    
                },
                {
                    text:"徐汇区",
                    children:[                        
                        {text:"徐汇湖南街道受理点",value:"04001804"},  
                        {text:"徐汇斜土街道受理点",value:"04007130"},                  
                        {text:"徐汇枫林街道受理点",value:"04008131"},
                        {text:"徐汇长桥街道受理点",value:"04010134"},
                        {text:"徐汇田林街道受理点",value:"04011133"},
                        {text:"徐汇漕河泾街道受理点",value:"04012139"},
                        {text:"徐汇龙华街道受理点",value:"04013138"},
                        {text:"徐汇虹梅街道受理点",value:"04014135"},
                        {text:"徐汇华泾镇受理点",value:"04015140"},
                        {text:"徐汇康健街道受理点",value:"04016136"},
                        {text:"徐汇凌云街道受理点",value:"04017137"},
                        {text:"徐汇徐家汇街道受理点",value:"04020603"},
                        {text:"徐汇天平街道受理点",value:"04030129"},
                    ]
                }, 
                {
                    text:"长宁区",
                    children:[                        
                        {text:"长宁江苏街道受理点",value:"05002150"},  
                        {text:"长宁新华街道受理点",value:"05004146"},                  
                        {text:"长宁周家桥街道受理点",value:"05005151"},
                        {text:"长宁仙霞街道受理点",value:"05008152"},
                        {text:"长宁虹桥街道受理点",value:"05009148"},
                        {text:"长宁程家桥街道受理点",value:"05010147"},
                        {text:"长宁北新泾街道受理点",value:"05011153"},
                        {text:"长宁新泾镇受理点",value:"05012149"},
                        {text:"长宁华阳街道受理点",value:"05020154"},
                        {text:"长宁天山街道受理点",value:"05025604"},                           
                    ]
                },  
                {
                    text:"静安区",
                    children:[                        
                        {text:"静安静安寺街道受理点",value:"06020142"},  
                        {text:"静安曹家渡街道受理点",value:"06030144"},                  
                        {text:"静安江宁街道受理点",value:"06040141"},
                        {text:"静安石门二路街道受理点",value:"06050145"},
                        {text:"静安南京西路街道受理点",value:"06060143"},                                                  
                    ]
                },
                {
                    text:"普陀区",
                    children:[                        
                        {text:"普陀长风新村街道受理点",value:"07003172"},  
                        {text:"普陀曹杨新村街道受理点",value:"07005174"},                  
                        {text:"普陀长寿街道受理点",value:"07007173"},
                        {text:"普陀长寿街道分中心",value:"07007731"},
                        {text:"普陀宜川新村街道受理点",value:"07009175"},                                                  
                        {text:"普陀长征镇受理点",value:"07015179"},                                                  
                        {text:"普陀桃浦镇受理点",value:"07016176"},                                                  
                        {text:"普陀真如镇受理点",value:"07017178"},                                                  
                        {text:"普陀区万里街道受理点",value:"07019622"},                                                  
                        {text:"普陀甘泉路街道受理点",value:"07025180"},                                                  
                        {text:"普陀石泉路街道受理点",value:"07030177"},  
                    ]
                }, 
                {
                    text:"闸北区",
                    children:[                        
                        {text:"闸北共和新路街道受理点",value:"08012123"},  
                        {text:"闸北大宁街道受理点",value:"08013124"},                  
                        {text:"闸北彭浦镇受理点",value:"08017127"},
                        {text:"闸北天目街道受理点",value:"08020120"},
                        {text:"闸北北站街道受理点",value:"08025119"},                                                  
                        {text:"闸北宝山街道受理点",value:"08030121"},                                                  
                        {text:"闸北芷江西路街道受理点",value:"08035122"},                                                  
                        {text:"闸北彭浦街道受理点",value:"08040125"},                                                  
                        {text:"闸北临汾街道受理点",value:"08045126"},  
                    ]
                },
                {
                    text:"虹口区",
                    children:[                        
                        {text:"虹口欧阳街道受理点",value:"09009113"},  
                        {text:"虹口江湾镇受理点",value:"09016108"},                  
                        {text:"虹口凉城街道受理点",value:"09017103"},
                        {text:"虹口四川北街道受理点",value:"09025115"},
                        {text:"虹口提篮桥街道受理点",value:"09035116"},                                                  
                        {text:"虹口嘉兴街道受理点",value:"09040117"},                                                  
                        {text:"闸北芷江西路街道受理点",value:"09045114"},                                                  
                        {text:"虹口广中街道受理点",value:"09050111"}, 
                    ]
                }, 
                {
                    text:"杨浦区",
                    children:[                        
                        {text:"杨浦新江湾城受理点",value:"10001842"},  
                        {text:"杨浦四平街道受理点",value:"10009845"},                  
                        {text:"杨浦延吉街道受理点",value:"10013838"},
                        {text:"杨浦区长白街道受理网点",value:"10014839"},
                        {text:"虹口提篮桥街道受理点",value:"10016835"},                                                  
                        {text:"杨浦区五角场镇受理网点",value:"10017805"},                                                  
                        {text:"杨浦区定海街道受理网点",value:"10030836"},                                                  
                        {text:"杨浦大桥街道受理点",value:"10035840"}, 
                        {text:"杨浦平凉街道受理点",value:"10040846"}, 
                        {text:"杨浦区江浦街道受理网点",value:"10045165"}, 
                        {text:"杨浦控江街道受理点",value:"10050168"}, 
                        {text:"杨浦区殷行街道受理网点",value:"10055841"}, 
                    ]
                },
                {
                    text:"闵行区",
                    children:[                        
                        {text:"闵行江川街道受理点",value:"12001448"},  
                        {text:"闵行莘庄工业受理点",value:"12001853"},                  
                        {text:"闵行吴泾镇受理点",value:"12003449"},
                        {text:"闵行区莘庄镇（康城）",value:"12005733"},
                        {text:"闵行莘庄镇受理点",value:"12005813"},                                                  
                        {text:"闵行七宝镇受理点",value:"12007451"},                                                  
                        {text:"闵行七宝镇航华受理点",value:"12007702"},                                                  
                        {text:"闵行七宝镇（新镇）受理点",value:"12007847"}, 
                        {text:"闵行华漕镇受理点",value:"12008452"}, 
                        {text:"闵行华漕镇（纪王镇）受理点",value:"12008875"}, 
                        {text:"闵行华漕镇（诸翟镇）受理点",value:"12009876"}, 
                        {text:"闵行虹桥镇受理点",value:"12011453"}, 
                        {text:"闵行梅陇镇受理点",value:"12012454"}, 
                        {text:"闵行区梅陇镇（晶城）受理点",value:"12012729"}, 
                        {text:"闵行梅陇镇（曹行镇）受理点",value:"12013848"}, 
                        {text:"闵行颛桥镇受理点",value:"12015455"}, 
                        {text:"闵行马桥镇受理点",value:"12017458"}, 
                        {text:"闵行浦江镇受理点",value:"12019627"}, 
                        {text:"闵行浦江镇（陈行镇）受理点",value:"12019849"}, 
                        {text:"闵行浦江镇（杜行镇）受理点",value:"12020850"}, 
                        {text:"闵行浦江镇（鲁汇镇）受理点",value:"12021851"}, 
                        {text:"闵行颛桥镇（田园新村）受理点",value:"12024852"}, 
                        {text:"闵行区新虹街道受理点",value:"12025457"}, 
                        {text:"闵行古美街道受理点",value:"12026459"}, 
                    ]
                },
                {
                    text:"宝山区",
                    children:[                        
                        {text:"大场镇（大华）受理点",value:"13001757"},  
                        {text:"宝山吴淞街道社保卡受理点",value:"13004812"},                  
                        {text:"宝山高境镇社保卡受理点",value:"13006431"},
                        {text:"宝山淞南镇社保卡受理点",value:"13007432"},
                        {text:"宝山区张庙街道受理点",value:"13008433"},                                                  
                        {text:"宝山区庙行镇受理点",value:"13010889"},                                                  
                        {text:"宝山大场镇社保卡受理点",value:"13011435"},                                                  
                        {text:"宝山顾村镇社保卡受理点",value:"13013436"}, 
                        {text:"宝山顾村镇馨佳园受理网点",value:"13013714"}, 
                        {text:"宝山杨行镇社保卡受理点",value:"13014437"}, 
                        {text:"宝山罗店镇社保卡受理点",value:"13017438"}, 
                        {text:"宝山罗泾镇受理点",value:"13018439"}, 
                        {text:"宝山月浦镇受理点",value:"13019811"}, 
                        {text:"宝山友谊街道社保卡受理点",value:"13032446"},
                    ]
                }, 
                {
                    text:"嘉定区",
                    children:[                        
                        {text:"嘉定区南翔镇受理网点",value:"14003896"},  
                        {text:"嘉定安亭镇受理点",value:"14004188"},                  
                        {text:"嘉定工业区（娄塘）受理点",value:"14005870"},
                        {text:"嘉定马陆镇社保卡受理点",value:"14007191"},
                        {text:"嘉定新城马陆镇社保卡网点",value:"14007704"},                                                  
                        {text:"嘉定区马陆镇（一）受理网点",value:"14007830"},                                                  
                        {text:"嘉定马陆镇（二）受理点",value:"14007872"},                                                  
                        {text:"嘉定徐行镇受理点",value:"14010193"}, 
                        {text:"嘉定华亭镇受理点",value:"14012865"}, 
                        {text:"嘉定工业区（朱桥）受理点",value:"14014871"}, 
                        {text:"嘉定外冈镇受理点",value:"14015868"}, 
                        {text:"嘉定黄渡镇受理点",value:"14018867"}, 
                        {text:"嘉定江桥镇（封浜）受理点",value:"14019866"}, 
                        {text:"嘉定江桥镇受理点",value:"14019873"},
                        {text:"嘉定工业区（叶城）受理点",value:"14020869"},
                        {text:"嘉定真新街道受理点",value:"14021831"},
                        {text:"嘉定新成路受理点",value:"14022205"},
                        {text:"嘉定菊园受理点",value:"14023864"},
                        {text:"嘉定嘉定镇受理点",value:"14030207"},
                    ]
                },  
                {
                    text:"浦东区",
                    children:[                        
                        {text:"浦东新区祝桥镇（施湾）受理点",value:"15001897"},  
                        {text:"浦东陆家嘴街道受理点",value:"15003214"},                  
                        {text:"浦东洋泾街道受理点",value:"15005211"},
                        {text:"浦东周家渡街道受理点",value:"15008213"},
                        {text:"浦东新区塘桥街道受理网点",value:"15009815"},                                                  
                        {text:"浦东南码头街道受理点",value:"15011231"},                                                  
                        {text:"浦东高桥镇受理点",value:"15014217"},                                                  
                        {text:"浦东花木街道受理点",value:"15016216"}, 
                        {text:"浦东高东镇受理点",value:"15023238"}, 
                        {text:"浦东高行镇受理点",value:"15025235"}, 
                        {text:"浦东新区高桥镇（凌桥）受理网点",value:"15026719"}, 
                        {text:"浦东唐镇受理点",value:"15027240"}, 
                        {text:"浦东新区曹路镇（社区中心）受理",value:"15035241"}, 
                        {text:"浦东金杨街道受理点",value:"15046232"},
                        {text:"浦东潍坊街道受理点",value:"15050218"},
                        {text:"浦东上钢新村街道受理点",value:"15051209"},
                        {text:"张江镇(孙桥)受理点",value:"15060676"},
                        {text:"浦东新区张江镇（社区中心",value:"150608144"},
                        {text:"浦东浦兴路街道受理点",value:"15061210"},
                        {text:"浦东北蔡镇受理点",value:"15064229"},
                        {text:"浦东金桥镇受理点",value:"15066222"},
                        {text:"浦东合庆镇受理点",value:"15069242"},
                        {text:"浦东东明街道受理点",value:"15072215"},
                        {text:"浦东新区三林镇（长清路）受理点",value:"15072230"},
                        {text:"浦东三林镇（杨思）受理点",value:"15072624"},
                        {text:"浦东三林镇（世博家园）受理点",value:"15072683"},
                        {text:"浦东三林镇（浦发绿城）受理点",value:"15072684"},
                        {text:"浦东新区三林镇（杨东）受理点",value:"15072707"},
                        {text:"浦东沪东街道受理点",value:"15075228"},
                        {text:"浦东新区川沙新镇（川沙）受理点",value:"15086220"},
                        {text:"浦东新区川沙新镇（城厢）受理网点",value:"15086715"},
                        {text:"浦东新区川沙新镇（六团）受理网",value:"15086721"},
                        {text:"浦东新区康桥镇受理点",value:"19001817"},
                        {text:"浦东新区康桥镇（横沔）",value:"19001832"},
                        {text:"浦东新区惠南镇受理点",value:"19001877"},
                        {text:"浦东新区新场镇受理点",value:"19003887"},
                        {text:"浦东新区大团镇受理点",value:"19004816"},
                        {text:"浦东新区万祥镇受理点",value:"19004833"},
                        {text:"浦东新区芦潮港镇受理点",value:"19005880"},
                        {text:"浦东新区航头镇（社区分中心）",value:"19011706"},
                        {text:"浦东新区航头镇(下沙)受理点",value:"19011749"},
                        {text:"浦东新区航头镇（社区中心）",value:"19011886"},
                        {text:"浦东新区宣桥镇受理点",value:"19013883"},
                        {text:"浦东新区川沙新镇（六灶）受理点",value:"19016884"},
                        {text:"浦东新区祝桥镇（社区中心）受理点",value:"19017882"},
                        {text:"浦东新区祝桥镇（江镇）",value:"19017913"},
                        {text:"浦东新区南汇新城镇（人才中心）点",value:"19025722"},
                        {text:"浦东新区泥城镇受理点",value:"19025881"},
                        {text:"浦东新区书院镇受理点",value:"19026879"},
                        {text:"浦东新区老港镇受理点",value:"19029878"},
                        {text:"浦东新区康桥镇（双秀）",value:"19035748"},
                        {text:"浦东新区周浦镇（周东）受理点",value:"19040641"},
                        {text:"浦东新区周浦镇（社区中心）",value:"19040885"},
                        {text:"浦东新区申港街道受理点",value:"19045626"},
                        {text:"浦东新区周浦镇（桃园）点",value:"19045713"},
                        {text:"浦东新区惠南镇（荡湾）",value:"25001717"},
                    ]
                }, 
                {
                    text:"金山区",
                    children:[                        
                        {text:"金山石化街道受理点",value:"16001818"},  
                        {text:"金山张堰镇受理点",value:"16003819"},                  
                        {text:"金山朱泾镇受理点",value:"28001369"},
                        {text:"金山枫泾镇受理点",value:"28002370"},
                        {text:"金山区枫泾镇（兴塔）",value:"28002737"},                                                  
                        {text:"金山亭林镇受理点",value:"28004372"},                                                  
                        {text:"金山区亭林镇（松隐）受理网点",value:"28004716"},                                                  
                        {text:"金山山阳镇受理点",value:"28005374"}, 
                        {text:"金山区吕巷镇（干巷）受理点",value:"28005756"}, 
                        {text:"金山吕巷镇受理点",value:"28005874"}, 
                        {text:"金山金山卫镇受理点",value:"28011378"}, 
                        {text:"金山金山卫镇（钱圩）受理点",value:"28011730"}, 
                        {text:"金山工业区（朱行镇）受理点",value:"28017382"}, 
                        {text:"金山漕泾镇受理点",value:"28018383"},
                        {text:"金山廊下现代农业园区受理点",value:"28019844"},                        
                    ]
                },
                {
                    text:"松江区",
                    children:[                        
                        {text:"松江泗泾镇受理点",value:"17004290"},  
                        {text:"松江车墩镇受理点",value:"17005298"},                  
                        {text:"松江新浜镇受理点",value:"17006301"},
                        {text:"松江石湖荡镇受理点",value:"17007299"},
                        {text:"松江永丰镇受理点",value:"17009291"},                                                  
                        {text:"松江中山街道受理点",value:"17010292"},                                                  
                        {text:"松江新桥镇受理点",value:"17012302"},                                                  
                        {text:"新桥镇（新闵）受理点",value:"17012736"}, 
                        {text:"松江洞泾镇受理点",value:"17013303"}, 
                        {text:"松江九亭镇受理点",value:"17014293"}, 
                        {text:"松江九亭镇社区分中心受理网点",value:"17014710"}, 
                        {text:"松江佘山镇受理点",value:"17015294"}, 
                        {text:"松江小昆山镇受理点",value:"17017304"}, 
                        {text:"松江泖港镇受理点",value:"17020295"},
                        {text:"松江叶榭镇受理点",value:"17022305"},                        
                        {text:"松江方松街道受理点",value:"17024296"},                        
                        {text:"松江区广富林街道",value:"17024732"},                        
                        {text:"松江岳阳街道受理点",value:"17030297"},                        
                    ]
                },
                {
                    text:"青浦区",
                    children:[                        
                        {text:"青浦盈浦镇受理点",value:"18029895"},  
                        {text:"青浦夏阳街道受理点",value:"29001820"},                  
                        {text:"青浦朱家角镇受理点",value:"29002386"},
                        {text:"青浦朱家角镇(沈巷)受理点",value:"29002753"},
                        {text:"青浦练塘镇受理点",value:"29003389"},                                                  
                        {text:"青浦区练塘镇（蒸淀）",value:"29003751"},                                                  
                        {text:"青浦区练塘镇（小蒸）",value:"29003754"},                                                  
                        {text:"青浦金泽镇受理点",value:"29004388"}, 
                        {text:"青浦赵巷镇受理点",value:"29005387"}, 
                        {text:"青浦徐泾镇受理点",value:"29006390"}, 
                        {text:"青浦华新镇受理点",value:"29007892"}, 
                        {text:"青浦重固镇受理点",value:"29009893"}, 
                        {text:"青浦白鹤镇受理点",value:"29010393"}, 
                        {text:"青浦香花桥街道受理点",value:"29013894"},
                    ]
                }, 
                {
                    text:"奉贤区",
                    children:[                        
                        {text:"奉贤奉城镇受理点",value:"20002899"},  
                        {text:"奉贤区西渡街道受理点",value:"20004900"},                  
                        {text:"奉贤奉城镇头桥受理点",value:"20012901"},
                        {text:"奉贤区柘林镇（一）受理网点",value:"20020898"},
                        {text:"奉贤南桥镇社保卡受理点",value:"26001345"},                                                  
                        {text:"奉贤区南桥镇（江海）受理网点",value:"26001821"},                                                  
                        {text:"奉贤海湾镇受理点",value:"26001858"},                                                  
                        {text:"奉贤上海化工分区受理点",value:"26001859"}, 
                        {text:"奉贤现代农业园区受理点",value:"26001860"}, 
                        {text:"奉贤奉浦工业区受理点",value:"26001861"}, 
                        {text:"奉贤海港开发区受理点",value:"26001862"}, 
                        {text:"奉贤海湾旅游区受理点",value:"26001863"}, 
                        {text:"奉贤庄行镇受理点",value:"26008857"}, 
                        {text:"奉贤金汇镇受理点",value:"26010856"},
                        {text:"奉贤泰日镇社保卡受理点",value:"26011351"},
                        {text:"奉贤四团镇平安社区受理点",value:"26013699"},
                        {text:"奉贤四团镇受理点",value:"26013854"},
                        {text:"奉贤青村镇（钱桥）（停）",value:"26016677"},
                        {text:"奉贤青村镇（光明社区）受",value:"26016681"},
                        {text:"奉贤青村镇受理点",value:"26016855"},
                    ]
                }, 
                {
                    text:"崇明县",
                    children:[                        
                        {text:"崇明城桥镇受理点",value:"30001822"},  
                        {text:"崇明堡镇受理点",value:"30002909"},                  
                        {text:"崇明新河镇受理点",value:"30003907"},
                        {text:"崇明绿华镇受理点",value:"30004638"},
                        {text:"崇明新村乡受理点",value:"30005630"},                                                  
                        {text:"崇明三星镇受理点",value:"30006636"},                                                  
                        {text:"崇明庙镇受理点",value:"30008906"},                                                  
                        {text:"崇明港西镇受理点",value:"30012637"}, 
                        {text:"崇明竖新镇（大新）受理点",value:"30018908"}, 
                        {text:"崇明港沿镇受理点",value:"30020634"}, 
                        {text:"崇明向化镇受理点",value:"30023629"}, 
                        {text:"崇明中兴镇受理点",value:"30024631"}, 
                        {text:"崇明陈家镇受理点",value:"30025910"}, 
                        {text:"崇明县新海社区受理网点",value:"30028640"},
                        {text:"崇明县东平社区受理网点",value:"30032639"},
                        {text:"崇明建设镇受理点",value:"30035635"},
                        {text:"崇明横沙乡受理点",value:"30040912"},
                        {text:"崇明长兴乡社保卡受理点",value:"13023443"},                        
                    ]
                }, 
                {
                    text:"上海市白茅岭农场敬老卡受理点",
                    children:[                        
                        {text:"上海市白茅岭农场敬老卡受理点",value:"40010724"},                                                
                    ]
                },
                {
                    text:"上海市军天湖农场敬老卡受理点",
                    children:[                        
                        {text:"上海市军天湖农场敬老卡受理点",value:"40011725"},                                                
                    ]
                },
                {
                    text:"上海市上海农场敬老卡受理点",
                    children:[                        
                        {text:"上海市上海农场敬老卡受理点",value:"40012721"},                                                
                    ]
                },
                {
                    text:"上海市川东农场敬老卡受理点",
                    children:[                        
                        {text:"上海市川东农场敬老卡受理点",value:"40013727"},                                                
                    ]
                },                     
           ]                          
        }
   },    
   created(){    　　
        this.netmodel = this.area[0].text;        
        this.secondnetmodel = this.area[0].children.text;
   },  
   mounted() {        
       myStore.state.addressAddress = this.addressmodel; 
       myStore.state.netNet = this.netmodel; 
       myStore.state.deliveryD = this.delivery; 
       myStore.state.secondNetNet = this.secondnetmodel; 
       myStore.state.addressRadioR = this.addressRadio;
   },    
   computed:{
        citys: function() {  //计算对应的二级菜单
            for (var i = 0; i < this.area.length; i++) {                
                if (this.area[i].text === this.netmodel) {                    
                    return this.area[i].children;
                }
            }
        }
   }, 
   methods:{
       fn1() {
           myStore.state.addressAddress = this.addressmodel;
           myStore.state.netNet = this.netmodel;  
           myStore.state.deliveryD = this.delivery; 
           myStore.state.secondNetNet = this.secondnetmodel;  
           myStore.state.addressRadioR = this.addressRadio;                        
       },        
       jump(){ 
            if(this.addressmodel == '' || this.delivery == '' || this.netmodel == '' || this.secondnetmodel == '' ){
                this.isBox = true
            }else{
                this.isBox = false
                this.$router.push({ path : '/page5'})
            }                    
        }, 
        address(){
            this.addressRadio = !this.addressRadio
            if(this.addressmodel!=0){
                this.delivery = this.addressmodel
            }
        },
        sure(){
            if(this.isBox == true) this.isBox = false            
        },
        backHandle(){  //返回上级路由
            this.$router.back()
        },           
   },          
    template:`
    <div class="page4">    
    <div :class="{warnMark: isBox}">
        <div class="warnBox" :class="{warnAnmit: isBox}">
            <h3>温馨提示</h3>
            <p>您的输入有误！请重新输入！</p>
            <button @click="sure">确定</button>
        </div>
    </div>
    <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡"> 
    <div class="page3-title left-margin" >
        <div @click="backHandle" class="fl backRouter"><返回</div>
        <div class="title fl">地址信息（必填）</div>
    </div>  
    <div class="page3-div left-margin page4-address">
        <div class="select-l fl alignment">通讯地址<i></i></div>
        <div class="select-r fl ">
            <input type="text" @input="fn1" v-model="addressmodel" placeholder="例如：上海市闵行区">
            <input type="radio" name="address" id="address-radio" v-model="addressRadio" @click="address">
            <label for="address-radio">与投递地址一致</label>            
        </div>           
    </div> 
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">通讯地址邮编(非必填)<i></i></div>
        <div class="select-r page4-select-l fl ">
            <input type="text" placeholder="通讯地址邮编">                    
        </div>  
    </div>
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">上海市投递地址<i></i></div>
        <div class="select-r page4-select-r fl ">
            <input type="text" @input="fn1" v-model="delivery" placeholder="例如：上海市闵行区">                    
        </div>  
    </div>
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">投递地址邮编(非必填)<i></i></div>
        <div class="select-r page4-select-r fl ">
            <input type="text" placeholder="投递地址邮编">                    
        </div>  
    </div> 
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">自领社区网点<i></i></div>
        <div class="select-r page4-select-r fl ">                      
            <select id="first" @input="fn1" v-model="netmodel">             
                <option v-for="item in area">{{item.text}}</option>  
            </select>                   
        </div>  
    </div>
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment"><i></i></div>
        <div class="select-r page4-select-r fl "> 
            <select id="second" @input="fn1" v-model="secondnetmodel">       
                <option v-for="city in citys" :value="city.value" >{{city.text}}</option>                
            </select>                   
        </div>  
    </div>            
    <button @click="jump" id="page4">下一步</button>                           
</div>
    `
}
var page5 = {
    data(){
        return {
            in_value : myStore.state.count ,
            onetypemodel : myStore.state.typeType,
            telmodel : myStore.state.telTel ,
            idmodel : myStore.state.idId ,
            sexmodel : myStore.state.sexSex,
            birthmodel : myStore.state.birthBirth,
            countrymodel : myStore.state.countryCountry,
            nationmodel : myStore.state.nationNation,
            occupationmodel : myStore.state.occupationOccupation,
            idTypemodel : myStore.state.idType,
            startmodel : myStore.state.startStart,
            endmodel : myStore.state.endEnd,
            fixedmodel : myStore.state.fixedFixed,
            addressmodel : myStore.state.addressAddress,
            netmodel : myStore.state.netNet,
            secondnetmodel : myStore.state.secondNetNet,
            delivery : myStore.state.deliveryD,
            imgUrl: myStore.state.positive,
            isBox:false,  
        }
    },
    methods:{
        modify(){
            this.$router.push({path:'/page6'})
        },
        confirm(){
            this.isBox = true
            $('.information').hide();
            $('.left-margin').hide();
            $('#page5').hide();
            $('#page5-sub').hide();            
        },
        backHandle(){  //返回上级路由
            this.$router.back()
        }, 
        sure(){
            if(this.isBox == true) this.isBox = false            
        },
    },
    template:`
    <div class="page5"> 
        <div :class="{warnMark: isBox}">
            <div class="warnBox" :class="{warnAnmit: isBox}">
                <h3>温馨提示</h3>
                <p>您的信息已提交！敬请等待结果</p>
                <button @click="sure">确定</button>
            </div>
        </div>           
        <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡"> 
        <div class="page3-title left-margin">
            <div @click="backHandle" class="fl backRouter"><返回</div>
            <div class="title fl">您输入的信息如下所示，请检查是否正确</div>
        </div> 
        <div class="information">
            <p>姓名 : {{in_value}}</p>
            <p>证件类型 : {{onetypemodel}}</p> 
            <p>证件号码：{{idmodel}}</p>            
            <p>手机号码：{{telmodel}}</p>            
            <p>性别：{{sexmodel}}</p>            
            <p>出生日期：{{birthmodel}}</p>            
            <p>国籍/地区：{{countrymodel}}</p>            
            <p>民族：{{nationmodel}}</p>            
            <p>职业：{{occupationmodel}}</p>            
            <p>证件类型：{{idTypemodel}}</p>            
            <p>证件起始日期：{{startmodel}}</p>
            <p>证件截止日期：{{endmodel}}</p> 
            <p>固定电话：{{fixedmodel}}</p>           
            <p>通讯地址：{{addressmodel}}</p> 
            <p>上海市投递地址：{{delivery}}</p>          
            <p>自领网店：{{netmodel}}</p>
            <p>{{secondnetmodel}}</p>
            <img :src="imgUrl">
        </div>    
        <button @click="modify" id="page5">返回修改</button>                
        <button @click="confirm" id="page5-sub">确认提交</button>              
    </div>
    `
}
var page6 = {
    data(){
        return{            
            isBox : false
        }
    },
    mounted() { 
        myStore.state.positive = this.imgUrl;  
    },    
    methods:{
        fn1() {            
            myStore.state.positive = this.imgUrl;                                
        },
        //提交判断
        sub(){
            if($('#img_z').val()==null||$('#img_z').val()==''){
                this.isBox = true
                return false;
            }
            if($('#img_f').val()==null||$('#img_f').val()==''){
                this.isBox = true
                return false;
            }
            if($('#img_z').val()!=null||$('#img_z').val()!=''||$('#img_f').val()!=null||$('#img_f').val()!=''){
                this.isBox = true
                this.$router.push({path:"/page5"})
            }
        },
        backHandle(){  //返回上级路由
            this.$router.back()
        }, 
        sure(){
            if(this.isBox == true) this.isBox = false            
         },
    },
    template:`
    <div class="page6">
        <div :class="{warnMark: isBox}">
            <div class="warnBox" :class="{warnAnmit: isBox}">
                <h3>温馨提示</h3>
                <p>请完成上传身份证照！</p>
                <button @click="sure">确定</button>
            </div>
        </div>
        <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡"> 
        <div class="left-margin">
            <div @click="backHandle" class="fl backRouter"><返回</div>
            <div class="title fl">请上传身份证正反面照片，确保图片清晰，四角完整</div>
        </div>                      
        <div class="id_img_wp">
            <input type="file" accept="image/*" onchange="getzImg(this)" style="display:none" value="" id="img_z"/>
            <input type="file" accept="image/*" onchange="getfImg(this)" value="" id="img_f" style="display:none"/>
            <div class="img_wp" onclick="zhengmian()">
                <p class="img_intro">身份证正面照</p>
                <img src="img/id-Positive.jpg" id="zmz"/>
                <button class="modify">修改</button>                    
            </div>
            <div class="img_wp" onclick="fanmian()">
                <p class="img_intro">身份证反面照</p>
                <img src="img/id-back.jpg" id="fmz"/>
                <button class="modify">修改</button>                    
            </div>
        </div>
        <p style="text-align:center;">                  
            <button type="submit" class="save_btn" @click="sub" id="page6">提交审核</button>
        </p>              
    </div>
    `
}


// 路由配置 
var router = new VueRouter({
    routes: [
        {
            path:"/page1",
            component:page1
        },
        {
            path:"/page2",
            component:page2,
            meta: { 
                 requireAuth:true
            },
        },
        {
            path:"/page3",
            component:page3,
            name:page3,
            meta: { 
                requireAuth:true
           },
        }, 
        {
            path:"/page4",
            component:page4
        }, 
        {
            path:"/page5",
            component:page5
        },  
        {
            path:"/page6",
            component:page6
        }, 
                      
// 路由重定向，保证打开页面的时候显示在设置的页面中（本demo设置的为推荐页/recommend）
        {
            path:"*",
            redirect: "/page1"
        }
    ]
})



let vm = new Vue({
    el:"#app", 
    router:router,  //路由 
    store:myStore,
    mounted:function(){
        console.log(this)//控制台
    }, 
    data:{
        isShow:false,        
    },
    //组件
    components:{
        page1:page1,
        apply:apply,
        code2: codeComponent
    },
    //方法
    methods:{
        backHandle(){  //返回上级路由
           this.$router.back()
        }, 
    },  
    //监听事件变换
    watch:{
        '$route' (to,from){  //监听路由是否是第一屏
            if(to.path == '/page1'){
                this.isShow = false
            }else{
                this.isShow = true
            }; 
        },        
        //监听路由发生变化时执行
        /*$route: {
            handler: function(val, oldVal){
                console.log(val,oldVal);
            },
            // 深度观察监听
            deep: true
        }*/
    },  
})


$(document).ready(function(){
    //固定尺寸
    let w = window.screen.width;    
    if(w > 750){
        $('#app').css({width:'750px'})
    }else{
        $('#app').css({width:'100%'})
    }     
   
})