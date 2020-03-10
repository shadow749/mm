
// 使用插件的时候，只能包含一个节点，不能包含多个，若原页面有多个，需要给原页面的多元素包裹一层父级div
// <Scroller> <div> 其他多级元素 </div> </Scroller>

<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroller',
  props: {
    handleToScroll: {
      type: Function,
      default: function () {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function () {}
    }
  },
  mounted () {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    })

    this.scroll = scroll // 方便方法toScrollTop 里取调用滑动方法

    scroll.on('scroll', (pos) => {
      this.handleToScroll(pos)
    })

    scroll.on('touchEnd', (pos) => {
      this.handleToTouchEnd(pos)
    })
  },
  methods: {
    toScrollTop (y) {
      this.scroll.scrollTo(0, y)
    }
  }
}
</script>

<style scoped>
    .wrapper{ height:100%;}
</style>
