(this["webpackJsonpinvoice-generator"]=this["webpackJsonpinvoice-generator"]||[]).push([[0],{61:function(e,t,a){},65:function(e,t,a){e.exports=a(76)},70:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(14),r=a.n(n),i=(a(70),a(25),a(61),a(64)),o=a(8),m=a(7),c=a(11),d=a(5),p=a(33),h=a(63),u=a(34),E=a(35),C=a(26),N=a.n(C),y=a(28);function f(){N()(document.querySelector("#invoiceCapture"),{scale:5,useCORS:!0,dpi:96*window.devicePixelRatio,logging:!0}).then(e=>{const t=e.toDataURL("image/png",1),a=new y.a;a.internal.scaleFactor=.2;const l=a.getImageProperties(t),s=a.internal.pageSize.getWidth(),n=l.height*s/l.width;a.setFont("times"),a.addImage(t,"PNG",0,0,s,n),a.save("SLD.pdf")})}class g extends s.a.Component{render(){const e={fontFamily:"Arial, Helvetica, sans-serif "},t={fontWeight:"700"};return s.a.createElement("div",{style:e},s.a.createElement(u.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0},s.a.createElement("div",{id:"invoiceCapture"},s.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-start w-100 p-4"},s.a.createElement("div",{className:"w-100"},s.a.createElement("h4",{className:"fw-bold my-2 text-center",style:{fontFamily:'Georgia, "Times", "Times New Roman", serif',fontSize:"1rem"}},s.a.createElement("span",{style:{border:"10px solid black;",borderBottomColor:"black;",paddingBottom:"5px;"}},s.a.createElement("span",{style:{border:"1px solid transparent",borderBottomColor:"black"}}," SLD FITMENT CERTIFICATE ")," ",s.a.createElement("br",null))," ","(Generated online in VAHAN)"))),s.a.createElement("div",{className:"p-4"},s.a.createElement(o.a,{className:"mb-4",style:e},s.a.createElement(m.a,{md:4},s.a.createElement("div",null,"To,"),s.a.createElement("div",null,"The Registering Authority"),s.a.createElement("div",null,"Transport Deportment"),s.a.createElement("div",{style:t}," ",this.props.info.Sldto&&this.props.info.Sldto.toUpperCase())),s.a.createElement(m.a,{md:{span:6,offset:8}},s.a.createElement("span",{className:" mb-2",style:t},"SLD Fitment date: -",this.props.info.dateOfIssue||"")," ")),s.a.createElement(o.a,{style:e},s.a.createElement(m.a,null," ",s.a.createElement("span",{style:t},"Subject")," : Endorsement of SLD UIN no:"," ",s.a.createElement("span",{style:t},this.props.info.SLDUINno.toUpperCase())," ","and Seal No:\xa0"," ",s.a.createElement("span",{style:t},this.props.info.SealNo.toUpperCase())," ","in the vehicle registration No:\xa0"," ",s.a.createElement("span",{style:t},this.props.info.vrn.toUpperCase())," ")),s.a.createElement(o.a,{className:"my-3",style:e},s.a.createElement(m.a,null,"Dear Sir,")),s.a.createElement(o.a,{style:e},s.a.createElement(m.a,null,"It is to inform you that Mr/Ms."," ",s.a.createElement("span",{style:t},"THE PRESIDENT CORRESPONDENT")," .R/o: (",s.a.createElement("span",{style:t},this.props.info.Ro.toUpperCase()),") is fitted with SLD make:"," ",s.a.createElement("span",{style:t},this.props.info.SLDmake.toUpperCase()),", Model:"," ",s.a.createElement("span",{style:t},this.props.info.SLDModel.toUpperCase())," ","at our retro-fitment center in his/her vehicle registration number:"," ",s.a.createElement("span",{style:t},this.props.info.vrn.toUpperCase())," , Chassis No:"," ",s.a.createElement("span",{style:t},this.props.info.ChassisNo.toUpperCase()),", Engine No:"," ",s.a.createElement("span",{style:t},this.props.info.EngineNo.toUpperCase()),", Color:"," ",s.a.createElement("span",{style:t},this.props.info.vcolor.toUpperCase()),", Vehicle Model:"," ",s.a.createElement("span",{style:t},this.props.info.vmodel.toUpperCase()),", Fuel:"," ",s.a.createElement("span",{style:t},this.props.info.vfuel.toUpperCase())," ",".")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,"Our retro-fitment center is approved by state Government Transport Department for fitment of Speed Limiting Device.")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,"According to TAC/COP No :"," ",s.a.createElement("span",{style:t},this.props.info.TACCOPNo.toUpperCase())," ","Dated"," ",s.a.createElement("span",{style:t},this.props.info.TACCOPdate.toUpperCase())," ",", the SLD so fitted is type approved by for the vehicle make :"," ",s.a.createElement("span",{style:t},this.props.info.vmake.toUpperCase())," ","Vehicle Model :"," ",s.a.createElement("span",{style:t},this.props.info.vmodel.toUpperCase())," ")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,"The set speed of the vehicle is:"," ",s.a.createElement("span",{style:t},this.props.info.speed.toUpperCase())," ")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,"The SLD is duly sealed using Seal no:"," ",s.a.createElement("span",{style:t},this.props.info.SealNo.toUpperCase())," ")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,"Unique Identification Number of SLD is:"," ",s.a.createElement("span",{style:t},this.props.info.SLDUINno.toUpperCase())," ")),s.a.createElement(o.a,null,s.a.createElement(m.a,{className:"my-5"},"Registration number of the vehicle is engraved on the SLD fitted.")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement("div",null,"Thanking You "),s.a.createElement("div",null,"(Authorized Signatory)"),s.a.createElement("div",null," ","Fitment Center Name:"," ",s.a.createElement("span",{style:t},this.props.info.fcn.toUpperCase())))))),s.a.createElement("div",{className:"pb-4 px-4"},s.a.createElement(o.a,null,s.a.createElement(m.a,{md:6,className:"mx-auto"},s.a.createElement(c.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:f},s.a.createElement(E.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"))))),s.a.createElement("hr",{className:"mt-4 mb-3"}))}}var b=g;class v extends s.a.Component{constructor(e){super(e),this.editField=e=>{this.setState({[e.target.name]:e.target.value}),this.handleCalculateTotal()},this.onCurrencyChange=e=>{this.setState(e)},this.openModal=e=>{e.preventDefault(),this.handleCalculateTotal(),this.setState({isOpen:!0})},this.closeModal=e=>this.setState({isOpen:!1}),this.state={isOpen:!1,invoiceNumber:1,currentDate:"",dateOfIssue:"",Sldto:"",SLDUINno:"",SealNo:"",Ro:"",SLDmake:"",SLDModel:"",vrn:"",ChassisNo:"",EngineNo:"",vcolor:"",vmodel:"",vfuel:"",TACCOPNo:"",TACCOPdate:"",vmake:"",speed:"",fcn:"GTECH AUTOMOTIVES"},this.handleReset=this.handleReset.bind(this),this.state.items=[{id:0,name:"",description:"",price:"1.00",quantity:1}],this.editField=this.editField.bind(this)}handleReset(){this.setState({isOpen:!1,invoiceNumber:1,currentDate:"",dateOfIssue:"",Sldto:"",SLDUINno:"",SealNo:"",Ro:"",SLDmake:"",SLDModel:"",vrn:"",ChassisNo:"",EngineNo:"",vcolor:"",vmodel:"",vfuel:"",TACCOPNo:"",TACCOPdate:"",vmake:"",speed:"",fcn:"GTECH AUTOMOTIVES",items:[{id:0,name:"",description:"",price:"1.00",quantity:1}]})}componentDidMount(e){this.handleCalculateTotal()}handleRowDel(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}handleAddEvent(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"1.00",description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items)}handleCalculateTotal(){var e=this.state.items,t=0;e.map((function(e){return t=parseFloat(t+parseFloat(e.price).toFixed(2)*parseInt(e.quantity)).toFixed(2)})),this.setState({subTotal:parseFloat(t).toFixed(2)},()=>{this.setState({taxAmmount:parseFloat(parseFloat(t)*(this.state.taxRate/100)).toFixed(2)},()=>{this.setState({discountAmmount:parseFloat(parseFloat(t)*(this.state.discountRate/100)).toFixed(2)},()=>{this.setState({total:t-this.state.discountAmmount+parseFloat(this.state.taxAmmount)})})})})}onItemizedItemEdit(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},a=this.state.items.slice().map((function(e){for(var a in e)a===t.name&&e.id===t.id&&(e[a]=t.value);return e}));this.setState({items:a}),this.handleCalculateTotal()}render(){return s.a.createElement(d.a,{onSubmit:this.openModal},s.a.createElement("div",{className:"one mt-1 mt-md-5 pt-md-5 pt-3"},s.a.createElement("h2",null,"SLD FITMENT CERTIFICATE GENERATOR")),s.a.createElement(o.a,null,s.a.createElement(m.a,{md:12,lg:12},s.a.createElement(p.a,{className:"p-4 p-xl-5 my-3 my-xl-4"},s.a.createElement("div",{className:"d-flex flex-row align-items-start justify-content-between mb-1"},s.a.createElement("div",{class:"d-flex flex-column"},s.a.createElement("div",{className:"d-flex flex-column"},s.a.createElement("div",{class:"mb-2"},s.a.createElement("span",{className:"fw-bold"},"Current\xa0Date:\xa0"),s.a.createElement("span",{className:"current-date"},Object(h.a)((new Date).toLocaleDateString(),"yyyy-mm-dd"))))),s.a.createElement("div",{className:"d-flex flex-row align-items-center"},s.a.createElement("span",{className:"fw-bold d-block me-2"},"SLD Fitment Date:"),s.a.createElement(d.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:e=>this.editField(e),style:{maxWidth:"150px"},required:"required"}))),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(o.a,{className:"mb-5"},s.a.createElement(m.a,{className:"col-12 col-lg-6"},s.a.createElement(d.a.Label,{className:"fw-bold"},"SLD To:"),s.a.createElement(d.a.Control,{placeholder:"Eg : ERODE RTO",rows:3,value:this.state.Sldto,type:"text",name:"Sldto",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"SLD UIN no:"),s.a.createElement(d.a.Control,{placeholder:"Eg : ABCD13245",value:this.state.SLDUINno,type:"text",name:"SLDUINno",className:"mb-2",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Seal No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : ABC000123",value:this.state.SealNo,type:"text",name:"SealNo",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"R/o:"),s.a.createElement(d.a.Control,{placeholder:'Eg : "MAMARATHUPALAYAM",ERODE,638004,TN',rows:3,value:this.state.Ro,type:"text",name:"Ro",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"SLD Make:"),s.a.createElement(d.a.Control,{placeholder:"Eg : Mercydaz Instrumentation",value:this.state.SLDmake,type:"text",name:"SLDmake",className:"mb-2",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"SLD Model:"),s.a.createElement(d.a.Control,{placeholder:"Eg : ABC123",value:this.state.SLDModel,type:"text",name:"SLDModel",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Vehicle Registration Number:"),s.a.createElement(d.a.Control,{placeholder:"TN01AA3690",rows:3,value:this.state.vrn,type:"text",name:"vrn",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Chassis No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : WKABC4GM0053691",value:this.state.ChassisNo,type:"text",name:"ChassisNo",className:"mb-2",onChange:e=>this.editField(e),required:"required"})),s.a.createElement(m.a,{className:"col-12 col-lg-6"},s.a.createElement(d.a.Label,{className:"fw-bold"},"Engine No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : SLCAB1236",value:this.state.EngineNo,type:"text",name:"EngineNo",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Vehicle Color:"),s.a.createElement(d.a.Control,{placeholder:"Eg : BLUE",value:this.state.vcolor,type:"text",name:"vcolor",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Vehicle Model:"),s.a.createElement(d.a.Control,{placeholder:"Eg : SWARAJ MAZDA 3500",value:this.state.vmodel,type:"text",name:"vmodel",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Vehicle Fuel:"),s.a.createElement(d.a.Control,{placeholder:"Eg : DIESEL",value:this.state.vfuel,type:"text",name:"vfuel",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"TAC/COP No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : AA1234",value:this.state.TACCOPNo,type:"text",name:"TACCOPNo",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"TAC/COP Date:"),s.a.createElement(d.a.Control,{placeholder:"Eg : SLCAB1236",value:this.state.TACCOPdate,type:"date",name:"TACCOPdate",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Vehicle Make :"),s.a.createElement(d.a.Control,{placeholder:"ABC ISUZU LTD",rows:3,value:this.state.vmake,type:"text",name:"vmake",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Set Speed :"),s.a.createElement(d.a.Control,{placeholder:"Eg : 60",value:this.state.speed,type:"number",max:350,name:"speed",className:"mb-2",onChange:e=>this.editField(e),required:"required"}))),s.a.createElement(d.a.Label,{className:"fw-bold text-center"},"Fitment Center Name:"," "),s.a.createElement(d.a.Control,{placeholder:"Eg : GTECH",value:this.state.fcn,type:"text",max:350,name:"fcn",className:"mb-2 text-center",onChange:e=>this.editField(e),required:"required"}))),s.a.createElement(m.a,{md:12,lg:12},s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement(c.a,{md:12,lg:5,type:"submit",variant:"success",className:"d-block w-100  mx-auto my-3"},"Review PDF")),s.a.createElement(m.a,null,s.a.createElement(c.a,{md:12,lg:5,type:"reset",onClick:this.handleReset,variant:"danger",className:"d-block w-100  mx-auto my-3"},"Reset"))),s.a.createElement("div",{className:"sticky-top pt-md-3 pt-xl-4"},s.a.createElement(b,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total})))))}}var S=v;function x(){N()(document.querySelector("#invoiceCapture1"),{scale:5,useCORS:!0,dpi:96*window.devicePixelRatio,logging:!0}).then(e=>{const t=e.toDataURL("image/png",1),a=new y.a;a.internal.scaleFactor=.2;const l=a.getImageProperties(t),s=a.internal.pageSize.getWidth(),n=l.height*s/l.width;a.setFont("times"),a.addImage(t,"PNG",0,0,s,n),a.save("CIC.pdf")})}class A extends s.a.Component{render(){const e={fontFamily:"Arial, Helvetica, sans-serif "},t={fontFamily:"Arial, Helvetica, sans-serif ",border:"1px solid transparent",borderBottomColor:"black"};return s.a.createElement("div",{style:e},s.a.createElement(u.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0},s.a.createElement("div",{id:"invoiceCapture1 p-5"},s.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-start w-100 p-4"},s.a.createElement("div",{className:"w-100"},s.a.createElement("h4",{className:"fw-bold my-2 text-center",style:{fontFamily:'Georgia, "Times", "Times New Roman", serif',fontSize:"1rem"}},s.a.createElement("span",{style:{border:"10px solid black;",borderBottomColor:"black;"}},s.a.createElement("span",{style:t},"CERTIFICATE OF INSTALLATION OF CAMERA & REVERSE SENSOR"),s.a.createElement("br",null))))),s.a.createElement("div",{className:"p-4"},s.a.createElement(o.a,{style:e},s.a.createElement(m.a,null,"We the above named company certify that"," ",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.companyorentityname.toUpperCase())," ","has been installation of"," ",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.typeofcamera.toUpperCase())," ","and is hereby certifies as competent to install the named"," ",s.a.createElement("span",null,this.props.info.equipmentname.toUpperCase())," ","equipment.")),s.a.createElement(o.a,{style:e,className:"my-4"},s.a.createElement(m.a,null,s.a.createElement("b",null,"MODELS:"," ",s.a.createElement("span",{style:t},this.props.info.model.toUpperCase())))),s.a.createElement(o.a,{style:e},s.a.createElement(m.a,null,"The installation was carned out at"," ",s.a.createElement("span",null,this.props.info.RTOname.toUpperCase())," Regional Transport Office on the dates listed and the named person has been issued With a certificate of competency.")),s.a.createElement(o.a,null,s.a.createElement(m.a,{className:"my-2 mt-4"},s.a.createElement("b",{style:t},"INSTALLATION DELAILS"))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"REGISTRATION NO"),s.a.createElement(m.a,null," :",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.regno.toUpperCase()))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"MAKE/MODEL"),s.a.createElement(m.a,null,":",s.a.createElement("span",null,this.props.info.makemodel.toUpperCase()))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"CHASSIS NO"),s.a.createElement(m.a,null,":",s.a.createElement("span",null,this.props.info.chassisno.toUpperCase()))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"NAME & ADDRESS"),s.a.createElement(m.a,null,":",s.a.createElement("span",null,this.props.info.nameaddress.toUpperCase()))),s.a.createElement(o.a,null,s.a.createElement(m.a,{className:"my-3"},"I confirm that I installed"," ",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.model.toUpperCase())," ","is working as good condition and satisfied.")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement("span",{className:" mb-2"},"DATE:","    ",this.props.info.dateOfIssue||"")," ")))),s.a.createElement("div",{className:"pb-4 px-4"},s.a.createElement(o.a,null,s.a.createElement(m.a,{md:6,className:"mx-auto"},s.a.createElement(c.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:x},s.a.createElement(E.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"))))),s.a.createElement("hr",{className:"mt-4 mb-3"}))}}var w=A;class R extends s.a.Component{constructor(e){super(e),this.editField=e=>{this.setState({[e.target.name]:e.target.value}),this.handleCalculateTotal()},this.onCurrencyChange=e=>{this.setState(e)},this.openModal=e=>{e.preventDefault(),this.handleCalculateTotal(),this.setState({isOpen:!0})},this.closeModal=e=>this.setState({isOpen:!1}),this.state={isOpen:!1,dateOfIssue:(new Date).toISOString().substr(0,10),typeofcamera:"",companyorentityname:"",equipmentname:"REVERSE SENSOR",model:"REVERSE SENSOR & FRONT+BACK CAMERA",RTOname:"",regno:"",makemodel:"",chassisno:"",cameraserialno:"",nameaddress:""},this.handleReset=this.handleReset.bind(this),this.state.items=[{id:0,name:"",description:"",price:"1.00",quantity:1}],this.editField=this.editField.bind(this)}handleReset(){this.setState({isOpen:!1,dateOfIssue:(new Date).toISOString().substr(0,10),typeofcamera:"",companyorentityname:"",equipmentname:"REVERSE SENSOR",model:"REVERSE SENSOR & FRO.NT+BACK CAMERA",RTOname:"",regno:"",makemodel:"",chassisno:"",nameaddress:"",items:[{id:0,name:"",description:"",price:"1.00",quantity:1}]})}componentDidMount(e){this.handleCalculateTotal()}handleRowDel(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}handleAddEvent(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"1.00",description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items)}handleCalculateTotal(){var e=this.state.items,t=0;e.map((function(e){return t=parseFloat(t+parseFloat(e.price).toFixed(2)*parseInt(e.quantity)).toFixed(2)})),this.setState({subTotal:parseFloat(t).toFixed(2)},()=>{this.setState({taxAmmount:parseFloat(parseFloat(t)*(this.state.taxRate/100)).toFixed(2)},()=>{this.setState({discountAmmount:parseFloat(parseFloat(t)*(this.state.discountRate/100)).toFixed(2)},()=>{this.setState({total:t-this.state.discountAmmount+parseFloat(this.state.taxAmmount)})})})})}onItemizedItemEdit(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},a=this.state.items.slice().map((function(e){for(var a in e)a===t.name&&e.id===t.id&&(e[a]=t.value);return e}));this.setState({items:a}),this.handleCalculateTotal()}render(){return s.a.createElement(d.a,{onSubmit:this.openModal},s.a.createElement("div",{className:"one mt-1 mt-md-5 pt-md-5 pt-3"},s.a.createElement("h2",null,"CAMERA AND REVERSE SENSOR CERTIFICATE GENERATOR")),s.a.createElement(o.a,null,s.a.createElement(m.a,{md:12,lg:12},s.a.createElement(p.a,{className:"p-4 p-xl-5 my-3 my-xl-4"},s.a.createElement("div",{className:"d-flex flex-row align-items-start justify-content-between mb-1"},s.a.createElement("div",{className:"d-flex flex-row align-items-center"},s.a.createElement("span",{className:"fw-bold d-block me-2"},"Issued Date:"),s.a.createElement(d.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:e=>this.editField(e),style:{maxWidth:"150px"},required:"required"}))),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(o.a,{className:"mb-5"},s.a.createElement(m.a,{className:"col-12 col-lg-6"},s.a.createElement(d.a.Label,{className:"fw-bold"},"Company or Entity Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : EZVIZ CIC SMART TRACKING",rows:3,value:this.state.companyorentityname,type:"text",name:"companyorentityname",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Type of Camera:"),s.a.createElement(d.a.Control,{placeholder:"Eg : WI-FI CAMERA",value:this.state.typeofcamera,type:"text",name:"typeofcamera",className:"mb-2",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Equipment Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : SECURITY CAMERA",value:this.state.equipmentname,type:"text",name:"equipmentname",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Model Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : EZVIZ CIC WI-FI SECURITY CAMERA",rows:3,value:this.state.model,type:"text",name:"model",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"RTO Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : PERUNDURAI",value:this.state.RTOname,type:"text",name:"RTOname",className:"mb-2",onChange:e=>this.editField(e),required:"required"})),s.a.createElement(m.a,{className:"col-12 col-lg-6"},s.a.createElement(d.a.Label,{className:"fw-bold"},"Registration No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : TN33X0369",value:this.state.regno,type:"text",name:"regno",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Make/Model:"),s.a.createElement(d.a.Control,{placeholder:"EICHER",rows:3,value:this.state.makemodel,type:"text",name:"makemodel",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Chassis No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : WKABC4GM0053691",value:this.state.chassisno,type:"text",name:"chassisno",className:"mb-2",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Name & Address:"),s.a.createElement(d.a.Control,{placeholder:"Eg : Kongu Engineering College,Perundurai,Erode",value:this.state.nameaddress,type:"text",name:"nameaddress",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}))))),s.a.createElement(m.a,{md:12,lg:12},s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement(c.a,{md:12,lg:5,type:"submit",variant:"success",className:"d-block w-100  mx-auto my-3"},"Review PDF")),s.a.createElement(m.a,null,s.a.createElement(c.a,{md:12,lg:5,type:"reset",onClick:this.handleReset,variant:"danger",className:"d-block w-100  mx-auto my-3"},"Reset"))),s.a.createElement("div",{className:"sticky-top pt-md-3 pt-xl-4"},s.a.createElement(w,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total})))))}}var T=R;function F(){N()(document.querySelector("#invoiceCapture1"),{scale:5,useCORS:!0,dpi:96*window.devicePixelRatio,logging:!0}).then(e=>{const t=e.toDataURL("image/png",1),a=new y.a;a.internal.scaleFactor=.2;const l=a.getImageProperties(t),s=a.internal.pageSize.getWidth(),n=l.height*s/l.width;a.setFont("times"),a.addImage(t,"PNG",0,0,s,n),a.save("CIC.pdf")})}class I extends s.a.Component{render(){const e={fontFamily:"Arial, Helvetica, sans-serif "},t={fontFamily:"Arial, Helvetica, sans-serif ",border:"1px solid transparent",borderBottomColor:"black"};return s.a.createElement("div",{style:e},s.a.createElement(u.a,{show:this.props.showModal,onHide:this.props.closeModal,size:"lg",centered:!0},s.a.createElement(o.a,{className:" p-5",style:{color:"#4f5e3d"}},s.a.createElement(m.a,null," ",s.a.createElement("h1",null,"Gtech Automotives")),s.a.createElement(m.a,null,"Sri Annai Towers. ",s.a.createElement("br",null)," No. 11, ChinnaMuthu 2nd Street,")),s.a.createElement("div",{id:"invoiceCapture1 p-5"},s.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-start w-100 p-4"},s.a.createElement("div",{className:"w-100"},s.a.createElement("h4",{className:"fw-bold my-2 text-center",style:{fontFamily:'Georgia, "Times", "Times New Roman", serif',fontSize:"1rem"}},s.a.createElement("span",{style:{border:"10px solid black;",borderBottomColor:"black;"}},s.a.createElement("span",{style:t},"CERTIFICATE OF INSTALLATION OF CAMERA"),s.a.createElement("br",null))))),s.a.createElement("div",{className:"p-4"},s.a.createElement(o.a,{style:e},s.a.createElement(m.a,null,"We the above named company certify that"," ",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.companyorentityname.toUpperCase())," ","has been installation of"," ",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.typeofcamera.toUpperCase())," ","and is hereby certifies as competent to install the named"," ",s.a.createElement("span",null,this.props.info.equipmentname.toUpperCase())," ","equipment.")),s.a.createElement(o.a,{style:e,className:"my-4"},s.a.createElement(m.a,null,s.a.createElement("b",null,"MODELS:"," ",s.a.createElement("span",{style:t},this.props.info.model.toUpperCase())))),s.a.createElement(o.a,{style:e},s.a.createElement(m.a,null,"The installation was carned out at"," ",s.a.createElement("span",null,this.props.info.RTOname.toUpperCase())," Regional Transport Office on the dates listed and the named person has been issued With a certificate of competency.")),s.a.createElement(o.a,null,s.a.createElement(m.a,{className:"my-2 mt-4"},s.a.createElement("b",{style:t},"INSTALLATION DELAILS"))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"REGISTRATION NO"),s.a.createElement(m.a,null," :",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.regno.toUpperCase()))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"MAKE/MODEL"),s.a.createElement(m.a,null,":",s.a.createElement("span",null,this.props.info.makemodel.toUpperCase()))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"CHASSIS NO"),s.a.createElement(m.a,null,":",s.a.createElement("span",null,this.props.info.chassisno.toUpperCase()))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"CAMERA SERIAL NO"),s.a.createElement(m.a,null,":",s.a.createElement("span",null,this.props.info.cameraserialno.toUpperCase()))),s.a.createElement(o.a,{className:"my-2"},s.a.createElement(m.a,null,"NAME & ADDRESS"),s.a.createElement(m.a,null,":",s.a.createElement("span",null,this.props.info.nameaddress.toUpperCase()))),s.a.createElement(o.a,null,s.a.createElement(m.a,{className:"my-3"},"I confirm that I installed"," ",s.a.createElement("span",{style:{color:"darkred"}},this.props.info.model.toUpperCase())," ","is working as good condition and satisfied.")),s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement("span",{className:" mb-2"},"DATE:","    ",this.props.info.dateOfIssue||"")," ")))),s.a.createElement("div",{className:"pb-4 px-4"},s.a.createElement(o.a,null,s.a.createElement(m.a,{md:6,className:"mx-auto"},s.a.createElement(c.a,{variant:"outline-primary",className:"d-block w-100 mt-3 mt-md-0",onClick:F},s.a.createElement(E.a,{style:{width:"16px",height:"16px",marginTop:"-3px"},className:"me-2"}),"Download Copy"))))),s.a.createElement("hr",{className:"mt-4 mb-3"}))}}var O=I;class q extends s.a.Component{constructor(e){super(e),this.editField=e=>{this.setState({[e.target.name]:e.target.value}),this.handleCalculateTotal()},this.onCurrencyChange=e=>{this.setState(e)},this.openModal=e=>{e.preventDefault(),this.handleCalculateTotal(),this.setState({isOpen:!0})},this.closeModal=e=>this.setState({isOpen:!1}),this.state={isOpen:!1,dateOfIssue:(new Date).toISOString().substr(0,10),typeofcamera:"",companyorentityname:"",equipmentname:"",model:"",RTOname:"",regno:"",makemodel:"",chassisno:"",cameraserialno:"",nameaddress:""},this.handleReset=this.handleReset.bind(this),this.state.items=[{id:0,name:"",description:"",price:"1.00",quantity:1}],this.editField=this.editField.bind(this)}handleReset(){this.setState({isOpen:!1,dateOfIssue:(new Date).toISOString().substr(0,10),typeofcamera:"",companyorentityname:"",equipmentname:"",model:"",RTOname:"",regno:"",makemodel:"",chassisno:"",cameraserialno:"",nameaddress:"",items:[{id:0,name:"",description:"",price:"1.00",quantity:1}]})}componentDidMount(e){this.handleCalculateTotal()}handleRowDel(e){var t=this.state.items.indexOf(e);this.state.items.splice(t,1),this.setState(this.state.items)}handleAddEvent(e){var t={id:(+new Date+Math.floor(999999*Math.random())).toString(36),name:"",price:"1.00",description:"",quantity:1};this.state.items.push(t),this.setState(this.state.items)}handleCalculateTotal(){var e=this.state.items,t=0;e.map((function(e){return t=parseFloat(t+parseFloat(e.price).toFixed(2)*parseInt(e.quantity)).toFixed(2)})),this.setState({subTotal:parseFloat(t).toFixed(2)},()=>{this.setState({taxAmmount:parseFloat(parseFloat(t)*(this.state.taxRate/100)).toFixed(2)},()=>{this.setState({discountAmmount:parseFloat(parseFloat(t)*(this.state.discountRate/100)).toFixed(2)},()=>{this.setState({total:t-this.state.discountAmmount+parseFloat(this.state.taxAmmount)})})})})}onItemizedItemEdit(e){var t={id:e.target.id,name:e.target.name,value:e.target.value},a=this.state.items.slice().map((function(e){for(var a in e)a===t.name&&e.id===t.id&&(e[a]=t.value);return e}));this.setState({items:a}),this.handleCalculateTotal()}render(){return s.a.createElement(d.a,{onSubmit:this.openModal},s.a.createElement("div",{className:"one mt-1 mt-md-5 pt-md-5 pt-3"},s.a.createElement("h2",null,"CAMERA INSTALLATION CERTIFICATE GENERATOR")),s.a.createElement(o.a,null,s.a.createElement(m.a,{md:12,lg:12},s.a.createElement(p.a,{className:"p-4 p-xl-5 my-3 my-xl-4"},s.a.createElement("div",{className:"d-flex flex-row align-items-start justify-content-between mb-1"},s.a.createElement("div",{className:"d-flex flex-row align-items-center"},s.a.createElement("span",{className:"fw-bold d-block me-2"},"Issued Date:"),s.a.createElement(d.a.Control,{type:"date",value:this.state.dateOfIssue,name:"dateOfIssue",onChange:e=>this.editField(e),style:{maxWidth:"150px"},required:"required"}))),s.a.createElement("hr",{className:"my-4"}),s.a.createElement(o.a,{className:"mb-5"},s.a.createElement(m.a,{className:"col-12 col-lg-6"},s.a.createElement(d.a.Label,{className:"fw-bold"},"Company or Entity Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : EZVIZ CIC SMART TRACKING",rows:3,value:this.state.companyorentityname,type:"text",name:"companyorentityname",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Type of Camera:"),s.a.createElement(d.a.Control,{placeholder:"Eg : WI-FI CAMERA",value:this.state.typeofcamera,type:"text",name:"typeofcamera",className:"mb-2",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Equipment Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : SECURITY CAMERA",value:this.state.equipmentname,type:"text",name:"equipmentname",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Model Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : EZVIZ CIC WI-FI SECURITY CAMERA",rows:3,value:this.state.model,type:"text",name:"model",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"RTO Name:"),s.a.createElement(d.a.Control,{placeholder:"Eg : PERUNDURAI",value:this.state.RTOname,type:"text",name:"RTOname",className:"mb-2",onChange:e=>this.editField(e),required:"required"})),s.a.createElement(m.a,{className:"col-12 col-lg-6"},s.a.createElement(d.a.Label,{className:"fw-bold"},"Registration No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : TN33X0369",value:this.state.regno,type:"text",name:"regno",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Make/Model:"),s.a.createElement(d.a.Control,{placeholder:"EICHER",rows:3,value:this.state.makemodel,type:"text",name:"makemodel",className:"mb-2",onChange:e=>this.editField(e),autoComplete:"name",required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Chassis No:"),s.a.createElement(d.a.Control,{placeholder:"Eg : WKABC4GM0053691",value:this.state.chassisno,type:"text",name:"chassisno",className:"mb-2",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Camera Serial no:"),s.a.createElement(d.a.Control,{placeholder:"Eg : AFFDDFG",value:this.state.cameraserialno,type:"text",name:"cameraserialno",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}),s.a.createElement(d.a.Label,{className:"fw-bold"},"Name & Address:"),s.a.createElement(d.a.Control,{placeholder:"Eg : Kongu Engineering College,Perundurai,Erode",value:this.state.nameaddress,type:"text",name:"nameaddress",className:"mb-2",autoComplete:"address",onChange:e=>this.editField(e),required:"required"}))))),s.a.createElement(m.a,{md:12,lg:12},s.a.createElement(o.a,null,s.a.createElement(m.a,null,s.a.createElement(c.a,{md:12,lg:5,type:"submit",variant:"success",className:"d-block w-100  mx-auto my-3"},"Review PDF")),s.a.createElement(m.a,null,s.a.createElement(c.a,{md:12,lg:5,type:"reset",onClick:this.handleReset,variant:"danger",className:"d-block w-100  mx-auto my-3"},"Reset"))),s.a.createElement("div",{className:"sticky-top pt-md-3 pt-xl-4"},s.a.createElement(O,{showModal:this.state.isOpen,closeModal:this.closeModal,info:this.state,items:this.state.items,currency:this.state.currency,subTotal:this.state.subTotal,taxAmmount:this.state.taxAmmount,discountAmmount:this.state.discountAmmount,total:this.state.total})))))}}var L=q,D=a(38),M=a(45),k=a(44);var U=function(){return s.a.createElement("div",{className:"fixed-top"},s.a.createElement(M.a,{collapseOnSelect:!0,expand:"md",variant:"dark",className:"mx-background-top-linear"},s.a.createElement(M.a.Brand,{className:"brand"},"Gtech Automotives"),s.a.createElement(M.a.Toggle,{"aria-controls":"navbarResponsive"}),s.a.createElement(M.a.Collapse,{id:"navbarResponsive"},s.a.createElement(k.a,{className:"nav-right"},s.a.createElement(k.a.Item,null,s.a.createElement(D.b,{to:"/",className:"nav-link",activeClassName:"nav-link-active"},"SLD")),s.a.createElement(k.a.Item,null,s.a.createElement(D.b,{to:"/camera",className:"nav-link",activeClassName:"nav-link-active"},"Camera Installation")),s.a.createElement(k.a.Item,null,s.a.createElement(D.b,{to:"/ReverseSensor",className:"nav-link",activeClassName:"nav-link-active"},"Reverse Sensor"))))))},P=a(6);class G extends s.a.Component{render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(D.a,null,s.a.createElement("header",{className:"main"},s.a.createElement(U,null)),s.a.createElement(P.c,null,s.a.createElement(P.a,{path:"/",element:s.a.createElement(S,null)}),s.a.createElement(P.a,{path:"/Camera",element:s.a.createElement(L,null)}),s.a.createElement(P.a,{path:"/ReverseSensor",element:s.a.createElement(T,null)}))))}}var V=G;class B extends l.Component{constructor(e){super(e),this.handleResize=()=>{this.setState({isPCView:window.innerWidth>=768})},this.state={isPCView:!0}}componentDidMount(){this.handleResize(),window.addEventListener("resize",this.handleResize)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}render(){const{isPCView:e}=this.state;return s.a.createElement("div",{className:"App ".concat(e?"d-flex":""," flex-column align-items-center justify-content-center w-100")},e?s.a.createElement(i.a,null,s.a.createElement(V,null)):s.a.createElement("div",{className:"non-pc-view"},s.a.createElement("button",{type:"button",onClick:()=>alert("Please open this site on a PC or laptop for the optimal experience."),style:{border:"none",padding:0,backgroundColor:"transparent",cursor:"pointer"}},s.a.createElement("img",{src:"https://media.giphy.com/media/3oKGzgNfssFG1xlwC4/giphy.gif",alt:"Best Viewed on PC or Laptop",style:{maxWidth:"100%",height:"auto"}})),s.a.createElement("p",{className:"text-center mt-3"},"This content is best viewed on PC or laptop. Click the GIF to view the site on a PC or laptop for the optimal experience.")))}}var W=B;var z=e=>{e&&e instanceof Function&&a.e(5).then(a.bind(null,193)).then(t=>{let{getCLS:a,getFID:l,getFCP:s,getLCP:n,getTTFB:r}=t;a(e),l(e),s(e),n(e),r(e)})};r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(W,null)),document.getElementById("root")),z()}},[[65,1,3]]]);
//# sourceMappingURL=main.8dfb25c0.chunk.js.map