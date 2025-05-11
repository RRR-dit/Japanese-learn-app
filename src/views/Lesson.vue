<template>
  <div class="Lesson">
    <h1>問題{{ Count + 1 }}</h1>
    <div v-for="(questionGroup, index) in questions" :key="index"></div>
    <div v-for="(questionSentence, index) in questionGroup" :key="index1"></div>
    <!-- 問題を表示 -->
    <button
      v-for="(word, index) in shuffleWords"
      :key="index"
      @click="selectWords(word)"
      :class="{ selected: selectedWords.includes(word) }"
    >
      {{ word }}
    </button>
    <p>
      <strong>{{ sortWords.join('') }}</strong>
    </p>
    <button id="correct" @click="checkAnswer">そうしん！</button>
  </div>
  <button id="next" @click="nextPage">つぎへ！</button>
  <div>{{ message }}</div>
</template>
<script>
export default {
  data() {
    return {
      questions: [
        ['初音', 'ミク', 'は', '青い髪', 'の', '女の子', 'です'],
        ['鏡音', 'リン', 'と', 'レン', 'は', '双子', 'の', 'ように', '見えます'],
        ['私は', '毎日', 'ミク', 'の', '歌', 'を', '聞きます'],
        ['ルカ', 'は', '英語', 'と', '日本語', 'の', '歌', 'が', '得意', 'です'],
        ['昨日', 'レン', 'の', '新しい', '曲', 'を', '聞きました'],
        ['ミク', 'は', '2007年', 'に', 'デビュー', 'しました'],
        ['リン', 'は', '元気', 'な', '声', 'で', '歌います'],
        ['レン', 'は', 'ギター', 'が', '好き', 'です'],
        ['ルカ', 'の', '髪', 'は', 'ピンク色', 'です'],
        ['ミク', 'は', '世界中', 'で', '人気', 'が', 'あります'],
        ['KAITO', 'は', '青い', 'マフラー', 'を', 'しています'],
        ['MEIKO', 'は', '赤い', '服', 'を', '着ています'],
        ['ミク', 'の', '誕生日', 'は', '8月31日', 'です'],
        ['リン', 'と', 'レン', 'は', '一緒', 'に', '歌う', 'こと', 'が', '多い', 'です'],
        ['私は', 'ボーカロイド', 'の', 'コンサート', 'に', '行きたい', 'です'],
      ],
      Count: 0,
      sortWords: [],
      selectedWords: [],
      correctAnswer: [],
      shuffleWords: [],
      message: '',
    }
  },
  methods: {
    created() {
      this.correctAnswer = [...this.questions[this.Count]]
      const sentence = [...this.questions[this.Count]]
      this.shuffleWords = this.shuffle(sentence)
    },
    nextPage() {
      if (this.Count < this.questions.length - 1) {
        this.Count++
        this.created()
        const sentence = this.questions[this.Count]
        this.shuffleWords = this.shuffle(sentence)
        this.selectedWords = []
        this.sortWords = []
        this.message = ''
      } else {
        this.message = 'おわり！'
      }
    },
    selectWords(word) {
      if (this.selectedWords.includes(word)) {
        this.selectedWords = this.selectedWords.filter((item) => item != word)
      } else {
        this.selectedWords.push(word)
      }
      this.sortWords = [...this.selectedWords]
    },
    shuffle(arr) {
      return arr.sort(() => Math.random() - 0.5)
    },
    checkAnswer() {
      const selected = this.sortWords.join('')
      const correct = this.correctAnswer.join('')
      if (selected == correct) {
        this.message = '正解'
      } else {
        this.message = '不正解'
      }
    },
  },
  mounted() {
    this.created()
  },
}
</script>

<style>
.selected {
  color: gray;
}
</style>
