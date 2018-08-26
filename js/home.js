
 
Vue.use(Vuex)
var myStore =  new Vuex.Store({    
    state:{
        //存放组件之间共享的数据 
        name:'',
        str :""        
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
var page1 = {    
    data(){
        return {
            isShow:false,
        }       
    },
    methods:{
        check(){
            if($('#one').is(':checked') && $('#two').is(':checked')){        
                $('.agree').removeClass('gray')                                        
            }else{                    
                $('.agree').addClass('gray')
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
                <img class="agree gray" src="./img/agree.png" width="70%" alt=""> 
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

// 定义（路由）组件。
var page2 = {
    data(){
        return{
            show: true,
            count: '',
            timer: null,
        }
    },
    methods:{
          //发送验证码
          getCode(){
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.show = false;
              this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
               } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
               }
              }, 1000)
             }
          },
          name(){
            var str = document.getElementById('name').value.trim();    
            if(str.length!=0){    
                reg=/^[\u0391-\uFFE5]+$/;    
                if(!reg.test(str)){    
                    alert("对不起，您输入的字符串类型格式不正确!");//请将“字符串类型”要换成你要验证的那个属性名称！    
                }    
            }   
         },    
    },
    
    template:`
    <div class="page2">
        <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">
        <div class="page2-title">企业社保卡申请</div> 
        <form action="">
            <div class="select">
                <div class="select-l fl left-margin">请选择<span class="must">*</span></div>
                <div class="select-r fl">
                    <input type="radio" name="state" id="select01">
                    <label for="select01">境内用户(16周岁以上)</label>
                    <br>
                    <input type="radio" name="state" id="select02">
                    <label for="select02">外籍/港澳台客户(16周岁以上)</label>
                </div>                
            </div>
            <div class="form-name">
                <div class="select-l fl left-margin">                    
                    <span>姓名</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="text" id="name" placeholder="请输入您的姓名" @input="name">
                </div>
            </div>
            <div class="form-id">
                <div class="select-l fl left-margin">                    
                    <span>证件类型</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <select name="" id="select">
                        <option value="">---请选择证件类型---</option>
                        <option value="">身份证号码</option>
                        <option value="">护照</option>
                        <option value="">港澳台通行证</option>
                    </select>
                </div>
            </div>
            <div class="form-num">
                <div class="select-l fl left-margin">                    
                    <span>证件号码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="number" maxlength="18" minlength="18" placeholder="请输入您的证件号">
                </div>
            </div>
            <div class="form-tel">
                <div class="select-l fl left-margin">                    
                    <span>手机号码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="number" maxlength="11" minlength="11" placeholder="请输入您的手机号">
                </div>
            </div>
            <div class="form-code">
                <div class="select-l fl left-margin">                    
                    <span>验证码</span><span class="must">*</span> 
                </div>
                <div class="select-r fl">
                    <input type="text" placeholder="请输入验证码"><input type="button" v-show="show" @click="getCode"  class="send-code" value="发送验证码"><button v-show="!show" class="count">{{count}}'s</button>
                </div>
            </div>
            <router-link to="/page3"><button id="page3">下一步</button></router-link>             
        </form>
    </div>    
    `
}

var page3 = { 
    data(){
         return{
            text:'hello'
         }
    },  
   
    template:`
    <div class="page3">
        <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">        
        <div class="page3-title left-margin" >个人信息（必填）</div>  
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">姓名<i></i></div>
            <div class="select-r fl">
                <input type="text" placeholder="请输入您的姓名">
            </div>           
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">性别<i></i></div>
            <div class="select-r fl">
                <input type="text" placeholder="男/女">
            </div>
        </div>  
        <div class="page3-div left-margin">
            <div class="select-l fl alignment start_date_left">出生日期<i></i></div>
            <div class="select-r fl">
                <input type="date" class="date">
            </div>            
        </div>        
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">国籍/地区<i></i></div>
            <div class="select-r fl">
                <input type="text" placeholder="请输入您的地址">
            </div>             
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">民族<i></i></div>
            <div class="select-r fl">
                <select name="" id="">
                    <option value="">----- 请选择 -----</option>
                    <option value="">----- 汉 -----</option>
                </select>
            </div> 
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">职业<i></i></div>
            <div class="select-r fl">
                <select name="" id="">
                    <option value="">----- 请选择 -----</option>
                    <option value="">----- 普通员工 -----</option>
                </select>
            </div>
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">证件类型<i></i></div>
            <div class="select-r fl">
                <select name="" id="">
                    <option value="">----- 请选择 -----</option>
                    <option value="">----- 身份证 -----</option>
                </select>
            </div>
        </div>
        <div class="page3-div left-margin id-start">
            <div class="select-l fl alignment">证件起始日期<i></i></div> 
            <div class="select-r fl">          
                <input type="date">
                <input type="radio"> <span>长期有效勾选</span>
            </div>             
        </div> 
        <div class="page3-div left-margin id-end">
            <div class="select-l fl alignment">证件截止日期<i></i></div>
            <div class="select-r fl"> 
                <input type="date">
            </div>
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">证件号码<i></i></div>
            <div class="select-r fl">
                <input type="text" placeholder="请输入您的证件号码">
            </div>
        </div>
        <div class="page3-div left-margin">
            <div class="select-l fl alignment">手机号码<i></i></div>
            <div class="select-r fl">
                <input type="number" placeholder="请输入您的手机号" maxlength="11" minlength="11">
            </div>
        </div> 
        <div class="page3-div left-margin">
            <div class="select-l fl alignment select-l-end">固定电话(选填)<i></i></div>
            <div class="select-r fl select-r-end">
                <input type="number" placeholder="请输入您的固定电话">
            </div>
        </div> 
        <router-link to="/page4"><button id="page4">下一步</button></router-link>                           
    </div>
`
}
var page4 = {
    data(){
        return{
           isShow : false
        }
    }, 

    template:`
    <div class="page4">
    <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡"> 
    <div class="page3-title left-margin">地址信息（必填）</div>  
    <div class="page3-div left-margin page4-address">
        <div class="select-l fl alignment">通讯地址<i></i></div>
        <div class="select-r fl ">
            <input type="text" id="qwe" v-model="this.$store.state.name" placeholder="请输入您的地址">
            <input type="radio" name="address" id="address-radio">
            <label for="address-radio">与投递地址一致</label>
            {{this.$store.state.name}}
        </div>           
    </div> 
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">通讯地址邮编(非必填)<i></i></div>
        <div class="select-r page4-select-l fl ">
            <input type="text" id="qwe" placeholder="请输入您的地址邮编">                    
        </div>  
    </div>
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">上海市投递地址<i></i></div>
        <div class="select-r page4-select-r fl ">
            <input type="text" placeholder="请输入您的地址邮编">                    
        </div>  
    </div>
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">投递地址邮编(非必填)<i></i></div>
        <div class="select-r page4-select-r fl ">
            <input type="text" placeholder="请输入您的地址邮编">                    
        </div>  
    </div> 
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment">自领社区网点<i></i></div>
        <div class="select-r page4-select-r fl ">
            <select name="" id="">
                <option value="">----- 请选择 -----</option>
                <option value="">----- 身份证 -----</option>
            </select>                   
        </div>  
    </div>
    <div class="page4-div left-margin">
        <div class="select-l page4-select-l fl alignment"><i></i></div>
        <div class="select-r page4-select-r fl ">
            <select name="" id="">
                <option value="">----- 请选择 -----</option>
                <option value="">----- 身份证 -----</option>
            </select>                   
        </div>  
    </div>            
    <router-link to="/page5"><button id="page4">下一步</button></router-link>                           
</div>
    `
}
var page5 = {
    template:`
    <div class="page5">
    <img class="img-title" src="./img/title.jpg" width="100%" alt="招商银行社保IC卡">
    <span>姓名：</span><p>{{this.$store.state.name}}</p>
   
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
            component:page2
        },
        {
            path:"/page3",
            component:page3
        }, 
        {
            path:"/page4",
            component:page4
        }, 
        {
            path:"/page5",
            component:page5
        },       
// 路由重定向，保证打开页面的时候显示在设置的页面中（本demo设置的为推荐页/recommend）
        {
            path:"*",
            redirect: "/page1"
        }
    ]
})

new Vue({
    el:"#app", 
    router:router,  //路由 
    store:myStore,
    mounted:function(){
        console.log(this)//控制台
    }, 
    data:{
        isShow:false,
        tt :'123'          
    },
    //组件集
    components:{
        page1:page1,
    },
    //方法
    methods:{
        backHandle(){  //返回上级路由
           this.$router.back()
        }, 
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