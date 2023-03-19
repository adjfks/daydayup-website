# CSS

## 👀基础

### 1.块级元素和行内元素

* 块级元素会独占一行，其宽度自动填满其父元素宽度 ，行内元素不会独占一行，相邻的行内元素会排列在同一行里，直到一行排不下，才会换行，其宽度随元素的内容而变化。

* 块级元素可以设置 width, height属性，行内元素设置width, height无效。

* 块级元素可以设置margin 和 padding.行内元素上下margin 和 上下padding无效。

* 块级元素可以包含行内元素和块级元素。行内元素不能包含块级元素。

### 2. CSS 中类 (classes) 和 ID 的区别？

1. 书写上的差别：class名用“.”号开头来定义，id名用“#”号开头来定义；
2. 调用上的区别：在同一个html网页页面中class是可以被多次调用的（在不同的地方）。 而id名作为标签的身份则是唯一的，id在页面中只能出现一次。 在js脚本中经常会用到id来修改一个标签的属性
3. id作为元素的标签，用于区分不同结构和内容，而class作为一个样式， 它可以应用到任何结构和内容上。
4. 在布局思路上，一般坚持这样的原则：id是先确定页面的结构和内容，然后再为 它定义样式：而class相反，它先定义好一类样式，然后再页面中根据 需要把类样式应用到不同的元素和内容上面。
5. 在实际应用时，class更多 的被应用到文字版块以及页面修饰等方面，而id更多地被用来实现宏伟布局和设计 包含块，或包含框的样式。
6. ID会生成一个全局变量，通过该变量可以获取对应元素，但是大量ID会污染全局命名空间。

### 3.请问 “resetting” 和 “normalizing” CSS 之间的区别？你会如何选择，为什么？

* `Normalize` 相对「平和」，注重通用的方案，重置掉该重置的样式，保留有用的 `user agent` 样式， 同时进行一些 `bug` 的修复，这点是 `reset` 所缺乏的。
* `Reset` 相对「暴力」，不管你有没有用，统统重置成一样的效果，且影响的范围很大， 讲求跨浏览器的一致性。
* `Normalize.css`是一种CSS reset的替代方案。它们的`区别`有：
1. Normalize.css 保护了有价值的 默认值，Reset通过为几乎所有的元素施加默认样式，强行使得元素有相同的 视觉效果。相比之下，Normalize.css保持了许多默认的浏览器样式。这就意味着 你不用再为所有公共的排版元素重新设置样式。当一个元素在不同的浏览器中有不同 的默认值时，Normalize.css会力求让这些样式保持一致并尽可能与现代标准相符合。
2. Normalize.css 修复了浏览器的bug，它修复了常见的桌面端和移动端浏 览器的bug。这往往超出了Reset所能做到的范畴。关于这一点，Normalize.css修复 的问题包含了HTML5元素的显示设置、预格式化文字的font-size问题、在IE9中SVG 的溢出、许多出现在各浏览器和操作系统中的与表单相关的bug。
3. Normalize.css 不会让你的调试工具变的杂乱
4. Normalize.css 是模块化的
5. Normalize.css 拥有详细的文档 选择Normalize.css ，主要是 reset.css为几乎所有的元素施加默认样式，所 以需要对所有公共的排版元素重新设置样式，这是一件很麻烦的工作。

### 4.浮动及其工作原理？

float属性定义了元素是否浮动及在哪个方向浮动，在CSS中任何元素都可以浮动，且浮动元素会生成一个块级框，而不论它本身是何种元素。并且盒子的宽度不在伸展，而是根据盒子里面的内容的宽度来确定。浮动属性会使得浮动的元素脱离文档流，所以文档的普通流中的块框会表现的像浮动框不存在一样。

### 5. block，inline和inline-block的概念以及区别？

* 首先这是display中的三个属性值，用于设置元素的类型。元素类型在HTML5之前分为两种分 别是块级元素（ block-level elements）和内联元素（ inline elements）。

* 当display的属性值被设置为block时，元素会以块级元素（ block-level elements）显示， 而设置为inline时会以内联元素（ inline elements）显示。

* display:block 元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满 其父元素宽度。 block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。 block元素可以设置margin和padding属性。

* display:inline inline元素不会独 占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素 的内容而变化。 inline元素设置width,height属性无效。 inline元素**竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会产生边距效果**，其余方向可以。

* display:inline-block 简单来说就是将**对象呈现为inline对象**，但是对象的**内容作为block对象呈现。** 比如我们可以给一个a元素设置`display:inline-block`属性值，使其既具有block的宽度高度特性又具有inline的同行特性。**属性为inline-block元素之间的空格或者换行在浏览器上会是一个空白的间隙**。 且IE6和7是不支持这个属性的，需要通过*display:inline;*zoom:1做hack处理。

### 6.请解释 CSS sprites，以及你要如何在页面或网站中实现它。

* 通常被意译为“CSS图像拼合”或“CSS贴图定位”，也叫雪碧图，精灵图。 CSS Sprites就是把网页中一些背景图片整合到一张图片文件中， 再利用CSS的`“background-image”，“background- repeat”，“background-position”` 的组合进行背景定位，`background-position`可以用数字精确定位出背景图片的位置。

* 优点：当页面加载时，不是加载每个单独图片，而是一次加载整个组合图片。这是一个了不起的改进， 它大大减少了HTTP请求的次数，减轻服务器压力，同时缩短了悬停加载图片所需要的时间延迟， 使效果更流畅，不会停顿。

* 缺点：做图像拼合的时候很麻烦。

### 7.CSS实现水平垂直居中？

1. **绝对定位+margin:auto**：子元素设置绝对定位，四个方向设为0，子元素本身没有设置宽高就会被拉伸到占满父元素，如果子元素本身有设置宽高那么就是它自己的宽高，但是它的虚拟占位已经是整个父元素，此时设置`margin:auto`就可以水平垂直居中。

2. **绝对定位+负margin**：子元素设置绝对定位和top/left为-50%，然后设置负margin为自身宽高的一半，这种方法要求子元素宽高已知。

3. **绝对定位+transform**：子元素设置绝对定位和top/left为50%，然后设置`transform: translate(-50%,-50%)`，这种方法无需知道子元素具体宽高。

4. **table布局**：父元素设置`display: table-cell; text-align: center; verticle-align: middle`，子元素设置`display: inline-block`可以让所有行内块元素水平垂直居中。

5. **flex布局**：父元素设置`display: flex; justify-content: center; align-items: center`

6. **grid布局**：父元素设置`display: grid;align-items:center;justify-content: center;`

### 8. 常见的定位类型

静态定位（static,默认）、相对定位（relative）、绝对定位(absolute)、固定定位（fixed）、粘性定位(sticky)

* 静态定位是所有元素的默认行为

* 相对定位指定的top、left、right、bottom值相对于元素原本的位置移动。

* 绝对定位的元素不再存在于正常文档布局流中。绝对定位的元素如果没有设置宽高，此时设置四个方向为0则会占满父容器。绝对定位的包含元素是带有非static定位的祖先元素，如果没有，则它会相对于初始容器放置，这个初始容器就是`<html>`标签所在的容器，也就是说该元素被放在了html元素的外面。定位元素可以使用z-index指定该元素及其后代元素或 flex 项目的层级。

* 固定定位相对于浏览器视口本身。

* sticky定位基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点（例如，从视口顶部起1​​0像素）为止，此后它就变得固定了；表格中的`<dt>`元素也可以添加sticky定位。

### 9. css权重

* 权重计算方式：从0开始，一个行内样式+1000，一个id选择器+100，一个属性选择器、class或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。
1. 常用选择器权重优先级：***!important > id > class > tag***
2. !important可以提升样式优先级，但不建议使用。如果!important被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上!important。 例如：*background: blue !important;*
3. 如果两条样式都使用!important，则权重值高的优先级更高
4. 在css样式表中，同一个CSS样式你写了两次，后面的会覆盖前面的
5. 样式指向同一元素，权重规则生效，权重大的被应用
6. 样式指向同一元素，权重规则生效，权重相同时，就近原则生效，后面定义的被应用
7. 样式不指向同一元素时，权重规则失效，就近原则生效，离目标元素最近的样式被应用

### 10. css3有哪些新特性？

css3的新特性有很多，比如过渡、动画、2d和3d转换、选择器、阴影、边框、背景、渐变、flex布局等

1. 过渡transition

过渡是元素从**一种样式逐渐改变为另一种**的效果。要实现这一点，必须规定两项内容：指定要添加效果的**CSS属性**指定效果的**持续时间**。

2. 动画animation

可以指定动画名称、运动曲线、持续时间等，通过`animation-fill-mode: forward | backward | both | none`还可以指定动画在执行前后如何将样式应用于其目标。

3. 转换transform

可以位移、旋转、缩放

4. 新的选择器
* :nth-child(n)

* :last-chid(n)

* :checked 选择每个被选中的Input元素

* :disabled 选择每个被禁用的input元素
5. 阴影box-shadow

6. 边框圆角border-radius

7. 超出省略号

设置三个：溢出隐藏、不换行，超出省略号

    overflow:hidden;
    white-space:nowrap; 
    text-overflow:ellipsis;

多行超出省略号:（目前只支持webkit）

    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

不要给盒子设置上下padding，否则：

![](file:///./images/2.png?msec=1673664295640)

8. 颜色可以设置透明度rgba

### 11.css性能优化？

1. 合并css文件，如果页面加载10个css文件,每个文件1k，那么也要比只加载一个100k的css文件慢。

2. 通过基于媒体查询将CSS分成多个文件，在link标签上添加媒体查询，可以防止在**下载未使用的CSS**期间阻止渲染。通过添加 media属性附加媒体查询，告诉浏览器何时应用样式表。当浏览器看到一个它知道只会用于特定场景的样式表时，**它仍会下载样式，但不会阻塞渲染。**

3. 可以使用css的will-change属性告诉浏览器元素的哪些属性需要修改，使浏览器能够在元素实际更改之前设置优化，通过在实际更改前执行耗时的工作以提升性能。不过这个属性不容易用好。

4. 减少css嵌套，最好不要嵌套三层以上。

5. 不要在ID选择器前面进行嵌套，ID本来就是唯一的而且权限值大，嵌套完全是浪费性能。

6. 建立公共样式类，把相同样式提取出来作为公共类使用。

7. 减少通配符*或者类似[hidden="true"]属性选择器的使用，因为它们是挨个元素查找，消耗性能。

8. 巧妙运用css的继承机制，如果父节点定义了，子节点就无需定义。

### 12. css开启硬件加速？

以下三种css3属性会开启GPU加速：

1. transform

2. opacity

3. filter

### 13. css选择器是否区分大小写

1. CSS属性、值、伪类名、伪元素名、元素名不区分大小写。
2. CSS 类、 id 、 urls 、 font-families 是区分大小写的。
3. 在 html quirks 模式下，css 即使对于 ID 和类也不区分大小写[demo](https://codepen.io/swapnilPakolu/pen/MWgvQyB?&editable=true#anon-signup)

### 14. 行内(inline)元素 设置margin-top和margin-bottom 是否起作用？

需要分情况讨论：

1. 对于非替换的行内元素如span标签不起作用，上下margin不撑开父级容器。
2. 对于替换的行内元素如img标签起作用，上下margin可以撑开父容器。

### 15. 说说伪类和伪元素的区别？

伪类用于向当前选择元素的某个特殊状态添加样式。例如元素的激活，选中，聚焦，鼠标经过等状态。

伪元素则用于对当前选择元素的某部分添加样式。伪元素不会生成在DOM树中。

常见的伪类有：`:active`,`:hover`,`:checked`,`:nth-child(an+b)`,`:nth-of-type(an+b)`,`:first-child`等

常见的伪元素有：`::before`,`::after`,`::first-line`,`::first-letter`

### 16. dpr是啥

dpr即物理像素比，设备的物理像素和逻辑像素的比值，如2:1表示4个物理像素表示一个css像素。

假设有一张图片的实际大小为10px * 10px，我们像让它的dpr为2:1的设备上展示实际的大小，那么设置其css大小应该为5px.

### 17. 如何创建一个BFC？
1. 文档根元素`<html>`就是一个BFC
2. 浮动元素也是一个BFC
3. 定位为非static的元素
4. overflow不为visible的块级元素
5. `display: flow-root`显式创建一个BFC且不会有副作用
6. flex的子项也是BFC
7. 表格单元格或设置了`display: table-cell`的元素
8. 设置了`display: inline-block`的元素
9. 网格布局元素

### 18. 圣杯布局和双飞翼布局？

- 圣杯布局

1. HTML结构中间栏放第一，然后是左栏和右栏
2. 父容器设置左右padding为左栏和右栏宽度，中间栏设置宽度为父容器宽度，所有子元素都设置左浮动，此时中间栏将左右栏挤到下一行
3. 左右栏通过负margin值回到上一行，左栏`margin: -100%;`（百分数相对父容器宽度），右栏设置`margin: -自身宽度`
4. 左右栏设置相对定位，左栏`left: -自身宽度`, 右栏`left: 自身宽度`

```html
<div>
    <div class="center"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```

- 双飞翼布局

和圣杯不同的是左右栏位置是通过中间栏的margin挤开而不是padding, HTML结构也作相应调整

1. HTML结构中间栏容器外再套一层
2. 父容器中所有子元素都设置左浮动
3. center块设置左右margin
4. 左右只需设置负margin回到上一行，不用相对定位了

```html
<div>
    <div class="wrapper">
        <div class="center"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```
