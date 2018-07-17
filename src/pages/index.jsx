// This is the Link API
import React, { Component } from 'react'
import Layout from '../index.jsx'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      partner: [
        {name: '唯品会', img: 'weipinhui.png'},
        {name: '严选', img: 'yanxuan.png'},
        {name: '1药网', img: '1yaowang.png'},
        {name: '玩途旅行', img: 'wantuo.png'},
        {name: '百丽', img: 'baili.png'},
        {name: '罗森', img: 'lousen.png'},
        {name: '大润发', img: 'darunfa.png'},
        {name: '票牛', img: 'piaoniu.png'},
        {name: '春播', img: 'cunbo.png'},
        {name: '典典养车', img: 'diandian.png'},
        {name: '宝贝在书里', img: 'baobei.png'},
        {name: '来伊份', img: 'laiyifen.png'},
        {name: '1居', img: 'yiju.png'},
        {name: '洒老板', img: 'jiulaoban.png'},
        {name: '知我药妆', img: 'zhiwo.png'},
        {name: '爱启健康', img: 'aiqi.png'},
        {name: '中民', img: 'zhongming.png'},
        {name: '联华超市', img: 'lianhua.png'}
      ]
    }
  }
  render () {
    return (
      <Layout title="兜礼首页">
        <div className="f-tac"><img src="./static/images/ad.png" alt=""/></div>
        <div>
          <div className="container">
            <div className="col-sm-4 function_div">
              <img src="../static/images/fuli/zhuansi.png" alt="" />
              <div className="f_div">
                <div className="f_title">专享权益</div>
                <div className="f_con">专属的价格体系，配套服务与活动策划</div>
              </div>
            </div>
            <div className="col-sm-4 function_div">
              <img src="../static/images/fuli/fuli.png" alt="" />
              <div className="f_div">
                <div className="f_title">弹性福利</div>
                <div className="f_con">风度多样的自选福利，加以话消费场景全覆盖</div>
              </div>
            </div>
            <div className="col-sm-4 function_div">
              <img src="../static/images/fuli/gouwu.png" alt="" />
              <div className="f_div">
                <div className="f_title">兜礼积分通</div>
                <div className="f_con">多平台多渠道无障碍的一站式购物体验</div>
              </div>
            </div>
            <div className="col-sm-4 function_div">
              <img src="../static/images/fuli/fuwu.png" alt=""/>
              <div className="f_div">
                <div className="f_title">新媒体服务</div>
                <div className="f_con">具有阅读性以及传播量的原创公众自媒体品牌</div>
              </div>
            </div>
            <div className="col-sm-4 function_div">
              <a href="../src/pages/NewServer.html">
                <img src="../static/images/fuli/new.png" alt=""/>
                <div className="f_div">
                  <div className="f_title">团建活动服务</div>
                  <div className="f_con">具有参与性、互动性以及影响力整体活动管理服务</div>
                </div>
              </a>
            </div>
            <div className="col-sm-4 function_div">
              <img src="../static/images/fuli/inter.png" alt=""/>
              <div className="f_div">
                <div className="f_title">互联网+应用服务</div>
                <div className="f_con">进行量身定制的工会互联网+平台技术翻新服务</div>
              </div>
            </div>
          </div>
        </div>
        <div className="advantage_div">
          <div className="advantage_title f-tac">竞争优势</div>
          <div className="container">
            <div className="col-sm-2">
              <img src="../static/images/advantage/7_12.png" alt=""/>
            </div>
            <div className="col-sm-2">
              <img src="../static/images/advantage/98.png" alt=""/>
            </div>
            <div className="col-sm-2">
              <img src="../static/images/advantage/30.png" alt=""/>
            </div>
            <div className="col-sm-2">
              <img src="../static/images/advantage/48.png" alt=""/>
            </div>
            <div className="col-sm-2">
              <img src="../static/images/advantage/15.png" alt=""/>
            </div>
            <div className="col-sm-2">
              <img src="../static/images/advantage/50.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="container">
            <div className="service_title f-tac">服务案例</div>
            <div>
              <img src="../static/images/service/exp_1.png" alt="" />
            </div>
            <div>
              <ul className="service_ul">
                <li className="col-sm-2 active">宝钢金属</li>
                <li className="col-sm-2">宝钢特钢</li>
                <li className="col-sm-2">宝钢技术</li>
                <li className="col-sm-2">宝钢化工</li>
                <li className="col-sm-2">宝钢工程</li>
                <li className="col-sm-2">更多团建案例</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="con_partner">
          <div className="partner_title f-tac">合作伙伴</div>
          <div className="partner_box">
            <div className="container">
              <ul>
                {
                  this.state.partner.map((item, index) => {
                    return <li className="col-md-2" key={index}><img src={`../static/images/partner/${item.img}`} alt={item.name}/> </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>

        <style jsx>{`
            .function_div{
              margin-top: 40px;
              text-align: center;
            }
            .f_div{
             margin-top: 10px;
            }
            .f_div .f_title{
                color: #c59a6d;
                font-size: 20px;
                font-weight:bold;
            }
            .f_div .f_con{
                color: #313131;
                font-size: 14px;
            }
            .advantage_div{
                margin-top: 50px;
                width: 100%;
                height: 500px;
                background: url("../static/images/advantage/advantage_bg.png")
            }
            .advantage_title{
              padding:70px 0 80px;
              color:#fff;
              font-size:40px;
              font-weight: 200;
            }
            .con_partner{
              margin-top: 70px;
            }
            .partner_title{
              height: 80px;
              font-size: 40px;
              font-weight: 200;
            }
            .partner_box{
              width: 100%;
              height: 480px;
              background: url("../static/images/content_2_bg.png");
            }
            .con_partner ul{
              list-style:none;
              margin-top: 10px;
            }
            .con_partner ul li{
              margin-top: 70px;
              height: 60px;
              line-height: 60px;
            }
            .con_partner ul li img{

            }
            /* 服务案例 */
            .service{
             margin-top: 70px;
            }
            .service_title{
              font-size: 40px;
              color: #313131;
              font-weight: 200;
              margin-bottom: 80px;
            }
            .service_ul{
              list-style: none;
              height: 60px;
              border-top: 1px solid #a0a0a0;
            }
            .service_ul li{
              color:#a0a0a0;
              font-size: 20px;
              line-height: 60px;
            }
            .service_ul li.active{
              color: #313131;
              border-bottom: 2px solid #c59a6d;
            }
             `}
        </style>
      </Layout>
    )
  }
}

export default Index
