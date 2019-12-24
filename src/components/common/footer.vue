<template>
  <div class="footer">
    <ul>
      <li v-for='(item,index) of items' :class='[ item.cls , {on:index === idx} ]' @click="$router.push(item.push)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          cls: "loan",
          name: "工单列表",
          push: "/loan"
        },
          {
            cls: "credit",
            name: "工单提交",
            push: "/credit/submit"
          },
          {
            cls: "user",
            name: "消息提醒",
            push: "/user/消息提醒"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
