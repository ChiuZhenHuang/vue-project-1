"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[928],{928:function(s,e,t){t.r(e),t.d(e,{default:function(){return y}});var o=t(3396),n=t(9242);const i={class:"container-fluid",id:"login"},a={class:"mask d-flex justify-content-center align-items-center"},r={class:"col-9 mt-5 mb-5 login-frame"},l=(0,o._)("h1",{class:"h3 mb-3 font-weight-normal login-title"},"Login",-1),u=(0,o._)("i",{class:"bi bi-arrow-90deg-up"},null,-1),d={class:"mb-2"},c=(0,o._)("label",{for:"inputEmail"},"Email address",-1),p={class:"mb-2"},m=(0,o._)("label",{for:"inputPassword"},"Password",-1),w={class:"password-input"},h=["type"],f=(0,o._)("div",{class:"mt-4 w-100 d-flex justify-content-end"},[(0,o._)("button",{class:"btn login-button",type:"submit"},"登入")],-1);function b(s,e,t,b,g,_){const k=(0,o.up)("ToastMessages"),v=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(k),(0,o._)("form",{class:"row h-100 justify-content-center align-items-center",onSubmit:e[4]||(e[4]=(0,n.iM)(((...s)=>_.signIn&&_.signIn(...s)),["prevent"]))},[(0,o._)("div",a,[(0,o._)("div",r,[l,(0,o.Wm)(v,{to:"/",class:"btn go-home"},{default:(0,o.w5)((()=>[u,(0,o.Uk)(" 回首頁")])),_:1}),(0,o._)("div",d,[c,(0,o.wy)((0,o._)("input",{type:"email",id:"inputEmail",class:"form-control",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>g.user.username=s)},null,512),[[n.nr,g.user.username]])]),(0,o._)("div",p,[m,(0,o._)("div",w,[(0,o.wy)((0,o._)("input",{type:g.showPassword?"text":"password",id:"inputPassword",class:"form-control",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>g.user.password=s)},null,8,h),[[n.YZ,g.user.password]]),g.showPassword?((0,o.wg)(),(0,o.iD)("i",{key:0,class:"bi bi-eye",onClick:e[2]||(e[2]=(0,n.iM)((s=>g.showPassword=!g.showPassword),["prevent"]))})):((0,o.wg)(),(0,o.iD)("i",{key:1,class:"bi bi-eye-slash",onClick:e[3]||(e[3]=(0,n.iM)((s=>g.showPassword=!g.showPassword),["prevent"]))}))])]),f])])],32)])}t(560);var g=t(8032),_={data(){return{user:{username:"",password:""},showPassword:!1}},components:{ToastMessages:g.Z},inject:["emitter"],methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:t}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(t)}`,this.$router.push("./dashboard/productComponent")}else this.emitter.emit("push-message",{style:"danger",title:"登入失敗，請重新再試"})}))}}},k=t(89);const v=(0,k.Z)(_,[["render",b]]);var y=v}}]);
//# sourceMappingURL=928.af42459c.js.map