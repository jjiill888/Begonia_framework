<script setup lang="ts">import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { invoke } from '@tauri-apps/api/core' 

const router = useRouter()

const _animate = ref({
    center: true,
    bg2: true,
    animate__animated: true,
    animate__fadeIn: true,
})

const _animateMenu = ref({
    center: true,
    animate__animated: true,
    animate__fadeIn: true,
    animate__fadeOut: false,
})

const text = '';

// 添加一个文本数组
const messages = ['春夏之交的雨，永远是那么沉闷',
'糟糕的排水设计使得下了半天雨就足以淹没寝室门口的马路，男士女生垫着脚在路肩处行走，去教学楼的路上全是形色匆匆的路人，我也是其中之一',
'嘈杂的雨声盖住了行人的喧闹，如注的雨在伞沿下，是密不透风的雨帘，雨声与雨帘一起形成了一个更沉闷的伞中世界',
'大学生活远没有高中时想象的那么美好，如果说高中是一所监狱，那么大学就是更“高级”的单人间',
'专业、性别、地域乃至理想，都是大学生之间交往的阻隔',
'高中生聚在一起，是为了一起学习，尚有交往的余地，而大学生聚在一起，只是这门课需要大家聚在一起，实际上各学各的，没有什么交集',
'在进入大学后，我很快就意识到了这一点',
'这所大学的建筑都是巴洛克风格，在阴雨灰暗的光线下，原本看起来自由浪漫的教学楼，变成了一座庄严残酷的教堂',
'我在门外收起了雨伞，像羔羊一样进入教学楼',
'利用手机与指示牌，我很快就找到了教室',
'这是一节不重要的选修课，选这门课仅仅只是为了学分罢了',
'教室内沉静的氛围，说明有不少人和我是同一个想法',
'不少人低着头玩着手机或是趴着补充凌晨熬夜消耗的能量',
'我随便找了个位置，拿出手机，没刷多久就上课了',
'这门课显然并不有趣，老师在讲台上宣讲，台下的学生都拿着手机，认真“祈祷”，偶尔抬头确认老师是否还在那',
'我自然也是个虔诚的人，但奈何门出的急，手机电量不多，于是就想听听老师讲了些什么，但那毫无波澜的语调和嘈杂的雨声又将我的思绪带去了其他地方',
'即使开了灯，这间教室也并不足够明亮，在窗外愈加晦暗的衬托下，反而形成了高气压',
'我无法在这种环境下，编织美好的幻境',
'我开始东张西望，讲台上与讲台下泾渭分明，讲台上的老师演着只有他才能听清楚的独角戏',
'讲台下的学生看着只有他们自己能看到的“书”，每个学生之间也互不打扰，莫名的有种和谐又神圣的感觉',
'雨拍打着窗户，像是气急败坏的梅菲托斯在屋外呼唤。顺着这一条思路，我开始想象，如果我是浮士德，我又会怎么做……',
'规律的白噪音使我昏昏欲睡，然而，猛然的一激灵，让我下意识看向了讲台',
'看着老师的板书，我忽然感到无比熟悉，也许上节课也写了差不多样式的板书？',
'我试着回想，但一无所获。看了眼时间，发现离下课已经不远了，我又开始回忆下课后要做些什么',
'铃声响起，我是最早走出教室的那一批，打开伞，走入雨中，从一个单人世界，走入另一个单人世界',
'因为志愿录取，我被监禁在了陌生的城市三年，一个人吃饭，一个人撑伞，过多的倾诉欲望会像刺猬伸出去的刺一样，让我们失去彼此',
'失败的寝室关系如同一块肮脏的满是破洞的臭抹布，复读了三次的寝室长一肚子市侩，坚信着读书无用，混圈子走关系才是硬道理',
'桌面摆着装饰用的书和外壳满是灰尘的笔记本电脑（我鄙视着不好好使用自己电子产品的人）',
'恋爱哥和对象亲亲我我，白日不见其踪影，只有在寝室熄灯前才会在匆匆赶来，最近又跟对象在图书馆支起来小摊考起了研',
'而我从实验室里出来以后，总是心事重重，自从和寝室长因为空调漏水吵了架之后就很少和他说过话',
'只有周彤，每天总是笑呵呵的吊儿郎当的，他无心学习，挂掉的课补考前依旧在打游戏，早上8点10分的课，8点起床',
'周五打一晚上游戏要到周六晚上才会下床吃饭，寝室里他负责扔垃圾的那天永远需要人催',
'有一段时间他倾心于班上某个女生，通过班级群加了微信，但是不知道说了什么下头话，某一天他就被人家拉黑了',
'闷闷不乐的打了几天游戏后，说自己要努力学习，刷了网课后又玩起了叫红色警戒和孢子的电脑游戏',
'这就是我的寝室，所有人都在各自的轨道中生活，按照自己的逻辑运作，我无不无一天为他们感到默哀，同时我也为自己感到悲伤',
'从大二开始，我总能感觉在某时某刻，突然感觉这件事情好像发生过，在那一瞬间，身边的事物和事情会是那么的熟悉，似乎在哪里发生过一样，似乎有人曾经跟我说过同样的话语',
'我刚刚坐在教室，正在上课，老师在讲台上讲课，在那一个位置写着，那一个板书',
'我坐在这个位置，正抬着头，或许盯着某个地方，猛然间我就会想起，这件事我好像之前经历过？',
'同样是这个老师，同样在这个位置，同样写的这个板书，身边同样的人，做着同样的事情',
'在那一刹那，我突然感觉这一切我好像都经历过，但在下一秒，我感觉就又回归了现实，想不起这是在什么时候经历的，能记起的，就是这件事情我好像真的发生过',
'他们一切的事情在这一刻都是那么的熟悉。这是为什么？它困扰了我很久',
'而且不止一次的发生过，我经常会去幻想有关时空观的问题。或许。。。。我不敢继续想下去了',
'春夏之交的雨，永远是那么沉闷。',
'春夏之交的雨，永远是那么沉闷。',
'春夏之交的雨，永远是那么沉闷。',
'春夏之交的雨，永远是那么沉闷。'] // 添加更多文本，按顺序排列

let currentMessageIndex = 0

const name = ref('Name')
const message = ref('')
const isMessaged = ref(true)
var interval: any

const menu = ref(false)

const boxClass = ref({
    box: true,
    animate__animated: true,
    animate__fadeIn: true,
})

document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        menu.value = !menu.value
    }
    if (event.key === 'Enter') {
        if (!menu.value) {
            nextMessage()
        }
    }
})

const nextMessage = () => {
    boxClass.value = {
        box: true,
        animate__animated: true,
        animate__fadeIn: true,
    }
    if (isMessaged.value) {
        typeMessage(messages[currentMessageIndex]) // 使用当前索引的文本
    } else {
        isMessaged.value = true
        clearInterval(interval)
        message.value = messages[currentMessageIndex] // 设置当前索引的文本
        boxClass.value = {
            box: true,
            animate__animated: true,
            animate__fadeIn: false,
        }
        // 更新当前文本索引，如果到达数组末尾，则重置为0
        currentMessageIndex = (currentMessageIndex + 1) % messages.length
    }
}


const typeMessage = (input: string) => {
    if (isMessaged.value) {
        isMessaged.value = false
        message.value = ''
        let currentIndex = 0
        interval = setInterval(() => {
            message.value += input[currentIndex]
            currentIndex++
            if (currentIndex === input.length) {
                clearInterval(interval)
                isMessaged.value = true
                boxClass.value = {
                    box: true,
                    animate__animated: true,
                    animate__fadeIn: false,
                }
            }
        }, 150)
    }
}
</script>

<template>
    <div :class="_animate" @click="nextMessage">
        <el-text class="mx-1" style="color: white">Game ing...</el-text>
        <div :class="boxClass">
            <div
                style="
                    margin-left: 20px;
                    margin-right: 20px;
                    margin-bottom: 10px;
                ">
                <el-row>
                    <el-col :span="12"><div></div></el-col>
                    <el-col :span="12"><div style="float: right"></div></el-col>
                </el-row>
            </div>
            <el-text class="mx-1 name">- {{ name }} -</el-text>
            <div class="message">
                <el-text class="mx-1" style="color: white">{{
                    message == '' ? text : message
                }}</el-text>
                <div class="next blinking">
                    <el-icon :size="17" color="white"><CaretBottom /></el-icon>
                </div>
            </div>
        </div>
    </div>
    <div
        v-if="menu"
        :class="_animateMenu"
        style="
            position: absolute;
            top: 0;
            background-color: rgba(0, 0, 0, 0.7);
        ">
        <div style="text-align: center; width: 100%">
            <el-text
                class="mx-1"
                size="large"
                style="color: white; font-size: 32px"
                >菜单</el-text
            >
            <br />
            <el-text class="mx-1" size="small" style="color: white"
                >（按下ESC键返回游戏）</el-text
            >
            <br /><br /><br />
            <el-button
                icon="HomeFilled"
                round
                style="width: 50%"
                @click="router.push('home')"
                >返回主页面</el-button
            >
            <br /><br />
            <el-button icon="Tools" round style="width: 50%">设置</el-button>
            <br /><br />
            <el-button
                type="danger"
                icon="CircleCloseFilled"
                round
                style="width: 50%"
                @click="invoke('exit')"
                >退出</el-button
            >
        </div>
    </div>
</template>

<style scoped>
.bg2 {
    background-image: url('/images/background/summer2.avif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.back {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
}
.name {
    color: white;
    margin-left: 20px;
    background-color: #dc7cdd;
}
.box {
    width: 100%;
    height: auto;
    padding: 20px;
    position: absolute;
    bottom: 0;
}
.message {
    padding: 20px 10px;
    margin: 0 20px 20px;
    background: linear-gradient(#dc7cdd, #e5cfe9);
}
.next {
    float: right;
    margin-top: 15px;
}
@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.blinking {
    animation: blink 1s infinite;
}
</style>
