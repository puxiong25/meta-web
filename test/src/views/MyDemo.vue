<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="html"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
    />
  </div>
</template>
<script>
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import Vue from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
//  npm install @wangeditor/editor --save
//  npm install @wangeditor/editor-for-vue --save
// "@wangeditor/editor": "^5.1.23",
//     "@wangeditor/editor-for-vue": "^1.0.2",
export default Vue.extend({
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: '<p>hello</p>',
      toolbarConfig: {},
      editorConfig: {
        placeholder: '请输入内容...',
        MENU_CONF: {
          // 配置上传图片
          uploadImage: {
            fieldName: 'file',
            server: 'http://localhost:8080/reportData',
          },
          uploadVideo: {
            fieldName: 'file',
            server: 'http://localhost:8080/reportData',
            //上传大小100m
            maxFileSize: 100 * 1024 * 1024,
          },
        },
      },
      mode: 'default', // or 'simple'
    };
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    setTimeout(() => {
      this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>';
    }, 1500);
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
});
</script>

<!-- 
// 引入 wangeditor 的脚本
// <script src="/path/to/wangEditor.min.js"></script>
 
const editor = new wangEditor('editor-container'); // 指定编辑器容器
 
// 配置自定义的 video 上传方法
editor.config.uploadVideoServer = '/your/video/upload/endpoint'; // 上传视频的服务器端点
editor.config.uploadVideoName = 'video'; // 文件对应的 key
editor.config.uploadVideoParams = {
  // 其他要传的参数
};
editor.config.uploadVideoParamsWithUrl = true; // 是否把参数拼接到url上
editor.config.uploadVideoPath = '/your/video/path/'; // 视频在服务器上的路径
editor.config.uploadVideoHooks = {
  // 自定义处理服务器响应的方法
  success: function (xhr, editor, result) {
    // result 是服务器返回的结果
    // 例如：{ error: 0, url: 'http://your.video.url.com/video.mp4' }
    // 服务器返回的结果必须和这里的结构一致
    if (!result || result.error) {
      // 错误处理
      console.error('视频上传失败', result);
      return;
    }
    // 视频上传成功，插入视频到编辑器
    editor.cmd.do('insertVideo', {
      src: result.url, // 服务器返回的视频地址
      // 其他视频属性
    });
  },
  fail: function (xhr, editor, result) {
    // 错误处理
    console.error('视频上传失败', result);
  },
};
 
editor.create(); // 创建编辑器 -->
