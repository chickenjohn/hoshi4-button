export interface VoiceInfo {
    /**
     * 标题翻译
     */
    messages: {
        zh: string
        en?: string
        ja?: string
    }
    /**
     * 音声路径。相对于 public/voices 的路径
     */
    path: string
    /**
     * 分类标签，i18n 路径。
     * 会根据这个 tag 进行分类。
     * tag 的翻译在 locales 文件夹下 zh/en/ja 文件中的 tags 字段中设置
     */
    tag: string
    /**
     * 是否播放
     *
     * @type {boolean}
     */
    isPlay?: boolean
}
const voices: VoiceInfo[] = [
    {
        messages: {
            zh: 'moyada',
            en: '',
        },
        path: 'Cute-moyada.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: 'rua',
            en: '',
        },
        path: 'Cute-rua.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '不会唱啦',
            en: '',
        },
        path: 'Cute-不会唱啦.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '不告诉你',
            en: '',
        },
        path: 'Cute-不告诉你.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '不需要',
            en: '',
        },
        path: 'Cute-不需要.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '你不知道的事',
            en: '',
        },
        path: 'Cute-你不知道的事.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '你这么说我也不会开心',
            en: '',
        },
        path: 'Cute-你这么说我也不会开心.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '充满抛瓦',
            en: '',
        },
        path: 'Cute-充满抛瓦.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '好呀',
            en: '',
        },
        path: 'Cute-好呀.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '委屈屈',
            en: '',
        },
        path: 'Cute-委屈屈.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '害羞',
            en: '',
        },
        path: 'Cute-害羞.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '怎么哑掉了',
            en: '',
        },
        path: 'Cute-怎么哑掉了.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '我表',
            en: '',
        },
        path: 'Cute-我表.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '戳泡泡',
            en: '',
        },
        path: 'Cute-戳泡泡.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '拍肚皮',
            en: '',
        },
        path: 'Cute-拍肚皮.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '烦肆了',
            en: '',
        },
        path: 'Cute-烦肆了.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '爱听不听',
            en: '',
        },
        path: 'Cute-爱听不听.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '疑惑肆肆',
            en: '',
        },
        path: 'Cute-疑惑肆肆.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '肚肚叫惹',
            en: '',
        },
        path: 'Cute-肚肚叫惹.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '脖子抽筋',
            en: '',
        },
        path: 'Cute-脖子抽筋.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '萌萌q',
            en: '',
        },
        path: 'Cute-萌萌q.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '诶我才不信呢',
            en: '',
        },
        path: 'Cute-诶我才不信呢.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '还钱！',
            en: '',
        },
        path: 'Cute-还钱！.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: '酒醉的蝴蝶结',
            en: '',
        },
        path: 'Cute-酒醉的蝴蝶结.mp3',
        tag: 'Cute',
    },
    {
        messages: {
            zh: 'mua',
            en: '',
        },
        path: 'Gachi-mua.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '书法暴论',
            en: '',
        },
        path: 'Gachi-书法暴论.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '你们热了就开心',
            en: '',
        },
        path: 'Gachi-你们热了就开心.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '叫宝贝',
            en: '',
        },
        path: 'Gachi-叫宝贝.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '因为有你们',
            en: '',
        },
        path: 'Gachi-因为有你们.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '感谢sc',
            en: '',
        },
        path: 'Gachi-感谢sc.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '我开动了哈姆',
            en: '',
        },
        path: 'Gachi-我开动了哈姆.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '最喜欢',
            en: '',
        },
        path: 'Gachi-最喜欢.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '有点任性',
            en: '',
        },
        path: 'Gachi-有点任性.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '这是什么',
            en: '',
        },
        path: 'Gachi-这是什么.mp3',
        tag: 'Gachi',
    },
    {
        messages: {
            zh: '下午好',
            en: '',
        },
        path: 'Hello-下午好.mp3',
        tag: 'Hello',
    },
    {
        messages: {
            zh: '做个好梦',
            en: '',
        },
        path: 'Hello-做个好梦.mp3',
        tag: 'Hello',
    },
    {
        messages: {
            zh: '大家晚上豪',
            en: '',
        },
        path: 'Hello-大家晚上豪.mp3',
        tag: 'Hello',
    },
    {
        messages: {
            zh: '睡着了吗',
            en: '',
        },
        path: 'Hello-睡着了吗.mp3',
        tag: 'Hello',
    },
    {
        messages: {
            zh: '吃饱了',
            en: '',
        },
        path: 'Hiccup-吃饱了.mp3',
        tag: 'Hiccup',
    },
    {
        messages: {
            zh: '喵',
            en: '',
        },
        path: 'Hiccup-喵.mp3',
        tag: 'Hiccup',
    },
    {
        messages: {
            zh: '奇怪的嗝',
            en: '',
        },
        path: 'Hiccup-奇怪的嗝.mp3',
        tag: 'Hiccup',
    },
    {
        messages: {
            zh: '打嗝',
            en: '',
        },
        path: 'Hiccup-打嗝.mp3',
        tag: 'Hiccup',
    },
    {
        messages: {
            zh: '大耳朵',
            en: '',
        },
        path: 'Little-大耳朵.mp3',
        tag: 'Little',
    },
    {
        messages: {
            zh: '小鲤鱼',
            en: '',
        },
        path: 'Little-小鲤鱼.mp3',
        tag: 'Little',
    },
    {
        messages: {
            zh: '黑猫警长',
            en: '',
        },
        path: 'Little-黑猫警长.mp3',
        tag: 'Little',
    },
    {
        messages: {
            zh: 'daisukigogogo',
            en: '',
        },
        path: 'Mimic-daisukigogogo.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '卡祖笛',
            en: '',
        },
        path: 'Mimic-卡祖笛.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '咩',
            en: '',
        },
        path: 'Mimic-咩.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '咩咩唱打上花火',
            en: '',
        },
        path: 'Mimic-咩咩唱打上花火.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '咩啊咩啊',
            en: '',
        },
        path: 'Mimic-咩啊咩啊.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '喵喵',
            en: '',
        },
        path: 'Mimic-喵喵.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '弱气喵喵',
            en: '',
        },
        path: 'Mimic-弱气喵喵.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '象拔蚌合辑',
            en: '',
        },
        path: 'Mimic-拔蚌合辑.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '机车',
            en: '',
        },
        path: 'Mimic-机车.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '火箭',
            en: '',
        },
        path: 'Mimic-火箭.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '疑问喵喵',
            en: '',
        },
        path: 'Mimic-疑问喵喵.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '阿里嘎多咩啊',
            en: '',
        },
        path: 'Mimic-阿里嘎多咩啊.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '鸡叫',
            en: '',
        },
        path: 'Mimic-鸡叫.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '麻烦喵（真的很麻烦）',
            en: '',
        },
        path: 'Mimic-麻烦喵（真的很麻烦）.mp3',
        tag: 'Mimic',
    },
    {
        messages: {
            zh: '二次元',
            en: '',
        },
        path: 'Sneeze-二次元.mp3',
        tag: 'Sneeze',
    },
    {
        messages: {
            zh: '啊啾噜噜',
            en: '',
        },
        path: 'Sneeze-啊啾噜噜.mp3',
        tag: 'Sneeze',
    },
    {
        messages: {
            zh: '茶艺',
            en: '',
        },
        path: 'Sneeze-茶艺.mp3',
        tag: 'Sneeze',
    },
    {
        messages: {
            zh: '什么变态我喜欢',
            en: '',
        },
        path: 'Strange-什么变态我喜欢.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '你不是狗吗',
            en: '',
        },
        path: 'Strange-你不是狗吗.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '你们只是在汪汪叫',
            en: '',
        },
        path: 'Strange-你们只是在汪汪叫.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '你太快了',
            en: '',
        },
        path: 'Strange-你太快了.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '你的脸红得像苹果',
            en: '',
        },
        path: 'Strange-你的脸红得像苹果.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '啥b喵娘',
            en: '',
        },
        path: 'Strange-啥b喵娘.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '嘿嘿你也来las啊',
            en: '',
        },
        path: 'Strange-嘿嘿你也来las啊.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '在耍流氓',
            en: '',
        },
        path: 'Strange-在耍流氓.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '没朋友',
            en: '',
        },
        path: 'Strange-没朋友.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '火西肆锐评舰长',
            en: '',
        },
        path: 'Strange-火西肆锐评舰长.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '笨蛋没充钱啦',
            en: '',
        },
        path: 'Strange-笨蛋没充钱啦.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: '骗舰',
            en: '',
        },
        path: 'Strange-骗舰.mp3',
        tag: 'Strange',
    },
    {
        messages: {
            zh: 'yueyueyueyue',
            en: '',
        },
        path: 'WeirdNoise-yueyueyueyue.mp3',
        tag: 'WeirdNoise',
    },
    {
        messages: {
            zh: '哔吧哔啵boom',
            en: '',
        },
        path: 'WeirdNoise-哔吧哔啵boom.mp3',
        tag: 'WeirdNoise',
    },
    {
        messages: {
            zh: '哼哼唧唧',
            en: '',
        },
        path: 'WeirdNoise-哼哼唧唧.mp3',
        tag: 'WeirdNoise',
    },
    {
        messages: {
            zh: '歪比巴卜',
            en: '',
        },
        path: 'WeirdNoise-歪比巴卜.mp3',
        tag: 'WeirdNoise',
    },
    {
        messages: {
            zh: '略略略',
            en: '',
        },
        path: 'WeirdNoise-略略略.mp3',
        tag: 'WeirdNoise',
    },
    {
        messages: {
            zh: '长弹舌',
            en: '',
        },
        path: 'WeirdNoise-长弹舌.mp3',
        tag: 'WeirdNoise',
    },
]
export default voices
