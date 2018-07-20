const Footer = () => {
  return (
    <footer className="g-footer">
      <div className="footer-con">
        <div className="container">
          <div className="footer-top">
            <div className="col-md-8 col-lg-8">
              <div className="col-sm-3">
                <h4>帮助中心</h4>
                <ul className="list-unstyled">
                  <li><a href="#">如何获得兜礼积分</a></li>
                  <li><a href="#">积分的有效期</a></li>
                  <li><a href="#">积分如何使用</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4>了解我们</h4>
                <ul className="list-unstyled">
                  <li><a href="#">关于我们</a></li>
                  <li><a href="#">联系我们</a></li>
                  <li><a href="#">加入我们</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4>网站协议</h4>
                <ul className="list-unstyled">
                  <li><a href="#">免责声明</a></li>
                  <li><a href="#">网站使用条款</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4>合作申请</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="font_red">企业申请</a></li>
                  <li><a href="#" className="font_blue">供应商申请</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="">
                <div className="col-sm-2"></div>
                <div className="col-sm-5 footer_div">
                  <img src="../static/images/douli_app.png" />
                  <div className="img_text">扫码下载兜礼APP</div>
                </div>
                <div className="col-sm-5 footer_div">
                  <img src="../static/images/douli_weixin.png" />
                  <div className="img_text">兜礼微信公众号</div>
                </div>
              </div>
              <div className="foot-bottom_div">
                <div className="col-sm-2"></div>
                <div className="col-sm-10 tel_div">
                  <div>客服热线：400-158-2212</div>
                  <div>工作时间：周一至周五9：00-18：00</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><div className="container"> 上海睿渠网络技术有限公司   ©兜礼   沪ICP备15021038号</div></div>
      <style jsx>{`
        .g-footer{
          color: #fff;
          font-size: 14px;
          text-align: left;
          h4{
            color: #fff;
          }
        }
        .footer-con{
          height: 330px;
          padding-top: 50px;
          background: #292d3b;
        }
        .footer-top>div h4{
          font-size:20px;
          font-weight:bold;
          padding-bottom:20px;
          border-bottom:1px solid #a0a0a0;
          margin-bottom:20px;
        }
        .list-unstyled{
          padding-left: 0;
          list-style: none;
        }
        .list-unstyled li{
          line-height:20px;
        }
        .list-unstyled li a{
          color:#fff;
          text-decoration: none;
        }
        .footer_div{
          text-align: center;
        }
        .footer_div .img_text{
          text-align: center;
          margin-top: 10px;
        }
        .footer_div img{
          width: 110px;
        }
        .foot-bottom_div{
          margin-top: 40px;
        }
        .tel_div{padding-left: 28px;}
        .footer-bottom{
          background: #21242e;
          height: 60px;
          line-height: 60px;
        }
        .font_red{color:#ee3f43 !important;}
        .font_blue{color: #13b5b1 !important;}
          `}
      </style>
    </footer>
  )
}

export default Footer
