<template>
  <div>
    <br>
    <h4 class="text-center">满意度小调查</h4>
    <h6 class="text-center">共{{questions.length}}题</h6>
    <div  v-for="(item, index) in questions" :key="item.title">
        <h6>{{index+1}}.{{item.title}}</h6>
        <div class="radio" style="margin-left:20px;">
            <label><input type="radio" v-model="results[index]" value="1" />{{item.choice1}}</label>
        </div>
        <div class="radio" style="margin-left:20px;">
            <label><input type="radio" v-model="results[index]" value="2" />{{item.choice2}}</label>
        </div>
        <div class="radio" style="margin-left:20px;">
            <label><input type="radio" v-model="results[index]" value="3" />{{item.choice3}}</label>
        </div>
        <div class="radio" style="margin-left:20px;">
            <label><input type="radio" v-model="results[index]" value="4" />{{item.choice4}}</label>
        </div>
        <br>
    </div>
    <button type="button" class="btn btn-primary btn-block" @click="submit" >提交</button>
</div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            questions: [
                {
                    title: "您对自己所学的专业满意吗？",
                    choice1: "满意",
                    choice2: "基本满意",
                    choice3: "不满意",
                    choice4: "不确定"
                },
                {
                    title: "您对自己在校的表现满意吗？",
                    choice1: "满意",
                    choice2: "基本满意",
                    choice3: "不满意",
                    choice4: "不确定"
                },
                {
                    title: "您对自己的学习成绩满意吗？",
                    choice1: "满意",
                    choice2: "基本满意",
                    choice3: "不满意",
                    choice4: "不确定"
                }
            ],
            results:[]
        }
    },
    methods: {
        submit() {
            for(var i=0;i<this.questions.length;i++){
                if (this.results[i]==null){
                    alert("第"+(i+1).toString()+"还没有选择！");
                    return;
                }
            }

            this.$store.commit('addResult', this.results);

            this.$router.push({
                path: 'end',
              
            })
        }
    }
}
</script>

