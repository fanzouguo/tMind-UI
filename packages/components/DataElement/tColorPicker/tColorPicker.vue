<template>
<div class="m-colorPicker" ref="colorPicker" v-clickoutside="closePanel" @click="wrapperClick">
  <!-- 颜色显示小方块 -->
  <div class="colorBtn" v-bind:showColor="modelValue" :class="{ disabled: disabled }" :style="`background-color: ${showColor}`" @click="openPanel"></div>
  <!-- 颜色色盘 -->
  <div class="box" :class="{ open: openStatus }">
    <div class="hd">
      <div class="colorView" :style="`background-color: ${showPanelColor}`"></div>
      <div class="defaultColor" @click="handleDefaultColor" @mouseover="hoveColor = defaultColor" @mouseout="setHoveColor">
        默认颜色
      </div>
    </div>
    <div class="bd">
      <h3>主题颜色</h3>
      <ul class="tColor">
        <li v-for="(color, index) of tColor" :key="index" :style="{ backgroundColor: color }" @mouseover="setHoveColor(color)" @mouseout="setHoveColor" @click="updataValue(color)"></li>
      </ul>
      <ul class="bColor">
        <li v-for="(item, index) of colorPanel" :key="index">
          <ul>
            <li v-for="(color, cindex) of item" :key="cindex" :style="{ backgroundColor: color }" @mouseover="setHoveColor(color)" @mouseout="setHoveColor" @click="updataValue(color)"></li>
          </ul>
        </li>
      </ul>
      <h3>标准颜色</h3>
      <ul class="tColor">
        <li v-for="(color, index) of bColor" :key="index" :style="{ backgroundColor: color }" @mouseover="setHoveColor(color)" @mouseout="setHoveColor" @click="updataValue(color)"></li>
      </ul>
      <h3 @click="triggerHtml5Color">自定义...</h3>
      <!-- 用以激活HTML5颜色面板 -->
      <input type="color" ref="html5Color" v-model="html5Color" @change="updataValue(html5Color)" />
    </div>
  </div>
</div>
</template>

<script>
import clickoutside from '../../../directive/clickoutside';

export default {
  name: 'tColorPicker',
  directives: {
    clickoutside
  },
  props: {
    // 当前颜色值
    modelValue: {
      type: String,
      required: true
    },
    // 默认颜色
    defaultColor: {
      type: String,
      default: '#000000'
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 面板打开状态
      openStatus: false,
      // 鼠标经过的颜色块
      hoveColor: null,
      // 主题颜色
      tColor: [
        '#000000',
        '#ffffff',
        '#eeece1',
        '#1e497b',
        '#4e81bb',
        '#e2534d',
        '#9aba60',
        '#8165a0',
        '#47acc5',
        '#f9974c'
      ],
      // 颜色面板
      colorConfig: [
        ['#7f7f7f', '#f2f2f2'],
        ['#0d0d0d', '#808080'],
        ['#1c1a10', '#ddd8c3'],
        ['#0e243d', '#c6d9f0'],
        ['#233f5e', '#dae5f0'],
        ['#632623', '#f2dbdb'],
        ['#4d602c', '#eaf1de'],
        ['#3f3150', '#e6e0ec'],
        ['#1e5867', '#d9eef3'],
        ['#99490f', '#fee9da']
      ],
      // 标准颜色
      bColor: [
        '#c21401',
        '#ff1e02',
        '#ffc12a',
        '#ffff3a',
        '#90cf5b',
        '#00af57',
        '#00afee',
        '#0071be',
        '#00215f',
        '#72349d'
      ],
      html5Color: this.modelValue
    };
  },
  computed: {
    // 显示面板颜色
    showPanelColor() {
      if (this.hoveColor) {
        return this.hoveColor;
      } else {
        return this.showColor;
      }
    },
    // 显示颜色
    showColor() {
      if (this.modelValue) {
        return this.modelValue;
      } else {
        return this.defaultColor;
      }
    },
    // 颜色面板
    colorPanel() {
      const colorArr = [];
      for (const color of this.colorConfig) {
        colorArr.push(this.gradient(color[1], color[0], 5));
      }
      return colorArr;
    }
  },
  methods: {
    // 控件被点击后的响应
    wrapperClick(e) {
      e.stopPropagation();
    },
    // 设置鼠标经过时的悬浮显示色
    setHoveColor(color) {
      this.hoveColor = color || null;
    },
    openPanel() {
      this.openStatus = !this.disabled;
    },
    closePanel() {
      this.openStatus = false;
    },
    triggerHtml5Color() {
      this.$refs.html5Color.click();
    },
    // 更新组件的值 modelValue
    updataValue(val) {
      // this.$emit('input', val);
      this.$emit('update:modelValue', val);
      this.openStatus = false;
    },
    // 设置默认颜色
    handleDefaultColor() {
      this.updataValue(this.defaultColor);
    },
    // 格式化 hex 颜色值
    parseColor(hexStr) {
      if (hexStr.length === 4) {
        // hexStr = '#' + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3];
        hexStr = `#${hexStr[1]}${hexStr[1]}${hexStr[2]}${hexStr[2]}${hexStr[3]}${hexStr[3]}`;
      } else {
        return hexStr;
      }
    },
    // RGB 颜色 转 HEX 颜色
    rgbToHex(r, g, b) {
      const hex = ((r << 16) | (g << 8) | b).toString(16);
      return `#${new Array(Math.abs(hex.length - 7)).join('0')}${hex}`;
    },
    // HEX 转 RGB 颜色
    hexToRgb(hex) {
      hex = this.parseColor(hex);
      const rgb = [];
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt(`0x${hex.slice(i, i + 2)}`));
      }
      return rgb;
    },
    // 计算渐变过渡颜色
    gradient(startColor, endColor, step) {
      // 讲 hex 转换为 rgb
      const sColor = this.hexToRgb(startColor);
      const eColor = this.hexToRgb(endColor);

      // 计算R\G\B每一步的差值
      const rStep = (eColor[0] - sColor[0]) / step;
      const gStep = (eColor[1] - sColor[1]) / step;
      const bStep = (eColor[2] - sColor[2]) / step;

      const gradientColorArr = [];
      // 计算每一步的hex值
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(
          this.rgbToHex(
            parseInt(rStep * i + sColor[0]),
            parseInt(gStep * i + sColor[1]),
            parseInt(bStep * i + sColor[2])
          )
        );
      }
      return gradientColorArr;
    }
  }
};
</script>

<style lang="scss" scoped>
.m-colorPicker {
  position: relative;
  text-align: left;
  font-size: 14px;
  display: inline-block;
  outline: none;

  ul,
  li,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .colorBtn {
    width: 15px;
    height: 15px;
  }

  .colorBtn.disabled {
    cursor: no-drop;
  }

  .box {
    position: absolute;
    width: 190px;
    background: #fff;
    border: 1px solid #ddd;
    visibility: hidden;
    border-radius: 2px;
    margin-top: 2px;
    padding: 10px;
    padding-bottom: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    opacity: 0;
    transition: all 0.3s ease;
    box-sizing: content-box;

    h3 {
      margin: 0;
      font-size: 14px;
      font-weight: normal;
      margin-top: 10px;
      margin-bottom: 5px;
      line-height: 1;
      color: #333;
    }

    input {
      visibility: hidden;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  .box.open {
    visibility: visible;
    opacity: 1;
    z-index: 1;
  }

  .hd {
    overflow: hidden;
    line-height: 29px;

    .colorView {
      width: 100px;
      height: 30px;
      float: left;
      transition: background-color 0.3s ease;
    }

    .defaultColor {
      width: 80px;
      float: right;
      text-align: center;
      border: 1px solid #ddd;
      cursor: pointer;
      color: #333;
    }
  }

  .tColor {
    li {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin: 0 2px;
      transition: all 0.3s ease;
    }

    li:hover {
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
      transform: scale(1.3);
    }
  }

  .bColor {
    li {
      width: 15px;
      display: inline-block;
      margin: 0 2px;

      li {
        display: block;
        width: 15px;
        height: 15px;
        transition: all 0.3s ease;
        margin: 0;
      }

      li:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
        transform: scale(1.3);
      }
    }
  }
}
</style>
