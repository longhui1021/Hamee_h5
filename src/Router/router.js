import Loadable from 'react-loadable';
// 邀请购买礼包流程页面

// import OrderPage from '../pages/Order/OrderPage';
// import ProductList from '../pages/ProductList/ProductList';
// import ProductDetails from '../pages/ProductDetails/ProductDetails';


const loadable = (filename) => Loadable({
    loader:() => import("../pages"+filename),
    loading:() => ('')
});


//路由配置对象
const routers = [
    // 邀请购买礼包流程页面
    {
        path:'/',
        exact:true,
        component:loadable("/Invite/InvitePage")
    },
    {
        path:'/Login',
        component:loadable("/Login/Login")
    },
    {
        path:'/SignUp',
        component:loadable("/SignUp/SignUpPage")
    },
    {
        path:'/OrderPage',
        component:loadable("/Order/OrderPage")
    },
    {
        path:'/addAreaPage',
        component:loadable("/addArea/addAreaPage")
    },
    {
        path:'/ProductList',
        component:loadable("/ProductList/ProductList")
    },
    {
        path:'/ProductDetails',
        component:loadable("/ProductDetails/ProductDetails")
    },
    {
        path:'/GoDownloadPage',
        component:loadable("/GoDownload/GoDownloadPage")
    },
    {
        path:'/ShareDetails',
        component:loadable("/ProductDetails/ShareDetails")
    },
    //条约页面
    {
        path:'/UserAgreement',
        component:loadable("/UserAgreement/UserAgreement")
    },
    //退款协议
    {
        path:'/ReturnAgreement',
        component:loadable("/UserAgreement/ReturnAgreement")
    },
    //提现完成分享页面*
    {
        path:'/WithdrawShare',
        component:loadable("/WithdrawShare/WithdrawShare")
    },
    //商学院页面
    {
        // Hamee新人攻略
        path:'/NewcomerStrategy',
        component:loadable("/HameeBusinessSchool/NewcomerStrategy")
    },
    {
        // 一对一沟通技巧
        path:'/CommunicationSkills',
        component:loadable("/HameeBusinessSchool/CommunicationSkills")
    },
    {
        // 新手小白如何寻找第一批客户
        path:'/FindCustomer',
        component:loadable("/HameeBusinessSchool/FindCustomer")
    },
    {
        // 发圈技巧
        path:'/HairCircleTechnique',
        component:loadable("/HameeBusinessSchool/HairCircleTechnique")
    },
    {
        // 地推吸粉三部曲
        path:'/PowderAbsorption',
        component:loadable("/HameeBusinessSchool/PowderAbsorption")
    },
    {
        // 如何开展新人特训
        path:'/NewcomerSpecialTraining',
        component:loadable("/HameeBusinessSchool/NewcomerSpecialTraining")
    },
    {
        //新会员用户手册
        path:'/NewVipHandbook',
        component:loadable("/HameeBusinessSchool/NewVipHandbook")
    },
    {
        //Hamee 等级晋升制度
        path:'/VipDesc',
        component:loadable("/HameeBusinessSchool/MemberDescription")
    },
    // 发送给客服的商品详情
    {
        path:'/Details',
        component:loadable("/Detail/Details")
    },
    {
        path:'/BCAPay',
        component:loadable("/BCAPay/BCAPay")
    },
];

export {routers}
