import TranslateServiceEnum from '../../../enums/TranslateServiceEnum'
import TencentCloudChannel from '../product/translate/TencentCloudChannel'
import TTimeChannel from '../product/translate/TTimeChannel'
import BaiduChannel from '../product/translate/BaiduChannel'
import AliyunChannel from '../product/translate/AliyunChannel'
import GoogleChannel from '../product/translate/GoogleChannel'
import OpenAIChannel from '../product/translate/OpenAIChannel'
import YouDaoChannel from '../product/translate/YouDaoChannel'
import DeepLChannel from '../product/translate/DeepLChannel'
import VolcanoChannel from '../product/translate/VolcanoChannel'
import '../product/translate/AgentChannel'

const ttimeChannel = new TTimeChannel()
const tencentCloudChannel = new TencentCloudChannel()
const baiduChannel = new BaiduChannel()
const aliyunChannel = new AliyunChannel()
const googleChannel = new GoogleChannel()
const openAIChannel = new OpenAIChannel()
const youDaoChannel = new YouDaoChannel()
const deepLChannel = new DeepLChannel()
const volcanoChannel = new VolcanoChannel()

/**
 * 选择渠道工厂
 */
class TranslateChannelFactory {
  /**
   * 翻译
   *
   * @param type 翻译服务类型
   * @param info 翻译信息
   */
  static translate(type: TranslateServiceEnum, info: object): void {
    if (TranslateServiceEnum.TTIME === type) {
      ttimeChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.TENCENT_CLOUD === type) {
      tencentCloudChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.BAIDU === type) {
      baiduChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.ALIYUN === type) {
      aliyunChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.GOOGLE === type) {
      googleChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.OPEN_AI === type) {
      openAIChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.YOU_DAO === type) {
      youDaoChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.DEEP_L === type) {
      deepLChannel.apiTranslate(info)
    } else if (TranslateServiceEnum.VOLCANO === type) {
      volcanoChannel.apiTranslate(info)
    }
  }

  /**
   * 选择翻译校验
   *
   * @param type 翻译服务类型
   * @param info 翻译信息
   */
  static translateCheck(type: TranslateServiceEnum, info: object): void {
    info = {
      ...info,
      ...this.buildTranslateCheckRequestInfo()
    }
    if (TranslateServiceEnum.TENCENT_CLOUD === type) {
      tencentCloudChannel.apiTranslateCheck(info)
    } else if (TranslateServiceEnum.BAIDU === type) {
      baiduChannel.apiTranslateCheck(info)
    } else if (TranslateServiceEnum.ALIYUN === type) {
      aliyunChannel.apiTranslateCheck(info)
    } else if (TranslateServiceEnum.GOOGLE === type) {
      googleChannel.apiTranslateCheck(info)
    } else if (TranslateServiceEnum.OPEN_AI === type) {
      openAIChannel.apiTranslateCheck(info)
    } else if (TranslateServiceEnum.YOU_DAO === type) {
      youDaoChannel.apiTranslateCheck(info)
    } else if (TranslateServiceEnum.DEEP_L === type) {
      deepLChannel.apiTranslateCheck(info)
    } else if (TranslateServiceEnum.VOLCANO === type) {
      volcanoChannel.apiTranslateCheck(info)
    }
  }

  /**
   * 构建翻译校验请求信息
   */
  static buildTranslateCheckRequestInfo = (): object => {
    return {
      channel: 0,
      translateContent: '1',
      languageType: 'auto',
      languageResultType: 'en'
    }
  }
}

export default TranslateChannelFactory
