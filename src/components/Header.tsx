import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <div className="header">
    <header>
      <div className="navbar navbar-fixed-top navbar_h">
        <div className="navbar-inner">
          <div className="container">
            <a className="brand" href="#"><img src="../static/images/logo.png" alt="logo" /></a>
            <div className="nav-collapse collapse top_title">
              <ul className="nav">
                <li className="active"><Link href="/"><a>首页</a></Link></li>
                <li><Link href="/aa"><a>服务内容</a></Link></li>
                <li><Link href="/"><a>竞争优势</a></Link></li>
                <li><Link href="/"><a>服务案例</a></Link></li>
                <li><Link href="/"><a>合作伙伴</a></Link></li>
                <li><Link href="/about"><a>关于我们</a></Link></li>
              </ul>
              <div className="apply_div">
                <div className="enterprise f-tac">企业申请</div>
                <div className="supplier f-tac">供应商申请</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <style>{`
        .navbar_h{
          min-height:100px;
          background: #fff;
          border: #fff;
          opacity: 0.8;
        }
        .navbar_h .brand{
          display: block;
          float: left;
          padding:26px 10px;
        }
        .top_title{
          float:right;
          display: block;
          margin-top: 30px;
        }
        .nav{
          list-style:none;
          display: inline-block;
        }
        .nav li{
          float:left;
          display: inline-block;
        }
        .nav li a{
          color:#313131;
        }
        .apply_div{
          float:right;
          margin-left: 20px;
        }
        .apply_div .enterprise{
          width: 110px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          display: inline-block;
          color: #ee3f43;
          border: 1px solid #ee3f43;
          border-radius: 15px;
          margin-right: 20px;
        }
        .apply_div .supplier{
          width: 110px;
          height: 30px;
          line-height: 30px;
          font-size: 14px;
          display: inline-block;
          color: #13b5b1;
          border: 1px solid #13b5b1;
          border-radius: 15px;
          margin-right: 10px;
        }
      `}
    </style>
  </div>
)

export default withRouter(Header)
