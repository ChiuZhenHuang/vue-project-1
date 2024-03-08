"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[724],{9789:function(t,e,a){a.d(e,{Z:function(){return _}});var o=a(3396),l=a(7139);const s={class:"modal",tabindex:"-1",ref:"modal"},i={class:"modal-dialog"},n={class:"modal-content"},d=(0,o._)("div",{class:"modal-header bg-danger"},[(0,o._)("h5",{class:"modal-title"},"刪除訂單"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),c={class:"modal-body"},r={class:"modal-footer"},u=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function p(t,e,a,p,m,g){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",i,[(0,o._)("div",n,[d,(0,o._)("div",c,[(0,o._)("p",null,"是否確定要刪除訂單編號"+(0,l.zw)(a.item.id)+"?",1)]),(0,o._)("div",r,[u,(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))},"確定")])])])],512)}var m=a(1339),g={props:{item:{}},data(){return{modal:""}},mixins:[m.Z]},h=a(89);const b=(0,h.Z)(g,[["render",p]]);var _=b},7171:function(t,e,a){a.d(e,{Z:function(){return f}});var o=a(3396),l=a(9242),s=a(7139);const i={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},d={key:0,class:"page-item"},c=(0,o._)("span",{"aria-hidden":"true"},"«",-1),r=[c],u=["onClick"],p={key:1,class:"page-item"},m=(0,o._)("span",{"aria-hidden":"true"},"»",-1),g=[m];function h(t,e,a,c,m,h){return(0,o.wg)(),(0,o.iD)("nav",i,[(0,o._)("ul",n,[a.pages.has_pre?((0,o.wg)(),(0,o.iD)("li",d,[(0,o._)("a",{class:"page",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,l.iM)((t=>h.previousPage(a.pages)),["prevent"]))},r)])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages.total_pages,(t=>((0,o.wg)(),(0,o.iD)("li",{class:"page-item",key:t},[(0,o._)("a",{class:(0,s.C_)(["page",{active:t===a.pages.current_page}]),href:"#",onClick:(0,l.iM)((e=>h.updatePage(t)),["prevent"])},(0,s.zw)(t),11,u)])))),128)),a.pages.has_next?((0,o.wg)(),(0,o.iD)("li",p,[(0,o._)("a",{class:"page",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,l.iM)((t=>h.nextPage(a.pages)),["prevent"]))},g)])):(0,o.kq)("",!0)])])}var b={props:["pages"],data(){return{nowPage:""}},methods:{updatePage(t){this.$emit("emit-pages",t),this.nowPage=t,this.scrollToPosition()},previousPage(t){this.nowPage=t.current_page,this.nowPage>1?this.nowPage--:this.nowPage=1,this.updatePage(this.nowPage)},nextPage(t){this.nowPage=t.current_page,this.nowPage<t.total_pages?this.nowPage++:this.nowPage=t.total_pages,this.updatePage(this.nowPage)},scrollToPosition(){"user-shopping"===this.$route.name&&window.scrollTo({top:325,behavior:"smooth"})}}},_=a(89);const P=(0,_.Z)(b,[["render",h]]);var f=P},3724:function(t,e,a){a.r(e),a.d(e,{default:function(){return pt}});var o=a(3396),l=a(7139);const s={class:"text-end"},i={class:"table mt-4 admin"},n=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},c={class:"text-right"},r={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],g=["onClick"];function h(t,e,a,h,b,_){const P=(0,o.up)("LoadingComponent"),f=(0,o.up)("Pagination"),w=(0,o.up)("ProductModal"),v=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P,{active:b.isLoading},null,8,["active"]),(0,o._)("div",s,[(0,o._)("button",{type:"button",class:"btn btn-dark",onClick:e[0]||(e[0]=t=>_.openModal(!0))},"增加一個產品")]),(0,o._)("table",i,[n,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.products,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,l.zw)(e.category),1),(0,o._)("td",null,(0,l.zw)(e.title),1),(0,o._)("td",d,(0,l.zw)(t.$filters.currency(e.origin_price)),1),(0,o._)("td",c,(0,l.zw)(t.$filters.currency(e.price)),1),(0,o._)("td",null,[e.is_enabled?((0,o.wg)(),(0,o.iD)("span",r,"啟用")):((0,o.wg)(),(0,o.iD)("span",u,"未啟用"))]),(0,o._)("td",null,[(0,o._)("div",p,[(0,o._)("button",{class:"btn btn-outline-dark btn-sm",onClick:t=>_.openModal(!1,e)},"編輯",8,m),(0,o._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>_.openDelProductModal(e)},"刪除",8,g)])])])))),128))])]),(0,o.Wm)(f,{pages:b.pagination,onEmitPages:_.getProducts},null,8,["pages","onEmitPages"]),(0,o.Wm)(w,{ref:"productModal",product:b.tempProduct,onUpdateProduct:_.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.Wm)(v,{ref:"delModal",item:b.tempProduct,onDelItem:_.delProduct},null,8,["item","onDelItem"])],64)}a(560);var b=a(9242);const _={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},w=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"新增產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},y={class:"row"},k={class:"col-sm-4"},x={class:"mb-3"},M=(0,o._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},C=(0,o._)("label",{for:"customFile",class:"form-label"},[(0,o.Uk)("或 上傳圖片 "),(0,o._)("i",{class:"fas fa-spinner fa-spin"})],-1),$=["src"],U={key:0,class:"mt-5"},V=["onUpdate:modelValue"],Z=["onClick"],L={key:0},z={class:"col-sm-8"},F={class:"mb-3"},j=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),q={class:"row gx-2"},H={class:"mb-3 col-md-6"},I=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),N={class:"mb-3 col-md-6"},W=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),Y={class:"row gx-2"},K={class:"mb-3 col-md-6"},T=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),E={class:"mb-3 col-md-6"},S=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),O=(0,o._)("hr",null,null,-1),A={class:"mb-3"},B=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),G={class:"mb-3"},J=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),Q={class:"mb-3"},R={class:"form-check"},X=(0,o._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),tt={class:"modal-footer"},et=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function at(t,e,a,l,s,i){return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",P,[(0,o._)("div",f,[w,(0,o._)("div",v,[(0,o._)("div",y,[(0,o._)("div",k,[(0,o._)("div",x,[M,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[b.nr,s.tempProduct.imageUrl]])]),(0,o._)("div",D,[C,(0,o._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)]),(0,o._)("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,$),s.tempProduct.images?((0,o.wg)(),(0,o.iD)("div",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.tempProduct.images,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-3 input-group",key:e},[(0,o.wy)((0,o._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>s.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,V),[[b.nr,s.tempProduct.images[e]]]),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.tempProduct.images.splice(e,1)}," 移除 ",8,Z)])))),128)),s.tempProduct.images[s.tempProduct.images.length-1]||!s.tempProduct.images.length?((0,o.wg)(),(0,o.iD)("div",L,[(0,o._)("button",{class:"btn btn-outline-dark btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>s.tempProduct.images.push(""))}," 新增圖片 ")])):(0,o.kq)("",!0)])):(0,o.kq)("",!0)]),(0,o._)("div",z,[(0,o._)("div",F,[j,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[b.nr,s.tempProduct.title]])]),(0,o._)("div",q,[(0,o._)("div",H,[I,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[b.nr,s.tempProduct.category]])]),(0,o._)("div",N,[W,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[b.nr,s.tempProduct.unit]])])]),(0,o._)("div",Y,[(0,o._)("div",K,[T,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[b.nr,s.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",E,[S,(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[b.nr,s.tempProduct.price,void 0,{number:!0}]])])]),O,(0,o._)("div",A,[B,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[b.nr,s.tempProduct.description]])]),(0,o._)("div",G,[J,(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[b.nr,s.tempProduct.content]])]),(0,o._)("div",Q,[(0,o._)("div",R,[(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[b.e8,s.tempProduct.is_enabled]]),X])])])])]),(0,o._)("div",tt,[et,(0,o._)("button",{type:"button",class:"btn btn-dark",onClick:e[11]||(e[11]=e=>t.$emit("update-product",s.tempProduct))}," 確認 ")])])])],512)}var ot=a(1339),lt={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},mixins:[ot.Z],methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/cc45001127-api/admin/upload";this.$http.post(a,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}}},st=a(89);const it=(0,st.Z)(lt,[["render",at]]);var nt=it,dt=a(9789),ct=a(7171),rt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:nt,DelModal:dt.Z,Pagination:ct.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/cc45001127-api/admin/products?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const a=this.$refs.productModal;a.showModal()},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal(),console.log(t)},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/cc45001127-api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{const e=this.$refs.delModal;e.hideModal(),t.data.success&&(this.getProducts(),this.emitter.emit("push-message",{style:"warning",title:"已刪除產品"}))}))},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/cc45001127-api/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/cc45001127-api/admin/product/${t.id}`,a="put");const o=this.$refs.productModal;this.$http[a](e,{data:this.tempProduct}).then((t=>{console.log(t),o.hideModal(),t.data.success?(this.getProducts(),this.$httpMessageState(t)):this.$httpMessageState(t)}))}},created(){this.getProducts()}};const ut=(0,st.Z)(rt,[["render",h]]);var pt=ut}}]);
//# sourceMappingURL=724.19222891.js.map