import Layout from '../index'

export default () => (
  <Layout title="关于我们">
    <div className="f-tac"><img src="./static/images/about.png" alt=""/></div>
    <div className="container">
      <div className="tips">
        兜礼员工服务平台是现代企业智慧福利解决方案的服务商。通过整合线上线下多渠道资源，为企业员工带来衣、食、住、行、医、娱、乐、商等八大领域的更多普惠服务，力争为企业员工开拓更多更优质的弹性福利场景，更精准的完成需求匹配。
      </div>
      <div className="m-time">
        <div className="time-tit f-tac">我们的历程</div>
        <ui>
          <li>
            <div className="">
              2011
            </div>
            <div className="time-content">2011年，在英国创立everydaysale，与超过6000家英国品牌合作，被英国TIMES泰晤士时报评为全英国三大折扣服务网站之一。</div>
          </li>
        </ui>
      </div>
    </div>
    <style jsx>{`
        .tips{
          margin: 78px 0 95px;
          font-size: 18px;
        }
        .m-time{
          font-size: 16px;
          .time-tit{
            font-size: 36px;
          }
          .time-content{
            border-left: 1px solid #d4d4d4;
          }
        }

        `}
    </style>
  </Layout>
)
