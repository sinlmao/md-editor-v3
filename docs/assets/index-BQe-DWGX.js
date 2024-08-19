import{d as i,a9 as a,a as s,w as m,aa as p,ah as l,ad as c,c as t}from"./index-mstXR5Qg.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang-C8FZeH5G.js";import{_ as f}from"./index.vue_vue_type_style_index_0_lang-FAaUKv8z.js";import"./index-BABYOLP-.js";import"./index3-zO_LtZQv.js";const r=`## 🧙🏼 Upgrade from 3.x to 4.x

### 🏄🏼 Usage

Starting from version 4.0, supports on-demand importing components and no longer exporting default editor.

#### 🏄🏼‍♂️ CDN

\`\`\`diff
- <script src="https://unpkg.com/md-editor-v3@latest/lib/md-editor-v3.umd.js"><\/script>
+ <script src="https://unpkg.com/md-editor-v3@latest/lib/umd/index.js"><\/script>
<script>
  const App = {
    data() {
      return {
        text: 'Hello Editor!!'
      };
    }
  };
- Vue.createApp(App).use(MdEditorV3).mount('#md-editor-v3');
+ Vue.createApp(App).use(MdEditorV3.MdEditor).mount('#md-editor-v3');
<\/script>
\`\`\`

#### 🏄🏼‍♀️ ES Module

\`\`\`diff
<script setup>
- import MdEditor from 'md-editor-v3';
- const NormalToolbar = MdEditor.NormalToolbar;
- const DropdownToolbar = MdEditor.DropdownToolbar;
- const ModalToolbar = MdEditor.ModalToolbar;
- const MdCatalog = MdEditor.MdCatalog;
+ import { MdEditor, NormalToolbar, DropdownToolbar, ModalToolbar, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
<\/script>
\`\`\`

### 🔖 Props

| name        | description                       |
| ----------- | --------------------------------- |
| previewOnly | deleted, replace with \`MdPreview\` |

### 🪤 Internal Components

New component \`MdPreview\` and replacing the attribute \`previewOnly\`.

\`\`\`diff
<template>
- <MdEditor previewOnly />
+ <MdPreview />
</template>

<script setup>
- import MdEditor from 'md-editor-v3';
+ import { MdPreview } from 'md-editor-v3';
- import 'md-editor-v3/lib/style.css';
+ import 'md-editor-v3/lib/preview.css';
<\/script>
\`\`\`

---

## 🧙🏻‍♂️ Upgrade from 2.x to 3.x

This is the content that 3.x is incompatible with version 2.x only.

### 🤹🏼‍♂️ Grammar

- Strikethrough

  \`\`\`diff
  - ~It is a dream deeply rooted in the American dream.~
  + ~~It is a dream deeply rooted in the American dream.~~
  \`\`\`

### 🔩 Props

| name            | description             |
| --------------- | ----------------------- |
| markedHeadingId | rename to \`mdHeadingId\` |
| historyLength   | deleted                 |

### 🤿 Config

\`\`\`diff
MdEditor.config({
-  markedRenderer: (renderer) => renderer,
-  markedExtensions: [],
-  markedOptions,
+  codeMirrorExtensions: (theme, extensions) => extensions,
+  markdownItConfig: (mdit) { }
})
\`\`\`

### 🎤 Shortcut Key

| key      | function | description |
| -------- | -------- | ----------- |
| CTRL + Q | quote    | deleted     |

### 🪤 Component

#### 🐻 MdCatalog

- **props**

  - \`markedHeadingId\`: deleted, use \`mdHeadingId\` instead of it
`,d=`## 🧙🏼 从 3.x 升级到 4.x

### 🏄🏼 引用方式

4.0 版本开始支持按需引用组件，不再默认导出编辑器。

#### 🏄🏼‍♂️ 全局引用

\`\`\`diff
- <script src="https://unpkg.com/md-editor-v3@latest/lib/md-editor-v3.umd.js"><\/script>
+ <script src="https://unpkg.com/md-editor-v3@latest/lib/umd/index.js"><\/script>
<script>
  const App = {
    data() {
      return {
        text: 'Hello Editor!!'
      };
    }
  };
- Vue.createApp(App).use(MdEditorV3).mount('#md-editor-v3');
+ Vue.createApp(App).use(MdEditorV3.MdEditor).mount('#md-editor-v3');
<\/script>
\`\`\`

#### 🏄🏼‍♀️ ES Module

\`\`\`diff
<script setup>
- import MdEditor from 'md-editor-v3';
- const NormalToolbar = MdEditor.NormalToolbar;
- const DropdownToolbar = MdEditor.DropdownToolbar;
- const ModalToolbar = MdEditor.ModalToolbar;
- const MdCatalog = MdEditor.MdCatalog;
+ import { MdEditor, NormalToolbar, DropdownToolbar, ModalToolbar, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
<\/script>
\`\`\`

### 🔖 Props

| 名称        | 说明                            |
| ----------- | ------------------------------- |
| previewOnly | 已移除，使用组件\`MdPreview\`替换 |

### 🪤 内部组件

新增\`MdPreview\`组件，替换原编辑器的\`previewOnly\`属性，可以减少代码体积。

\`\`\`diff
<template>
- <MdEditor previewOnly />
+ <MdPreview />
</template>

<script setup>
- import MdEditor from 'md-editor-v3';
+ import { MdPreview } from 'md-editor-v3';
- import 'md-editor-v3/lib/style.css';
+ import 'md-editor-v3/lib/preview.css';
<\/script>
\`\`\`

---

## 🧙🏻‍♂️ 从 2.x 升级到 3.x

下面列举的是\`3.x\`不兼容\`2.x\`的内容，兼容内容不作展示。

### 🤹🏼‍♂️ 语法

- 删除线

  \`\`\`diff
  - ~It is a dream deeply rooted in the American dream.~
  + ~~It is a dream deeply rooted in the American dream.~~
  \`\`\`

### 🔩 Props

| 名称            | 说明                |
| --------------- | ------------------- |
| markedHeadingId | 修改为\`mdHeadingId\` |
| historyLength   | 已移除              |

### 🤿 配置项

\`\`\`diff
MdEditor.config({
-  markedRenderer: (renderer) => renderer,
-  markedExtensions: [],
-  markedOptions,
+  codeMirrorExtensions: (theme, extensions) => extensions,
+  markdownItConfig: (mdit) { }
})
\`\`\`

### 🎤 快捷键

| 键位     | 功能     | 说明   |
| -------- | -------- | ------ |
| CTRL + Q | 添加引用 | 已移除 |

### 🪤 内部组件

#### 🐻 目录导航

- **props**

  - \`markedHeadingId\`: 已删除，使用\`mdHeadingId\`代替。
`,u={class:"container"},v={class:"doc"},g={name:"ContrastPage"},C=i({...g,setup(E){const n=a(),e="doc-contrast",o=s(n.state.lang==="en-US"?r:d);return m(()=>n.state.lang,()=>{o.value=n.state.lang==="en-US"?r:d}),(w,h)=>(p(),l("div",u,[c("div",v,[t(M,{editorId:e,modelValue:o.value},null,8,["modelValue"]),t(f,{editorId:e})])]))}});export{C as default};
